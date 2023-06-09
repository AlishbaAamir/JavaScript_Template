// ---------ARRAY----------

// 1. Declare an empty array using JS literal notation to store student names in future.
/*var futureName=[]
// 2. Declare an empty array using JS object notation to store student names in future.
var student=a[6]
// 3. Declare and initialize a strings array.
var a=["Alishba","Nashra","Anoosha","Malaika"]
// 4. Declare and initialize a numbers array.
var b=[1,2,3,4,5,6,7]
// 5. Declare and initialize a boolean array.
var c=[true,false]
// 6. Declare and initialize a mixed array
var mixedArray = [1, "Bob", "Now is", true];*/

// 7. Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, 
// BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser like
var education=["1)SSC<br>", "2)HSC<br>","3)BSC<br>" ,"4)BS<br>","5)MS<br>","6)M.Phil<br>","7)PhD<br>"]
// console.log(education)
 document.write("<h3>Qualification</h3><br>" +education)

// 8. Write a program to store 3 student names in an array.Take another array to store score of these three students. 
// Assume that total marks are 500 for each student, display the scores & percentages of students like:
var studentName=["Afia", "Bisma", "Musfira"]
var score=[450,370,280]
var total=500
var per=score[0]/total*100
document.write("<h3>Percentage</h3>"+"<br>Score of "+studentName[0]+" is "+score[0]+" Percentage "+per+"</br>"+
"Score of "+studentName[1]+" is "+score[1]+" Percentage "+per+"</br>"+
"Score of "+studentName[2]+" is "+score[2]+" Percentage "+per+"</br>"
)

// 9. Initialize an array with color names. Display the array elements in your browser.
// a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the updated array in your browser.
// c. Add two more color to the beginning of the array. Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated array in your browser.
// e. Delete the last color in the array. Display the updated array in your browser.
// f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index. . Display the updated array in your 
// browser.
// g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then Arrays remove the same 
// number of color(s) from user-defined position/index. Display the updated array in your browser.
var color=[ "Red "," Blue "," Green "," Orange "," Black"]
document.write("<h3>Colors</h3>"+"<br>Colors: "+color)
var wants=prompt("Enter The Color you want to add in begining")
color.unshift(wants)
document.write("<br>Add Color in Begining: " +color)
var b=prompt("Enter The color you want to add in the end")
color.push(b)
document.write("<br>Add Color in The End: " +color)
color.unshift("Virgo","Brown")
document.write("<br>Color add in Start: " +color)
color.pop()
document.write("<br>Remove Color in End: " +color)
 color.shift()
 document.write("<br>Remove Color in the Begining: " +color)
 var f=prompt("Enter The positon and color Name you want to remove (1-"+color.length+")")
var index=parseInt(f)-1
var addColor=color.splice(index,1)[0]
document.write("<br>remaining Color"+color)
 

// 10. Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.

var score=[500,410,220,350,110,430,250]
var student=score.sort()
document.write("<h3>SCores</h3>"+" <br>Student Score: "+score+"<br>After the Sorting: "+student)

// 11. Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array.
var cities=["Karachi "," Lahore "," Islamabad ", " Queetta "," Kashmir "," Rawalpindi "," Sawat "]
alert(cities)
cities.splice(0,4)
alert("Selected Cites List \n"+cities)

// 12. Write a program to create a single string from the below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”]; (Use array’s join method

var arr = ["This" ,  "is ", " my" , " cat"]
 var b= arr.join(" ")
document.write("<h3> Single Strings</h3>"+"<br>Array:<br>"+arr+"<br>String: <br>"+b)

// 13. Create a new array. Store values one by one in such a waythat you can access the values in the order in which they 
// were stored. (FIFO-First In First Out
var queue = [];

queue.push("keyboard");
queue.push("mouse");
queue.push("printer");
queue.push("monitor")

var keyboard  = queue.shift();
var mouse=queue.shift()
var printer=queue.shift()
var monitor=queue.shift()

console.log(keyboard,mouse,printer,monitor)


// 15. Write a program to store phone manufacturers (Apple,Samsung, Motorola, Nokia, Sony & Haier) in an array. 
//     Display the following dropdown/select menu in your browser using document.write() method:
    var phone=["Apple <br> "," Samsung <br> ", " Motorola <br> ", " Nokia<br> ", " Sony<br> " , " Haier<br> "]
    // console.log(phone+length.phone)
     document.write("<h3>DropDown</h3><br>"+phone+" ")



     document.write("<br>--------END--------")