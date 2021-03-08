document.getElementById("converter").addEventListener("click", converter);

let binaryTest;


// função que checa se o valor é binário
function isArrayBool(array) {
  for (var i of array) {
    if (i !== "0" && i !== "1") return false;
  }
  return true;
}

// calcula o binario e devolve no HTML
function converter() {
  let binarioNumber = document.getElementById("binario").value;
  binaryTest = [...binarioNumber];
  if (isArrayBool(binaryTest)) {
    let answer = parseInt(binarioNumber, 2);
    document.getElementById("decimal").value = answer;
  } else {
      alert("Valor não binário")
  }
  
}
