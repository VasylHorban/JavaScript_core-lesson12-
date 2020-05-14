calculator(1, 2, 'sum');
calculator(10, 2, 'divs');
calculator('five', 3, 'mul');

function calculator(a, b, operation) {
    let result;
    try {
        if (typeof (a) != 'number' || typeof (b) != 'number') {
            throw new Error('Введене не числове значення.')
        }

        if (operation == 'sum') {
            result = a + b;
        } else if (operation == 'sub') {
            result = a - b;
        } else if (operation == 'div') {
            result = a / b;
        } else if (operation == 'mul') {
            result = a * b;
        } else {
            throw new Error('Введений неправельний оператор.')
        }

        if (typeof (result) == 'number') {
            console.log('Результат обчислення : ' + result);
        }
        
    } catch (err) {
        console.log(err.message);
    } finally {
        console.log(`Дані які ви ввели : ${a}, ${b}, ${operation}`)
    }
}
