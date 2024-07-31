
(function() {
    const base = 2;
    const expoente = 8;
    const resultadoDiv = document.getElementById("resultado");

    resultadoDiv.innerHTML += `Base: ${base}<br>`;
    resultadoDiv.innerHTML += `Expoente: ${expoente}<br><br>`;

    for (let i = 0; i <= expoente; i++) {
        let resultado = 1;
        for (let j = 0; j < i; j++) {
            resultado *= base;
        }
        resultadoDiv.innerHTML += `${base}<sup>${i}</sup> = ${resultado}<br>`;
    }
})();
