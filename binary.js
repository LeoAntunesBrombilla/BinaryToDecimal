
document.getElementById("converter").addEventListener("click", converter)

function converter(){
    let binarioNumber = document.getElementById("binario").value;
    let answer = parseInt(binarioNumber, 2);
    document.getElementById("decimal").value = answer;
}
