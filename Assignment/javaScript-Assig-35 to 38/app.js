// -----------FUNCTION --------------

// 1. Write a function that displays current date & time in your browser
function dateTime(){
    var d=new Date()
    document.write("<h3>Current Date:</h3>"+d)
}

dateTime()

// 2. Write a function that takes first & last name and then it greets the user using his full name.

function greet(){
    var firstName=prompt("Enter your First Name")
    var lastName=prompt("Enter your last Name")
    var fullName=firstName.concat(lastName)
    document.write("<h3>Full Name</h3>"+"Hi"+fullName)
}
greet()

// 3. Write a function that adds two numbers (input by user) and returns the sum of two numbers.
function addition(num1,num2){
    return num1+num2
     }
var result=addition(num1=+prompt("Enter the 1st Number"),num2=+prompt("Enter the 2nd Number"))
document.write("<br><h3>ADD Two Number</h3>"+result);

// 4. Calculator:
// Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and 
// show the desired result in your browser
// function calculator(num1,num2,sing){
//     return num1,sing,num2
// }
// var res=calculator(5,"+",3)
// alert(res)


// 5. Write a function that squares its argument.
function sqa(num1){
return num1*num1
}
var result=sqa(num1=+prompt("Enter the number"))
alert(result)

// 6. Write a function that computes factorial of a number.
function fact(num){
if(num==0){
    return 1;
}
else{
    return num*fact(num-1)
}
}
var result=fact(num=+prompt("Enter The Number"))
alert( "The Factorial of "+ num+  " is "+result)

// 7. Write a function that take start and end number as inputs & display counting in your browser.
function count(){
    var start=+prompt("Enter The Number")
var end=+prompt("Enter the Last Number")
for(i=start;i<=end;i++){
    document.write(i)
}
}
count()

// 8. Write a nested function that computes hypotenuse of a right angle triangle. 
// Hypotenuse2 = Base2 + Perpendicular2
function calculateHypotenuse(base, perpendicular) {
    function calculateSquare(num) {
      return num * num;
    }
    var baseSquare = calculateSquare(base);
    var perpendicularSquare = calculateSquare(perpendicular);
    var hypotenuse = Math.sqrt(baseSquare + perpendicularSquare);
    document.write("The hypotenuse of the right angle triangle is"+ hypotenuse);
    return hypotenuse;
  }
  calculateHypotenuse(3, 4);
  calculateHypotenuse(5, 12);

// }
// 10.Write a JavaScript function that checks whether a passed string is palindrome or not?
function palin(str){
    var d=string.length;

for(var i=0;i<d/2;i++){
    if (string[i] !== string[d - 1 - i]) {  
        alert( 'It is not a palindrome'); 
}
else{
    alert("It's a palindrome")
}
}
}
var string=prompt("Enter the string or Number")
var result=palin(string)
alert(result)

// 11. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'

function capitalize(str) {
    let words = str.split(" ");
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(" ");
  }
  var str = 'the quick brown fox';
  var result = capitalize(str)
  document.write(result); 

//    Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of 
//  occurrences of the specified letter within the string. Sample arguments : 'JSResourceS.com', 'o'

function char(str, letter) 
{
 var letter_Count = 0;
 for (var i = 0; i < str.length; i++) 
 {
    if (str.charAt(i) == letter) 
      {
      letter_Count += 1;
      }
  }
  return lettert_Count;
}

var result =char('JSResourceS.com', 'o');
alert(result)


// 14. The Geometrizer Create 2 functions that calculate properties of a circle, using the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output 
// "The circumference is NN".Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area is NN".
// Circumference of circle = 2πr
// Area of circle = πr2

function calcCircumference(radius) {
    var circumference = 2 * Math.PI * radius;
    document.write("<h3>Geometrizer</h3>"+"The circumference is"+ circumference);
    return circumference;
  }
  
//    Area of circle = πr^2, and output "The area is NN".
  function calcArea(radius) {
    var area = Math.PI * radius ** 2;
    document.write("The area is"+area);
    return area;
  }
  calcCircumference(5);