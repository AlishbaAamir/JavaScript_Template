// -----------MATH METHODS----------

// 1. Write a program that takes a positive integer from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number
var num = +prompt("Enter the Positive Integers")
var a=Math.round(num)
var b=Math.floor(num)
var c=Math.ceil(num)
document.write("<br><h3>Positive Integers</h3>"+"Number: "+num+"<br>Round off value: "+a+"<br> Floor value: "+b+"<br> Ceil value: "+c)

// 2. Write a program that takes a negative floating point number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number
var num = +prompt("Enter the Negative Integers")
var a=Math.round(num)
var b=Math.floor(num)
var c=Math.ceil(num)
document.write("<br><h3>Negative Intrgers</h3>"+"Number: "+num+"<br>Round off value: "+a+"<br> Floor value: "+b+"<br> Ceil value: "+c)

// 3. Write a program that displays the absolute value of a number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5
var number=+prompt("Enter the Number")
var ab=Math.abs(number)
document.write("<br><h3>Absoulute Valur</h3>"+"Number: "+number+"<br>Absoulute Value: "+ab)

// 4. Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser.:
var bigDecimal = Math.random();
var improvedNum = (bigDecimal * 6) + 1;
 var numberOfStars = Math.floor(improvedNum);
 document.write("<br><h3>Random Value</h3>"+" Random dice Vale: "+numberOfStars)


//  5. Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser
var coin=Math.random()
var toss=(coin*2)+1
var coinValue=Math.floor(toss)
document.write("<h3>Coin Toss</h3>")
 if(coinValue==2){
    document.write(coinValue+"<br>Random coin Value: Head")
 }
 else{
    document.write(coinValue+"<br>Random coin Value: Tail") 
 }

//  6. Write a program that shows a random number between 1 and 100 in your browser.
 var bigNum=Math.random()
 var num=(bigNum*100)+1
 var totalNum=Math.ceil(num)
 document.write("<br>Random Number Between 1 to 100: "+totalNum)

//  7. Write a program that asks the user about his weight. Parse the user input and display his weight in your browser. 
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

var weight=+prompt("Enter your weight in Kilogram")

document.write("<br>The weight of User is "+weight+" Kilogram")

// 8. Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number 
// between 1 and 10. If the user input equals the secret number, congratulate the user.
var secret=+prompt("Enter the secret Number")
var a=Math.random()
var b=(a*10)+1
var secretNum=Math.ceil(b)
document.write("<h3>Random Secret Number</h3>")
if(secretNum==5){
    document.write("Congratulations!")
}
else{
    document.write("Try Again<br>")
}


document.write("<br>------------End-------------")