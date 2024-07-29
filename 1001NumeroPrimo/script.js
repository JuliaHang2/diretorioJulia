document.getElementById("botao").addEventListener("click", function() {
    const n = 1001;
    const resultado = encontrar(n);

    document.getElementById("resultado").textContent = `O ${n}º número primo é: ${resultado}`;
});
function primo(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

function encontrar(n) {
    let count = 0; 
    let num = 1;   

    while (count < n) {
        num++;
        if (primo(num)) {
            count++;
        }
    }

    return num;
}
