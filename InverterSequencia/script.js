
document.getElementById("botao").addEventListener("click", inverter);

    function inverter() {
            
    var texto = document.getElementById("texto").value;

           
    var resultado = '';

    for (var i = texto.length - 1; i >= 0; i--) {
                resultado += texto[i];
            }

           
        document.getElementById("resultado").textContent = resultado;
    }
   