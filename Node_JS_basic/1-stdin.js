// displays welcome message for new users
console.log('Welcome to Holberton School, what is your name?');

process.stdin
  .on('readable', () => {
    const name = process.stdin.read();
    if (name) {
      process.stdout.write(`Your name is: ${name}`);
    }
  })
  .on('end', () => {
    process.stdout.write('This important software is now closing\n');
  });
