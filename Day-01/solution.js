import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a string: ', (input) => {
  let count = (input.match(/\*/g) || []).length;

  if (count) {
    console.log(`Number of asterisks: ${count}`);
  } else {
    console.log('No asterisks found.');
  }

  rl.close();
});
