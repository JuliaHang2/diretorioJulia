document.getElementById("botao").addEventListener("click", delta);
function delta() {
    let num1 = document.getElementById("a").value;
    let num2 = document.getElementById("b").value;
    let num3 = document.getElementById("c").value;
    document.getElementById("resultado").innerHTML=(num2^2)-(4*num1*num3); 
}