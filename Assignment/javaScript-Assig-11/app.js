// ----------IF…ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS -------------

// 1. Write a program that takes a character (number or string) in a variable & checks whether the given input is a 
// number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122)

var a=prompt("Enter the Number or String")
var char=a.charCodeAt(0)
if(char>=65 && char<=90){
alert( char+ "Upper Case")
}
else if(char>=97 && char<=122){
    alert(char +" lower Case")
}
else if(char >= 48 && char <= 57){
    alert( char+" Number")
}
else{
    alert("operators")
}

// 2. Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.
var a=+prompt("Enter the Number")
var b=+prompt("Enter the Number")
if(a>b){
    alert ("A is greater than B")
}
else{
    alert("B is greater than A")
}

// 3. Write a program that takes input a number from user & state whether the number is positive, negative or zero.
var num=+prompt("Enter the Number")
if(num>0){
    alert("Number is Positive")
}
else if(num<0){
    alert("Number is negative")
}
else if(num==0){
    alert("Number is equal to zero")
}
else{

}
// 4. Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise
var char=prompt("Enter The Character to check vowel or not.")
if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u"||char==="A"||char==="E"||char==="I"||char==="O"||char==="U"){
    alert("It Is A Vowel")
}
else{
    alert("It is Not A Vowel")
}

// Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then give message “ Please enter your password” ii. Check if both passwords are same. If they are 
// same, show message “Correct! The password you entered matches the original password”. Show “Incorrect password” otherwise
var userPass=prompt("Enter your password in only characters")
var pass= "abcde"

if(userPass==pass){
    alert("“Correct! The password you entered matches the original password”")
}
else if(pass!==userPass){
    alert("“ Please enter your password”")
}
else{
    alert("Incorrect Password")
}

// This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// }
// else{
// greeting = "Good evening";
// }
var hour=13
if (hour<18){
    alert("Good Day")
}
else{
 alert("Good Evening")
}

document.write("<br>-----------END----------")