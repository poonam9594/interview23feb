// Find Out Prime Numbers in a given array

function checkPrime(number) {
    if (number <= 1) {
      return false;
    } else {
      for (let i = 2; i < number; i++) {
        if (number % i == 0) {
          return false;
        }
      }
      return true;
    }
  }
  let arr = [12, 3, 1, 10, 34,1];
  arr.forEach(function (element) {
    const isPrime = checkPrime(element);
    if (isPrime) {
      console.log(`${element} is a prime number`);
    } else {
      console.log(`${element} is NOT a prime number`);
    }
  });