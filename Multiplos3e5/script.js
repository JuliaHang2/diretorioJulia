
document.getElementById("botao").addEventListener("click", Soma);

function Soma() {
    let soma = 0;
    for (let i = 1; i < 1000; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            soma += i;
        }
    }


    document.write("A soma dos múltiplos de 3 ou 5 abaixo de 1000 é:" + parseInt(soma));

}



