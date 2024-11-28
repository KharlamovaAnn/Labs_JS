// {Харламова А. О., АДЭУ-221, Вариант 18}
// 1. Напишите функцию, которая возвращает площадь круга по радиусу 

const readline = require('readline').createInterface({ 
    input: process.stdin, 
    output: process.stdout 
}); 

function CircleArea(radius) {
  const area = Math.PI * radius * radius; // Вычисляю площадь круга: пи * r^2
  return area; 
}

readline.question('Введите радиус круга: ', (input) => {
  const radius = parseInt(input); 
  const result = CircleArea(radius); 
  console.log(`Площадь круга равна: ${result}`); 
  readline.close(); 
});