// ---------MATH EXPRESSIONS----------

// 1. Write a program that take two numbers & add them in a new variable. Show the result in your browser
var number1st=+prompt("Enter 1st Number:")
var number2nd=+prompt("Enter 2nd Number:")
var sum= number1st+number2nd
document.write("Sum of "+number1st+ " and "+number2nd+" is "+sum )

// 2. Repeat task1 for subtraction, multiplication, division & modulus.
// SUBTRACTION
var number1=+prompt("Enter 1st Number:")
var number2=+prompt("Enter 2nd Number:")
var sub= number1-number2
var mul=number1*number2
var mod=number1%number2
var number=document.write("<h3>Subtraction</h3>"+"Subtraction of "+number1+ " and "+number2+" is "+sub+
"<br><h3>Multiplication</h3>"+"<br> Multiplication of "+number1+ " and " +number2+ " is " +mul+
"<br><h3>Modulus</h3>"+" <br>Modulus of "+number1+ " and "+number2+ " is " +mod )

// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value after addition is: 13”
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value by 3. 
// l. Output : “The remainder is : 0”

var abc
var num1= 5
var inc = num1 +1
 var num2 = 7
 var sum= inc+ num2
var dec= sum-1
var mod= dec % 3
 document.write("<br><br>Value after variable declaration is " +abc+ 
"<br>Initial value: " +num1+ "<br>  Value after increment is: "+inc+
"<br>“Value after addition is: "+sum+"<br>“Value after decrement is: "+dec+
"<br>“The remainder is :"+mod )

// 4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 
// tickets to a movie. Example output:
var ticket = 600 
var quantity= 5
var cost = ticket*quantity
var buy = document.write("<br><br>Total cost to buy "+quantity+" to a movie is "+cost+ " PKR")

// 5. Write a script to display multiplication table of any number in your browser.
var table= +prompt("Enter the number you want to print the Table")
for(i=1;i<=10;i++){
    document.write("<br>"+table+" x "+i+" = "+table*i+"<br>")
}

// 6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”

var fahrenheit =+prompt("Temperature in Fahrenheit")
var cel= (fahrenheit-32)*5/9
document.write("<br>"+fahrenheit+" is "+cel)
var celsius =+prompt("Temperature in Celsius")
var fah =(celsius*9/5)+32
document.write("<br>"+celsius+" is "+fah)

// 7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store 
// the following in variable
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.

var item1 = 650
var item2 = 100
var quantity1 =+prompt("Enter the product Quantity")
var quantity2 =+prompt("Enter the 2nd product Quantity")
var charges = 100
var item = item1*quantity1
var itemss =item2*quantity2
var total= item+itemss+charges
var order= document.write("<br><h3>Shopping Cart</h3>"+"<br></br>  Price of item 1: " +item1+"<br></br> Quantity of item 1: "+quantity1+ 
"<br></br> Price of item 2: " +item2+ "<br></br> Quantity of item 2: "+quantity2+"<br></br> Shipping charge "+charges+
"<br></br> Total cost of Your Order Is "+total)

// 8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in 
// your browser

var toatlMarks =+prompt("Enter the Toatl Marks")
var obtainedMarks=+prompt("Enter the obtained Marks")
var per=(obtainedMarks/toatlMarks)*100
var marks=document.write("<br><h3><bl>Mark Sheet</bl></h3>"+"<br></br>"+ "Total Marks: "+toatlMarks+"<br></br>"+
"Obtained Marks: "+obtainedMarks+"<br></br>"+ "Percentage: "+per+"%");

// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. 
// Perform all calculations in a single expression.

 var dollar =+prompt("Enter the dollar")
 var d= dollar*292
 var riyal =+prompt("Enter the riyal ")
 var r= riyal*76
 var total= d + r
 var currency=document.write("<br><h3>PKR Currency</h3>"+ "Total Currency in PKR: " +total);

//  10. Write a program to initialize a variable with some number and do arithmetic in following sequence:
//  a. Add 5
//  b. Multiply by 10
//  c. Divide the result by 2
//  Perform all calculations in a single expression
 var num=7
 document.write("<br><h3>Single Expression</h3>"+num+5*10%2)
// 11. The Age Calculator: Forgot how old someone is? Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored value.
var d=new Date()
var currentYear= d.getFullYear()
var birth=+prompt("Enter your Birth Year")
var age= currentYear-birth
var year = document.write( "<br><h3> Age Calculator</h3>"+"Currrent Year: "+currentYear+
 "<br></br> Birth Year: "+birth+"<br></br> Your Age is: "+age)

//  12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The 
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)


// 13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of your life.
// Output the result to the screen like so: “You will need NNNN to last you until the ripe old age of NN”

var snack=prompt("Enter your Favorite Snack")
var age=+prompt("Enter your Current age")
var maximumAge=+prompt("Enter your Estimated Maximum Age")
var estimatedAmount=+prompt("Enter your Amount OF Snack Per Day")
var total= maximumAge-age
var life=total*estimatedAmount
var result=document.write( "<br><h3> The Lifetime Supply Calculator </h3>"+"Favorite Snack: "+snack+ "<br></br> Current Age: "+age+ "<br></br>Estimated Maximum Age: "+maximumAge+
 "<br></br> Amount of Snack Per Day: "+estimatedAmount+ "<br></br>“You will need "+life+" to last you until the ripe old age of "+maximumAge)
