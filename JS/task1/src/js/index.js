for (let i = 11; i <= 100; i++) {
  if (i % 5 === 0) {
    const remainder = i % 7;

    if (remainder % 2 === 0) {
      console.log("True Alertttt");
    } else {
      console.log(`Remainder: ${remainder}`);
    }
  }
}
