// -------VARIABLES FOR NUMBER--------


// 1. Declare a variable called age & assign to it your age. Show your age in an alert box.
var age = 19 
alert("i am " +age + " year old")

// 2. Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her
// number of visits on your web page. For example: “You have visited this site N times”.
var visitor = 25
alert("you have visited this website "+visitor+ " times")

// 3. Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser:
var birthYear= 2003
var year=document.write("My birth year is "+ birthYear + "<br>  Data type of my declare varaiable is number<br>")

// 4. A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in variables
// the following information:
// a). Visitor’s name b). Product title c). Quantity i.e. how many products a order visitor wants to 
// Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”

var visitor = "Umer"
var product= "T-shirts"
var quantity = +prompt("how many products a visitor wants to order")
var store= document.write("<br>"+visitor+" ordered " +quantity+ " " +product+ " on Imtaiz Supermarket")

