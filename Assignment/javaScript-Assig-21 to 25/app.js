// -------STRING METHOD--------

// 1. Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable 
// titled fullName. Greet the user using his full name.
var firstName=prompt("Enter the first Name")
var lastName=prompt("Enter the last Name")
var fullName=firstName + lastName;
document.write("<h3></h3> Assalam-u-Alikum "+fullName)


// 2. Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser
var phone=prompt("My favorite phone is: ")
var length=phone.length
document.write("<br><h3>Length of USER Input</h3>"+"<br>My favorite phone is: "+phone+"<br>String Of Length: "+length)

// 3. Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser 
var country= "Pakistani"
var b=country.indexOf("n")
document.write("<br><h3>Index Of Letter</h3>"+"String: "+country+"<br>Index OF 'n': "+b)

// 4. Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser

var letter="Hello World"
var result=letter.lastIndexOf("l")
document.write("<br><h3>Last index of Letter</h3>"+"String: "+letter+"<br>Last indexOf 'l': "+result)

// 5. Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.
var character="Pakistani"
var result=character.charAt(3)
document.write("<br><h3>Index</h3>"+"String: "+character+"<br>Character at index 3: "+result)

// 6. Repeat Q1 using string concat() method
var firstName=prompt("Enter the first Name")
var lastName=prompt("Enter the last Name")
var fullName= firstName.concat(lastName)
document.write("<br><h3>Concat() Method</h3>"+fullName)

// 7. Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.
var city="Hyderabad"
var newCity=city.replace("Hyder","Islama")
document.write("<br><h3>Replace</h3>"+"City: "+ city+"<br> After Replacement: "+newCity)

// 8. Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and football together.”;

// var friends="“Ali and Sami are best friends. They play cricket and football together.”"
// var result=friends.replace("And", "&")
// document.write(friends+result)

// 9. Write a program that converts a string “472” to a number 472. Display the values & types in your browser
var str="472"
 var num=parseInt(str)
 document.write("<br><h3>string to a Number</h3>"+"String: "+str+"<br>Number: "+num)
// 10. Write a program that takes user input. Convert and show the input in capital letters.
var capital=prompt("Enter the something")
var result=capital.toUpperCase()
document.write("<br><h1>Upper Case</h1>"+"User Input: "+capital+"<br>Upper Case: "+result)

// 11. Write a program that takes user input. Convert and show the input in title case.
var small=prompt("Enter the something")
var result=small.toLowerCase()
document.write("<br><h1>Lower Case</h1>"+"User Input: "+small+"<br>Lower Case: "+result)

// 12. Write a program that converts the variable num to string.
// var num = 35.36 ;Remove the dot to display “3536” display in your browser.
var num="35.36"
var result=num.replace(".","")
console.log(result)

// 13. Write a program to take user input and store username in a variable. If the username contains any special symbol 
// among [@ . , !], prompt the user to enter a valid username. For character codes of [@ .
// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64

// 14. You have an array A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given 
// item is found in the list or not.Note: Perform case insensitive search. Whether the user enters cookie, Cookie, COOKIE or coOkIE, program 
// should inform about its availability. Example:
var a=["apple ", " pie ", " cookie ", " chips ", " patties "]

// 15. Write a program to take password as an input from user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements, prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII table at the end of this document.

var pass=prompt("Enter The password")
var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (var i = 0; i < nums.length; i++) {
  if (pass.charAt(0) != nums[i]) {
    console.log("password is valid"); 
    break;
  }
  else{
    alert("Password should not start with number")
  }
}
// 16. Write a program to convert the following string to an array using string split method.
// var university = “University of Karachi”; Display the elements of array in your browser
document.write("<br><h3>String To AN Array</h3>")
var university = "University of Karachi"
var arr=Array.from(university)
for(i=0;i<=arr.length;i++){
    document.write(arr[i]+"<br> ")
}

// 18. You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of 
// occurrences of word “the” in given string.
var str="“The quick brown fox jumps over the lazy dog”"
alert(str.count("the"))


