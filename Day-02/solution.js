import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a string: ', (inputStr) => {
    if (inputStr.trim().length === 0) {
        console.log("Empty string!");
        rl.close();
        return;
    }

    const strLen = inputStr.length;
    let reverseStr = '';

    for (let index = strLen - 1; index >= 0; index--) {
        reverseStr += inputStr[index];
    }

    console.log(`Reverse string: ${reverseStr}`);

    rl.close();
});
