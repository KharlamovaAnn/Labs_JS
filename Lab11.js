// {Харламова А. О., АДЭУ-221, Вариант 18}
//1. Сумма нечетных чисел от 1 до N: программа вычисляет сумму всех нечетных чисел от 1 до N.

const readline = require('readline').createInterface({ 
    input: process.stdin, 
    output: process.stdout 
}); 

readline.question('Введите число N: ', (n) => { 
    let sum = 0; 
    for (let i = 1; i <= n; i++) { 
        if (i % 2 !== 0) { // Изменение на нечетные числа
            sum += i; 
        } 
    } 
    console.log(`Сумма нечетных чисел до ${n}: ${sum}`); 
    readline.close(); 
});
