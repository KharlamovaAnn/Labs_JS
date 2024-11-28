//2. Найти сумму всех чисел, кратных 4: программа вычисляет сумму всех чисел, кратных 4. 

const readline1 = require('readline').createInterface({ 
    input: process.stdin, 
    output: process.stdout 
}); 

readline1.question('Введите число N: ', (n) => { 
    let sum = 0; 

    for (let i = 1; i <= n; i++) { 
        if (i % 4 === 0) { // Проверка на кратность 4
            sum += i; 
        } 
    } 

    console.log(`Сумма чисел, кратных 4, до ${n}: ${sum}`); 
    readline1.close(); 
});