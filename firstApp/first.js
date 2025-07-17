// console.log("hello")

// 1.] Check Even or Odd
// let number = 7; 

// if (number % 2 === 0) {
//   console.log(number + " is Even");
// } else {
//   console.log(number + " is Odd");
// }

// 2.] Find the Maximum of Two Numbers
// function findmaximumnumber(a,b){
//   return Math.max(a,b);
// }
// console.log(findmaximumnumber(10,5));
// console.log(findmaximumnumber(120,125));
// console.log(findmaximumnumber(45,69));

// 3.] Check Leap Year
// let Year=2023;
// if((Year %4===0 &&Year % 100 !==0) || (Year %400===0)){
//   console.log(Year+"this is a leap year")
// }else{
//   console.log(Year+"this is not a leap year")
// }

// 4.] Sum of Natural Numbers
// let n=12
// let Sum=2
// for(let i=1;i<=n;i++){
//   Sum+=i;
// }
// console.log("sum of"+n+"natural number is"+Sum);

// 5.] Factorial of a Number
// let number=5;
// let Factorial=2;
// for(let i=1;i<=number;i++){
//   Factorial*=i;
// }
// console.log("factorial number "+number+"is"+Factorial);

// 6.] Print Multiplication Table
// let number=5;
// console.log("multiplication of table is :"+number);
// for(let i=1;i<11;i++){
//   console.log(number+"x"+i+"="+(number*i));
// }

// 7.] Reverse a Number
// let number=12345;
// let Reverse=number.toString().split("").reverse().join("");
// console.log("reverse number is"+Reverse);

// 8.] Palindrome Check (Number)
// let number=155;
// let digit1=number%10;
// let digit2=Math.floor((number%100)/10);
// let digit3=Math.floor(number/100);

// if(digit1===digit3){
//   console.log(number+"is palindrom number");
// }else{
//   console.log(number+"is not palindrom number")
// }

// 8.] Palindrome Check (Number)
// let number=4;
// if(number===1){}
//   else if(number>1){
//     let isprime=true;

//     for(let i=2;i<number;i++){
//       if(number%i===0){
//         isprime=false;
//         break;
//       }
//   }
//   if(isprime){
//     console.log(number+"is a prime number");
//   }else{
//     console.log(number+"is not prime number")
//   }
// }

// 10.] Count Digits in a Number
// let number=123456;
// let Count=number.toString().length;
// console.log("numbers of digits"+Count);

// 11.] Sum of Digits
// let number = 1234;
// let sum = number .toString().split('').map(Number).reduce((a, b) => a + b, 0);
// console.log("Sum of digits is: " + sum);

// 12.] Check Armstrong Number
// let number = 153; 

// let numDigits = number.toString().length;

// let sum = number
//   .toString()                  
//   .split('')                   
//   .map(Number)                 
//   .reduce((acc, digit) => acc + Math.pow(digit, numDigits), 0); 

// if (sum === number) {
//   console.log(number + " is an Armstrong Number");
// } else {
//   console.log(number + " is NOT an Armstrong Number");
// }

// 13.]Generate fibonaci series
// let n=10;
// let n1=0,n2=1,nextterm;
// console.log("Fibonaci series:");

// for(let i=1;i<=n;i++){
//   console.log(n1);
//   nextterm=n1+n2;
//   n1=n2;
//   n2=nextterm;
// }

// 14.]check vowel or consonant
// let char = 'A'; 

// if (
//   char === 'a' || 
//   char === 'e' || 
//   char === 'i' || 
//   char === 'o' || 
//   char === 'u' ||
//   char === 'A' || 
//   char === 'E' || 
//   char === 'I' || 
//   char === 'O' || 
//   char === 'U'
// ) {
//   console.log(char + " is a Vowel");
// } else {
//   console.log(char + " is a Consonant");
// }

// 15.]simple calculater
// let number1=12;
// let number2=10;

// let operation='+';
// let result;

// if(operation==='+'){
//   result=number1+number2;
// }else if(operation==='-'){
//   result=number1-number2;
// }else if(operation==='*'){
//   result=number1*number2;
// }else if(operation==='/'){
//   result=number1/number2;
// }else{
//   console.log("invalid operation");
// }
// console.log("result:"+result);

// 16.]find the GCD(HCF)
// let number1=60;
// let number2=48;
// let GCD;

// for(let i=1;i<=number1&& i<=number2;i++){
//   if(number1 %i===0 && number2%i===0){
//     GCD=i;
//   }
// }
// console.log("GCD of " + number1 + " and " + number2 + " is: " + GCD);

// 17.]check the perfect number
// let number = 28; 
// let sum = 0;

// for (let i = 1; i < number; i++) {
//   if (number % i === 0) {
//     sum += i; 
//   }
// }

// if (sum === number) {
//   console.log(number + " is a Perfect Number");
// } else {
//   console.log(number + " is NOT a Perfect Number");
// }

// 18.]print all divisor
// let number=12;
// for(let i=1;i<=number;i++){
//     if(number %i===0){
//         console.log(i);
//     }
// }

// 19.]number is positive,negative or zero
// let number = -5; 

// if (number > 0) {
//   console.log(`${number} is positive`);
// } else if (number < 0) {
//   console.log(`${number} is negative`);
// } else {
//   console.log(`Number is zero`);
// }/

// 20.]find power(exponentiation)
let a = 5;
let b = 6;

let result = Math.pow(a, b);
console.log(result); 
