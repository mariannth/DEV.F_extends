// gestorNotas.js
const fs = require('fs');
const path = './notas.json';

// Verificar si el archivo existe, y si no, crearlo con un arreglo vacío
function inicializarNotas() {
    if (!fs.existsSync(path)) {
        fs.writeFileSync(path, JSON.stringify([], null, 2), 'utf8');
    }
}

// Leer todas las notas del archivo
function leerNotas() {
    inicializarNotas();
    const data = fs.readFileSync(path, 'utf8');
    return JSON.parse(data);
}

// Guardar notas en el archivo
function guardarNotas(notas) {
    fs.writeFileSync(path, JSON.stringify(notas, null, 2), 'utf8');
}

// Crear una nueva nota
function crearNota(titulo, contenido) {
    const notas = leerNotas();
    const notaExistente = notas.find(nota => nota.titulo === titulo);

    if (notaExistente) {
        console.log('⚠️ Ya existe una nota con ese título.');
        return;
    }

    notas.push({ titulo, contenido });
    guardarNotas(notas);
    console.log('✅ Nota guardada correctamente.');
}

// Listar todas las notas
function listarNotas() {
    const notas = leerNotas();

    if (notas.length === 0) {
        console.log('📭 No hay notas guardadas.');
        return;
    }

    console.log('📋 Tus notas:');
    notas.forEach((nota, index) => {
        console.log(`${index + 1}. 📌 ${nota.titulo}: ${nota.contenido}`);
    });
}

// Eliminar una nota por su título
function eliminarNota(titulo) {
    const notas = leerNotas();
    const notasFiltradas = notas.filter(nota => nota.titulo !== titulo);

    if (notas.length === notasFiltradas.length) {
        console.log('❌ No se encontró una nota con ese título.');
        return;
    }

    guardarNotas(notasFiltradas);
    console.log('🗑️ Nota eliminada correctamente.');
}

// Manejador de comandos desde consola
const [, , comando, titulo, ...contenido] = process.argv;

switch (comando) {
    case 'crear':
        if (!titulo || contenido.length === 0) {
            console.log('⚠️ Debes proporcionar un título y contenido.');
        } else {
            crearNota(titulo, contenido.join(' '));
        }
        break;
    case 'listar':
        listarNotas();
        break;
    case 'eliminar':
        if (!titulo) {
            console.log('⚠️ Debes proporcionar el título de la nota a eliminar.');
        } else {
            eliminarNota(titulo);
        }
        break;
    default:
        console.log('❓ Comando no reconocido. Usa: crear, listar o eliminar.');
}


function guardarNotas(notas) {
    fs.writeFileSync(path, JSON.stringify(notas, null, 2), 'utf8');
}
