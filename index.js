function sum(num) {
  if (typeof num !== "number" || num % 1 !== 0) {
    return "The value passed is not a number";
  }
  let total = 0;
  for (let i = 0; i <= num; i++) {
    total += i;
  }
  return total;
}
console.log(sum(5));  
console.log(sum("5"));
console.log(sum(3.5)); 

function factorial(n) {
  if (typeof n !== "number" || n % 1 !== 0 || n < 0) {
    return "Enter a valid positive integer";
  }

  let result = 1;
  for (let i = n; i > 0; i--) {
    result *= i;
  }
  return result;
}


console.log(factorial(4));
console.log(factorial(0)); 



function funkyMath() {
  if (arguments.length === 2) {
   
    return arguments[1] - arguments[0];
  } else if (arguments.length === 3) {
    
    return arguments[0] + arguments[1] + arguments[2];
  } else if (arguments.length === 4) {
   
    let firstPair = arguments[0] + arguments[1];
    let secondPair = arguments[2] + arguments[3];
    return firstPair / secondPair;
  } else {
    return "Invalid number ";
  }
}


console.log(funkyMath(5, 10)); 
console.log(funkyMath(1, 2, 3)); 
console.log(funkyMath(8, 2, 3, 5)); 
let numbers = [1, 2, 33, 45, 6, 44];
let oddNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    oddNumbers.push(numbers[i]);
  }
}


oddNumbers.sort(function(a, b) {
  return a - b;
});

console.log("Odd numbers:", oddNumbers); 



let me = {
  firstName: "Samnkelisiwe",
  lastName: "Mpiyonke",
  age: 24,
  favouriteColour: "Black",
  dreamCar: "Mercedes-Benz"
};


me.favouriteFood = "Pizza";


delete me.age;

console.log(me);