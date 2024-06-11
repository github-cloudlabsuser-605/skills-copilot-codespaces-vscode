function add(a, b) {
    return a + b;
}

// BEGIN: Test Cases
console.log(add(2, 3)); // Expected output: 5
console.log(add(-1, 5)); // Expected output: 4
console.log(add(0, 0)); // Expected output: 0
// END: Test Casesconst readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Test Case 1: Addition
rl.question('Enter the first number: ', (firstNumber) => {
    rl.question('Enter the operator ( +, -, *, / ): ', (operator) => {
        rl.question('Enter the second number: ', (secondNumber) => {
            let result;

            switch(operator) {
                case '+':
                    result = parseFloat(firstNumber) + parseFloat(secondNumber);
                    console.log(`Test Case 1: ${firstNumber} + ${secondNumber} = ${result}`);
                    break;
                case '-':
                    result = parseFloat(firstNumber) - parseFloat(secondNumber);
                    console.log(`Test Case 1: ${firstNumber} - ${secondNumber} = ${result}`);
                    break;
                case '*':
                    result = parseFloat(firstNumber) * parseFloat(secondNumber);
                    console.log(`Test Case 1: ${firstNumber} * ${secondNumber} = ${result}`);
                    break;
                case '/':
                    if(secondNumber != '0') {
                        result = parseFloat(firstNumber) / parseFloat(secondNumber);
                        console.log(`Test Case 1: ${firstNumber} / ${secondNumber} = ${result}`);
                    } else {
                        console.log('Error! Division by zero is not allowed.');
                        rl.close();
                        return;
                    }
                    break;
                default:
                    console.log('Invalid operator! Please enter one of +, -, *, /.');
                    rl.close();
                    return;
            }

            rl.close();
        });
    });
});

// Test Case 2: Division by zero
rl.question('Enter the first number: ', (firstNumber) => {
    rl.question('Enter the operator ( +, -, *, / ): ', (operator) => {
        rl.question('Enter the second number: ', (secondNumber) => {
            let result;

            switch(operator) {
                case '+':
                    result = parseFloat(firstNumber) + parseFloat(secondNumber);
                    console.log(`Test Case 2: ${firstNumber} + ${secondNumber} = ${result}`);
                    break;
                case '-':
                    result = parseFloat(firstNumber) - parseFloat(secondNumber);
                    console.log(`Test Case 2: ${firstNumber} - ${secondNumber} = ${result}`);
                    break;
                case '*':
                    result = parseFloat(firstNumber) * parseFloat(secondNumber);
                    console.log(`Test Case 2: ${firstNumber} * ${secondNumber} = ${result}`);
                    break;
                case '/':
                    if(secondNumber != '0') {
                        result = parseFloat(firstNumber) / parseFloat(secondNumber);
                        console.log(`Test Case 2: ${firstNumber} / ${secondNumber} = ${result}`);
                    } else {
                        console.log('Test Case 2: Error! Division by zero is not allowed.');
                        rl.close();
                        return;
                    }
                    break;
                default:
                    console.log('Invalid operator! Please enter one of +, -, *, /.');
                    rl.close();
                    return;
            }

            rl.close();
        });
    });
});// Test Case 1: Addition
console.log(add(2, 3)); // Expected output: 5
console.log(add(-1, 5)); // Expected output: 4
console.log(add(0, 0)); // Expected output: 0

// Test Case 2: Subtraction
console.log(add(10, -5)); // Expected output: 5
console.log(add(-3, -7)); // Expected output: -10
console.log(add(0, -10)); // Expected output: -10

// Test Case 3: Multiplication
console.log(add(2, 3)); // Expected output: 6
console.log(add(-2, 4)); // Expected output: -8
console.log(add(0, 5)); // Expected output: 0

// Test Case 4: Division
console.log(add(10, 2)); // Expected output: 5
console.log(add(-10, 2)); // Expected output: -5
console.log(add(0, 5)); // Expected output: 0