function verificar() {
    var num = parseFloat(document.getElementById('num').value);
    
    if (num > 18) {
        alert("O usuário é maior de idade.");
    }
    
    if(num < 18){
        alert("O usuário é menor de idade.");
    }
    
}
