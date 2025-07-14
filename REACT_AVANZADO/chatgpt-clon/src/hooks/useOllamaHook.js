import { useState } from 'react';

function useOllamaHook() {
    const [response, setResponse] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    // Limpieza de respuesta para mejorar legibilidad
    const cleanText = (text) => {
        return text
            .replace(/<think>/gi, '') // elimina <think>
            .replace(/<[^>]*>/g, '')  // elimina otras etiquetas tipo <...>
            .replace(/###.*?:/g, '')  // elimina encabezados estilo "### Instruction:"
            .replace(/([^\s])([¡!¿?])/g, '$1 $2') // agrega espacio antes de signos
            .replace(/([¡!¿?])([^\s])/g, '$1 $2') // agrega espacio después de signos
            .replace(/([a-z])([A-Z])/g, '$1 $2')  // intenta separar palabras pegadas
            .replace(/\s{2,}/g, ' ')              // quita espacios dobles
            .trim();
    };

    const handleSubmit = async (_prompt) => {
        setLoading(true);
        setResponse('');
        setError(null);

        try {
            const res = await fetch('http://localhost:11434/api/generate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    model: 'deepseek-r1:1.5b',
                    prompt: `Responde en español, separando las palabras correctamente y con buena puntuación. Pregunta: ${_prompt}`,
                    max_tokens: 500,
                    stream: true,
                }),
            });

            if (!res.ok || !res.body) {
                throw new Error('Respuesta inválida del servidor');
            }

            const reader = res.body.getReader();
            const decoder = new TextDecoder('utf-8');
            let buffer = '';

            while (true) {
                const { value, done } = await reader.read();
                if (done) break;

                buffer += decoder.decode(value, { stream: true });
                const lines = buffer.split('\n');
                buffer = lines.pop(); // deja la última línea incompleta

                for (const line of lines) {
                    if (!line.trim()) continue;

                    try {
                        const parsed = JSON.parse(line);
                        if (parsed.done) return;

                        if (parsed.response) {
                            const textoLimpio = cleanText(parsed.response);
                            setResponse((prev) => prev + textoLimpio);
                        }
                    } catch (err) {
                        console.warn('❗ Error al parsear línea JSON', err, line);
                    }
                }
            }
        } catch (err) {
            console.error('❗ Error en la petición:', err);
            setError(err.message || 'Error al obtener la respuesta de la IA');
        } finally {
            setLoading(false);
        }
    };

    return { handleSubmit, response, error, loading };
}

export default useOllamaHook;
