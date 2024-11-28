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


//2. Фильтрация строк, начинающихся с буквы "А". Оставьте в массиве только строки, начинающиеся с буквы "А".

const readline1 = require('readline').createInterface({ 
    input: process.stdin, 
    output: process.stdout 
}); 


readline1.question('Введите строки, разделенные запятой: ', (input) => {
  
    const strings = input.split(',').map(str => str.trim());
    

    const filteredStrings = strings.filter(str => str.charAt(0) === 'a');


    if (filteredStrings.length > 0) {
        console.log('Результат:', filteredStrings.join(', '));
    } else {
        console.log('Нет строк, начинающихся с "a".');
    }

    readline1.close(); 
});


//3. Создание массива квадратов всех чисел от 1 до N. Программа создает массив квадратов чисел от 1 до N.

const readline2 = require('readline').createInterface({ 
    input: process.stdin, 
    output: process.stdout 
}); 

const Squares = (n) => {
    const squares = [];
    for (let i = 1; i <= n; i++) {
        squares.push(i * i); 
    }
    return squares;
};

readline2.question('Введите число N: ', (input) => {
    const n = parseInt(input); 
    if (isNaN(n) || n < 1) {
        console.log("Пожалуйста, введите положительное целое число.");
    } else {
        const squaresarr = Squares(n);
        console.log(`Массив квадратов чисел от 1 до ${n}: `, squaresarr);
    }
    readline2.close();
});