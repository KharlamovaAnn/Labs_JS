// 2.Напишите функцию, которая возвращает периметр квадрата по стороне

const readline = require('readline').createInterface({ 
    input: process.stdin, 
    output: process.stdout 
}); 

function SquarePerimeter(side) {
  const perimeter = 4 * side; // Вычисляем периметр: 4*a
  return perimeter; 
}

readline.question('Введите сторону квадрата: ', (userInput) => {

  const sideLength = parseInt(userInput);   {

    const result = SquarePerimeter(sideLength); 

    console.log(`Периметр квадрата со стороной ${sideLength} равен: ${result}`);

  }

  readline.close();
});

