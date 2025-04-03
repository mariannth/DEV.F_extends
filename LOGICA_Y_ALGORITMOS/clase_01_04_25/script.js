function findLongestWords() {
    const text = document.getElementById("textInput").value.trim();
    if (!text) {
        document.getElementById("result").innerHTML = "<p class='text-danger'>Por favor, ingresa un texto válido.</p>";
        return;
    }
    
    const words = text.split(/\s+/).map(word => word.replace(/[^a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]/g, ""));
    let maxLength = 0;
    let longestWords = [];
    
    for (let word of words) {
        if (word.length > maxLength) {
            maxLength = word.length;
            longestWords = [word];
        } else if (word.length === maxLength) {
            longestWords.push(word);
        }
    }
    
    document.getElementById("result").innerHTML = `<p class='fw-bold'>Palabra(s) más larga(s): <span class='text-primary'>${longestWords.join(", ")}</span> (${maxLength} letras)</p>`;
}