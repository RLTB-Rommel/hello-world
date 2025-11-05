import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? ", (name) => {
  const user = name.trim() || "World";
  console.log(`\nHello World! Hello, ${user}!`);
  console.log("This project demonstrates R.Aunario's ability to design, write, and execute a basic software program using Node.js\n");
  rl.close();
});