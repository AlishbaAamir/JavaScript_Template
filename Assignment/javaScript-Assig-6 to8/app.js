//-------MATH EXPRESSIONS-------------


// 1. Write a program to take a number in a variable, do therequired arithmetic to display the following result in your browser
var a = 10;
document.write("Result<br>The value of a is: " + a);
++a;
document.write("<br>The value of ++a is: " + a);
document.write("<br>Now the value of a is: " + a);
a++;
document.write("<br>The value of a++ is: " + a);
document.write("<br>Now the value of a is: " + a);
--a;
document.write("<br>The value of --a is: " + a);
document.write("<br>Now the value of a is: " + a);
a--;
document.write("<br>The value of a-- is: " + a);
document.write("<br>Now the value of a is: " + a);

// 2. What will be the output in variables a, b & result after execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--
var a=2
var b=1
var result=--a - --b + ++b + b--
--a
--a - --b
--a - --b + ++b
--a - --b + ++b + b--
console.log(result)

// 3. Write a program that takes input a name from user & greet the user
var userName=prompt("Enter your Name")
document.write("<h3>Greet User</h3> Hii " +userName)

// 5. Write a program to take input a number from user & display it’s multiplication table on your browser. If user 
// does not enter a new number, multiplication table of 5 should be displayed by default.
var number=+prompt("Enter the Number you want to print the Table.")
var number=parseInt(number) || 5
for(i=1;i<=10;i++){
     document.write("<br>"+i*number)
   
}
// 6. Take
// a) Take three subjects name from user and store them in 3 different variables.
// b) Total marks for each subject is 100, store it in another variable.
// c) Take obtained marks for first subject from user and stored it in different variable.

// d) Take obtained marks for remaining 2 subjects from user and store them in variables.
// e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table)

var subject=prompt("Enter first Subject Name")
var subject1=prompt("Enter 2nd Subject Name")
var subject2=prompt("Enter 3rd Subject Name")
var totalMarks=100
var obtained1=+prompt("Enter Obtained Marks of first subject")
var obtained2=+prompt("Enter Obtained Marks of 2nd subject")
var obtained3=+prompt("Enter Obtained Marks of 3rd subject")
 var totalObtainedMarks= parseFloat(obtained1)+parseFloat(obtained2)+parseFloat(obtained3)
 var percentage = (totalObtainedMarks/(totalMarks*3))*100
 let table = "<table>";
table += "<tr><td>Subject</td><td>Total Marks</td><td>Obtained Marks</td></tr>";
table +=
  "<tr><td>" + subject + "</td><td>" + totalMarks + "</td><td>" +obtained1 + "</td></tr>";
table +=
  "<tr><td>" + subject1 +"</td><td>" + totalMarks + "</td><td>" + obtained2 +"</td></tr>";
table +=
  "<tr><td>" + subject2 + "</td><td>" +totalMarks + "</td><td>" +obtained3 +"</td></tr>";
table +=
  "<tr><td></td><td><b>Total Marks:</b></td><td><b>" + totalMarks * 3 + "</b></td></tr>";
table +=
  "<tr><td></td><td><b>Obtained Marks:</b></td><td><b>" + totalObtainedMarks + "</b></td></tr>";
table +=
  "<tr><td></td><td><b>Percentage:</b></td><td><b>" + percentage +"%</b></td></tr>";
table += "</table>";
document.write("<h3>Result</h3>"+table)




