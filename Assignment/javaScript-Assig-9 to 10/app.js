// ----------------USER INPUT & CONDITIONAL STATEMENT-------------

// 1. Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: 
// “Welcome to city of lights”
 var city =prompt("Enter your city")
 if(city=="karachi"){
    document.write("<br>Welcome to City Of Lights")
 }
 else{
    document.write("<br>Please enter correct city")
 }

//  2. Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the 
// user is female, give the message: Good Morning Ma’am.
var gender=prompt("Enter Your Gender\nMale \nFemale")
if(gender=="Male" || "male"){
    document.write("<br>Good Morning Sir")
}
else if(gender=="Female"||"female" ){
    document.write("<br>Good Morning Ma'am")
}
else{
    document.write("<br>Please Enter Correct Information")
}

// 3. Write a program to take input color of road traffic signal from the user & show the message according to this table:
var trafficSignal=prompt("Red \n Yellow\n Green")
if(trafficSignal=="Red"){
    document.write("<br>Must Stop")
}
else if(trafficSignal=="Yellow"){
    document.write("<br>Ready To MOve")
}
else if(trafficSignal=="Green"){
document.write("<br>Move Now")
}
else{

}

// 4. Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, 
// show the message “Please refill the fuel in your car”
 
var fuel=prompt("Enter the fuel (in liter)")
if(fuel<="0.25"){
    document.write("<br> “Please refill the fuel in your car”")
}
else{
    document.write("<br>No Need")
}

// 5. Run this script, & check whether alert message would be displayed or not. Record the outputs.
/*var a=4
if (++a === 5){
    alert("given condition for variable a is true");
    }*/
    // b
   /* var b = 82;
 if (b++ === 83){
     alert("given condition for variable b is true");
 }*/
// var c = 12;
// if (c++ === 13){
//     alert("condition 1 is true");
//      }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (+c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
//  var materialCost = 20000;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }

// alert("True");

//  if (true){
//     alert("True");
// }
// if (false){
// alert("False");
// }

/*if("car" < "cat"){
    alert("car is smaller than cat");
    }*/

// 6. Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute grade as per following table:
var obtainedMarks=+prompt("Total Marks: 300\n Enter The Obtained Marks")
var totalMarks=300
var per=(obtainedMarks/totalMarks)*100
var b= per.toFixed()
if(per>=80){
    document.write("<br><b><h1>Mark Sheet</h1>"+" <br></br>Total Marks:"+totalMarks+"<br></br> Obtained Marks: "+obtainedMarks+
    "<br></br>Percentage: "+b+"%"+"<br><br> Grade: A+ <br></br> Remarks: Excellent</b>")
}
else if(per>=70){
    document.write("<br><b><h1>Mark Sheet</h1>"+" <br></br>Total Marks:"+totalMarks+"<br></br> Obtained Marks: "+obtainedMarks+
    "<br></br>Percentage: "+b+"%"+"<br><br> Grade: A <br></br> Remarks: Good")
}
else if(per>=60){
    document.write("<br><b><h1>Mark Sheet</h1>"+" <br></br>Total Marks:"+totalMarks+"<br></br> Obtained Marks: "+obtainedMarks+
    "<br></br>Percentage: "+b+"%"+"<br><br> Grade: B <br></br> Remarks: You Need to Improve")
}
else if(per<60){
    document.write("<br><b><h1>Mark Sheet</h1>"+" <br></br>Total Marks:"+totalMarks+"<br></br> Obtained Marks: "+obtainedMarks+
    "<br></br>Percentage: "+b+"%"+"<br><br> Grade: Fail <br></br> Remarks: Sorry")
}
else{
    document.write("<br>sorry")}

// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable. Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct answer”.
// b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”.  
var secret = +prompt("Guess the secret Number: 1-10")
if(secret==5){
    document.write("<br>Bingo! Correct Answer")
}
else{
    document.write("<br>“Close enough to the correct answer”.")
}

// 8. Write a program to check whether the given number is divisible by 3. Show the message to the user if the number 
// is divisible by 3.
var check=+prompt("Enter The Number")
if(check%3==0){
    document.write("<br>Hello Everyone!");
}
else{

}

// 9. Write a program that checks whether the given input is an even number or an odd number.
var checks=+prompt("Enter the Number")
if(checks%2==0){
    document.write("<br>Your Number Is Even")
}
else{
    document.write("<br>Your Number is Odd")
}

// 10. Write a program that takes temperature as input and shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

var T=+prompt("Enter The Temperature")
if(T>40){
    alert("“It is too hot outside.”")
}
else if(T>30){
alert("“The Weather today is Normal.”")
}
else if(T>20){
    alert("“Today’s Weather is cool.”")
}
else if(T>10){
    alert("“OMG! Today’s weather is so Cool.”")
}
else{
    alert("Snowfalling")
}





