document.getElementById("botao").addEventListener("click", soma)
    function soma() {
        let a = 0;
        let b = 1;
        let somaPar = 0;

            
        while (b <= 50000) {
            if (b % 2 === 0) {
                somaPar += b;
            }

            let proximo = a + b;
                a = b;
                b = proximo;
            }

            document.getElementById("resultado").textContent = `A soma dos termos pares da sequência de Fibonacci é: ${somaPar}`;
        }
           
        