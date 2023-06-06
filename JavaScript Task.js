// NUMBER 1
console.log("_____________________________________________________________");
console.log("NUMBER 1");

function ftoc(f_num) {
  return (f_num - 32) * (5 / 9);
}
var room = ftoc(80);
console.log(room);

// NUMBER 2
console.log("_____________________________________________________________");
console.log("NUMBER 2");

const Avg = (array) => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum / array.length;
};
console.log(Avg([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(Avg([20, 30, 40, 50, 60, 70, 80, 90, 100]));

//NUMBER 3
console.log("_____________________________________________________________");
console.log("NUMBER 3");

function divisible(n, x, y) {
  if (n % x == 0 && n % y == 0) {
    return true;
  } else {
    return false;
  }
}
var as = divisible(2, 1, 23);
console.log(as);

//NUMBER 4
console.log("_____________________________________________________________");
console.log("NUMBER 4");
console.log(
  "// 4. Create a function that will output the first 100 prime numbers"
);
function getPrimeNumbers(limit) {
  for (let i = 0; i < limit; i++) {
    if (i % 2 != 0) {
      console.log(i + "Not Prime");
    } else {
      console.log(i + "Prime");
    }
  }
}
// Test Case
getPrimeNumbers(100);

//NUMBER 5
console.log("_____________________________________________________________");
console.log("NUMBER 5");
console.log(
  "Create a function that will return a boolean specifying is a number is a prime number"
);

function booleanprime(num) {
  let isprime = "";
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      isprime = false;
    } else {
      isprime = true;
    }
  }
  return isprime;
}
booleanprime(20);

// NUMBER 6
console.log("_____________________________________________________________");
console.log("NUMBER 6");
console.log("Create a function that receives an array of diverse numbers.");
console.log("But returns an array of positive numbers");

function getPositiveNumbers(numbers) {
  const positiveNumbers = numbers.filter((num) => {
    return num > 0;
  });
  return positiveNumbers;
}

// Generate an array of random numbers
const randomNumbers = [];
for (let i = 0; i < 10; i++) {
  randomNumbers.push(Math.floor(Math.random() * 201) - 100);
}

// Get the positive numbers from the array
const positiveNumbers = getPositiveNumbers(randomNumbers);
console.log(positiveNumbers);

// NUMBER 7
console.log("____________________________________________________________");
console.log("NUMBER 7");
console.log("Write a program that prints the numbers from 1 to 100");
console.log("But for multiples of 3 prints 'Fizz' instead of the");
console.log("Number and for the multiples of 5 prints 'Buzz.'");
console.log("For numbers which are multiples of 3 and 5, print 'FizzBuzz.'");

function FizzBuzz(limit) {
  for (let i = 1; i <= limit; i++) {
    if (i % 3 === 0) {
      console.log(i + " FIZZ");
    }
    if (i % 5 === 0) {
      console.log(i + " BUZZ");
    }
    if (i % 3 && i % 5 === 0) {
      console.log(i + " FIZZ BUZZ");
    } else {
      console.log(i);
    }
  }
}
FizzBuzz(100);

// NUMBER 8
console.log("_____________________________________________________________");
console.log("NUMBER 8");
console.log("Write a function that generates hastags");

function hashTagCreator(text) {
  let grpWords = text.split(" ");

  for (let i = 0; i < grpWords.length; i++) {
    grpWords[i] = grpWords[i][0].toUpperCase() + grpWords[i].substr(1);
  }
  hashTag = grpWords.join("");
  console.log(`#${hashTag}`);
}

hashTagCreator("money making machine");
