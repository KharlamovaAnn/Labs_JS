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
        
        if (i > n) { 
            break; 
        } 
    } 

    console.log('Сумма нечетных чисел до ${n}: ${sum}'); 
    readline.close(); 
}); 


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


//3. Определить, простое ли число: программа проверяет, является ли число простым. 

const readline2 = require('readline').createInterface({ 
    input: process.stdin, 
    output: process.stdout 
}); 

readline2.question('Введите число N: ', (input) => { 
        {
        let n = Number(input);
       
        let isPrime = true; 
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) { 
                isPrime = false; 
                break; 
            }
        }

        console.log(`${n} - ${isPrime ? 'простое' : 'не простое'} число.`);
    }

    readline2.close(); 
});


