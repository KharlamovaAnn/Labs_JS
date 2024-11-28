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