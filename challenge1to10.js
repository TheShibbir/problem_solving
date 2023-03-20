//Coding challenge #1 Print numbers from 1 to 10
console.log("Coding challenge #1 Print numbers from 1 to 10");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// // Coding challenge #2 print the odd numbers less than 100
console.log("Coding challenge #2 print the odd numbers less than 100");
for(let i =1; i<=100; i++){
    if(i%2 != 0){
        console.log(i);
    }
}


// Coding challenge #3 print the multiplication table with 7
console.log("Coding challenge #3 print the multiplication table with 7");
for(let i=1; i<=10; i++){
    let multiplication = 7*i;
   
   
    console.log("7 x "+i +" = " +multiplication);
}

// Coding challenge #4 Print all the multiplication tables with numbers from 1 to 10
console.log("Coding challenge #4 Print all the multiplication tables with numbers from 1 to 10");
for (let i=1; i<=10; i++){
    console.log("Multiplication Table for "+i);
    for(let j=1; j<=10; j++){
        let multiplication = i*j;
        console.log(i +" x " +j +" = " +multiplication);
    }
}

// Coding challenge #5 Calculate the sum of numbers from 1 to 10
console.log("Coding challenge #5 Calculate the sum of numbers from 1 to 10");
let sum =0
for(let i=1; i<=10; i++){
   sum = sum+i;
   
}
console.log(sum);


// Coding challenge #6 Calculate 10!
console.log(" Coding challenge #6 Calculate 10!")
let factorial = 1;
for(let i=1 ; i<=10; i++){
     factorial = factorial*i;
// console.log(factorial);
}
console.log(factorial);


// Coding challenge #7 Calculate the sum of odd numbers greater than 10 and less than 30
console.log(" Coding challenge #7 Calculate the sum of odd numbers greater than 10 and less than 30");
let oddSum = 0;
for(let i=11; i<=30; i++){
    if(i%2 !=0){
        oddSum = oddSum+i;
    }
    
}
console.log(sum);

// Coding challenge #8 Create a function that will convert from Celsius to Fahrenheit
console.log("Coding challenge #8 Create a function that will convert from Celsius to Fahrenheit");
function celsiusToFahrenheit(celsius){
    // here i converting celsius to fahrenheit
  const fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;

}
const celsius = 20;
const fahrenheit = celsiusToFahrenheit(celsius);
console.log(celsius ,"degrees celsius is equal to ", fahrenheit);

// Coding challenge #9 Create a function that will convert from Fahrenheit to Celsius
console.log("Coding challenge #9 Create a function that will convert from Fahrenheit to Celsius");

function fahrenheitToCelsius(fahrenheit){
    const celsius = (fahrenheit - 32)*5/9;
    return celsius;
}
const f = 68;
const c = fahrenheitToCelsius(f);
console.log(f ,"degree fahrenheit is equal to ", c);


// Coding challenge #10: Calculate the sum of numbers in an array of numbers
console.log(" Coding challenge #10: Calculate the sum of numbers in an array of numbers");
console.log("Coding challenge #10. Calculate the sum of numbers in an array of numbers");
const array = [2,3, -1, 5,7, 9,10,15,95];
let total = 0;
for(let i=0; i<array.length ; i++){

 total = total + array[i];

}

console.log(total);






