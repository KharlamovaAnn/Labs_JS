// {Харламова А. О., АДЭУ-221, Вариант 18}
//1. Создание массива всех четных чисел в диапазоне. Пользователь вводит два числа, программа создает массив четных чисел между ними.

const readline = require('readline').createInterface({ 
    input: process.stdin, 
    output: process.stdout 
}); 

readline.question('Введите первое число: ', (inputStart) => {
    const start = parseInt(inputStart); 

    readline.question('Введите второе число: ', (inputEnd) => {
        const end = parseInt(inputEnd); 

        if (isNaN(start) || isNaN(end) || start > end) {
            console.log("Ошибка: Проверьте числа");
        } else {
            
            const evenNumbers = [];
            for (let i = start; i <= end; i++) {
                if (i % 2 === 0) {
                    evenNumbers.push(i); 
                }
            }
            console.log(`Все четные числа между ${start} и ${end}:`, evenNumbers);
        }

        readline.close();
    });
});