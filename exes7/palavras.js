function contarPalavras() {
    var texto = document.getElementById("texto").value;
    
    texto = texto.trim();
    
    var palavras = texto.split(/\s+/);
    
    var numPalavras = palavras.length;
    
    document.getElementById("resultado").innerText = "Número de palavras: " + numPalavras;
}