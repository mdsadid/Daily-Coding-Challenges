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

    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

    const vowelCount = inputStr.split('').reduce(
        (count, char) => {
            return count + (vowels.includes(char) ? 1 : 0);
        },
        0
    );

    console.log(`Number of vowels: ${vowelCount}`);

    rl.close();
});
