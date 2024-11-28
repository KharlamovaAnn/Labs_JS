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