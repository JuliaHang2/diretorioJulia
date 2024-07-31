document.getElementById("botao").addEventListener("click", delta);
function delta() {
    let num1 = document.getElementById("a").value;
    let num2 = document.getElementById("b").value;
    let num3 = document.getElementById("c").value;

    const Delta = (num2*num2)-(4*num1*num3);

    const resolucao = `

    Δ = b² - 4ac<br>
    Δ = ${num2}² - 4 * ${num1} * ${num3}<br>
    Δ = ${num2 * num2} - ${4 * num1} * ${num3}<br>
    Δ = ${num2 * num2} - (${4 * num1 * num3})<br>
    Δ = ${Delta}

            `;
    document.getElementById('resultado').innerHTML = resolucao;
        } 

        
