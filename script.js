document
  .getElementById("calculate-btn")
  .addEventListener("click", calculatePrimes);

function calculatePrimes() {
  const max = 1000000;
  let primes = [];
  let isPrime = Array(max + 1).fill(true); // set 1000001 with all vals set to true
  isPrime[0] = isPrime[1] = false; // 0 and 1 are not prime numbers, so set vals false

  for (let i = 2; i <= max; i++) {
    // start with 1st prime number: 2
    if (isPrime[i]) {
      primes.push(i);
      for (let j = i * i; j <= max; j += i) {
        // Mark all multiples of 2 as false
        isPrime[j] = false;
      }
    }
  }

  displayPrimes(primes);
}

function displayPrimes(primes) {
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = primes.join(", ");
}
