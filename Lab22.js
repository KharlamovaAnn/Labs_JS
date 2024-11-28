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
