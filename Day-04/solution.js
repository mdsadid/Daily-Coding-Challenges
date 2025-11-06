import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a sentence: ', (sentence) => {
    if (sentence.trim().length === 0) {
        console.log("Empty sentence!");
        rl.close();

        return;
    }

    const words = sentence.split(' ').filter(Boolean);

    const longestWord = words.reduce(
        (carry, word) => {
            word = word.replace(/^[.,!?;:(){}\[\]*]+|[.,!?;:(){}\[\]*]+$/g, '');

            return word.length > carry.length ? word : carry;
        },
        ''
    );

    console.log(`The longest word is: ${longestWord}`);

    rl.close();
});
