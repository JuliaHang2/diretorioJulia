document.getElementById("botao").addEventListener("click", media);
function media() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let num3 = document.getElementById("num3").value;

    let media1 = num1 + num2 + num3;
    let media2 = media1/3;

    document.getElementById("ResultMedia").innerHTML = media2;
}
