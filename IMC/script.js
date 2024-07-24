document.getElementById("botao").addEventListener("click", imc);
function imc() {
    let var1 = document.getElementById("peso").value;
    let var2 = document.getElementById("altura").value;
    document.getElementById("resultIMC").innerHTML=var1/(var2*var2); 
}