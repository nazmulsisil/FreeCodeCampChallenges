function sumPrimes(num) {
  const primes = [2];
  let finalSum = 2;
  // const latestP = () => primes[primes.length - 1];

  const isPrime = whichNum => {
    let counter = 0;
    const primer = () => {
      return primes[counter];
    };
    const rebound = () => whichNum / primer();
    let foundPrime = true;
    while (primer() !== undefined && primer() <= rebound()) {
      if (whichNum % primer() === 0) {
        foundPrime = false;
      }
      counter++;
    }
    return foundPrime;
  };

  let numToTest;

  const nextPrime = x => {
    numToTest = x + 1;
    while (!isPrime(numToTest)) {
      if (++numToTest > num) return false;
    }
    return true;
  };

  while (nextPrime(primes[primes.length - 1])) {
    finalSum += numToTest;
    primes.push(numToTest);
  }

  return primes; // primes.reduce((a, b) => a + b); //.reduce((a, b) => a + b);
}

export const otherUser = data => {
  if (data.times === 1) {
    console.log(sumPrimes(20));
    return;
  }
  let count = 0;
  const start = new Date();
  while (new Date() - start < data.duration) {
    sumPrimes(500);
    count++;
  }
  return count;
};
