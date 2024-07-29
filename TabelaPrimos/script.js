function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

function generateTable() {
    const tableBody = document.querySelector('#primeTable tbody');
    
    for (let i = 0; i <= 200; i++) {
        const row = document.createElement('tr');
        const cellNumber = document.createElement('td');
        const cellPrime = document.createElement('td');

        cellNumber.textContent = i;
        if (isPrime(i)) {
            
            row.classList.add('prime');
        }

        row.appendChild(cellNumber);
        row.appendChild(cellNumber);
        tableBody.appendChild(row);
        
    }
}

document.addEventListener('DOMContentLoaded', generateTable);