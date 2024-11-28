// 3. Напишите функцию, которая возвращает сумму всех положительных чисел в массиве 

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function sumnumbers(arr) {
    let sum = 0; 

    for (let num of arr) {
        if (num > 0) {
            sum += num; 
        }
    }

    return sum; 
}

readline.question('Введите числа через запятую: ', (input) => {
  
    const numberArray = input.split(',').map(num => parseFloat(num.trim()));

    const result = sumnumbers(numberArray);

    console.log(`Сумма всех положительных чисел: ${result}`);

    readline.close();
});

