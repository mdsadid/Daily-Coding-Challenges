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

  const charArr = sentence.split('');
  const characters = charArr.filter((char) => char !== ' ');
  const charFreq = {};
  const charMap = {};

  characters.forEach((char) => {
    let lowerChar = char.toLowerCase();
    charFreq[lowerChar] = (charFreq[lowerChar] || 0) + 1;

    if (!charMap[lowerChar]) {
      charMap[lowerChar] = char;
    }
  });

  const sorted = Object.entries(charFreq).sort((a, b) => b[1] - a[1]);

  console.log('Character frequencies:');

  sorted.forEach(([lowerChar, freq]) => {
    const displayChar = charMap[lowerChar];

    console.log(`${displayChar} => ${freq}`);
  });

  rl.close();
});
