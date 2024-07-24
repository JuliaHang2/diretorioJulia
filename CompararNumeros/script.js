function comparar() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var num3 = parseFloat(document.getElementById('num3').value);
    
    var numMaior = num1;
    
    if (num2 > numMaior) {
        numMaior = num2;
    }
    
    if (num3 > numMaior) {
        numMaior = num3;
    }
    
    alert("O maior número é: " + numMaior);
  }
  

