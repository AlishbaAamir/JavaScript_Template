// -----------FUNCTION, SWITCH, WHILE, DO-WHILE --------------

// 1. Write a custom function power ( a, b ), to calculate the value of a raised to b.

function power(a, b) {
	var result = 1;
	if(b == undefined)
		b = 2;
	for(var i=1; i<=b; i++) {
		result = result * a;
	}
	return result;
}

document.write(power(a=+prompt("Enter The Base"), b=+prompt("Enter the exponent:")));

// 2. Any year is entered through the keyboard. Write a function to determine whether the year is a leap year or not.

function checkLeapYear(year) {

    //three conditions to find out the leap year
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        document.write(year + ' is a leap year');
    } else {
        document.write(year + ' is not a leap year');
    }
}
var year = prompt('Enter a year:');
checkLeapYear(year);

// 03. If the lengths of the sides of a triangle are denoted by a, b, and c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c) where, S = ( a + b + c ) / 2
function triangle(a,b,c) {
    var s=( a + b + c ) / 2
    return s;
    }
    function area(a,b,c) {
        var s=triangle(a,b,c)
        var calAreaa=Math.sqrt(s*(s - a)*(s - b)*(s - c))
        document.write("<h3>Area Of Triangle</h3>"+ "The area of Triangle is: "+calAreaa)
        return calAreaa
    }
    area(a=+prompt("Enter Ist length "), b=+prompt("Enter 2nd lenght"),c=+prompt("Enter 3rd length"))

// 04. Write a function that receives marks received by a student in 3 subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction and other are for average and percentage. Call those functions 
// from mainFunction and display result in mainFunction.
function subject(subject1,subject2, subject3){
    var s=(subject1+subject2+subject3)/3
    return s.toFixed(0)
}
function percentage(toalMarks,obtainedMarks) {
    var per=(obtainedMarks/toalMarks)*100
    return per.toFixed(0);
    }
function mainFunction(subject1,subject2, subject3){
    var toalMarks=300
    var obtainedMarks=subject1+subject2+subject3
    var s=subject(subject1,subject2, subject3)
    var per= percentage(toalMarks,obtainedMarks)

document.write("<h3>Average And Percentage</h3>"+"Average marks are: "+s+" And the percentage is "+per)

}
mainFunction(subject1=+prompt("Enter First Subject Number"), subject2=+prompt("Enter 2nd Subject Number"),subject3=+prompt("Enter 3rd Subject Number"))

//  You have learned the function indexOf. Code your own custom function that will perform the same functionality. 
// You can code for single character as of now.
// function indexof(){
//     var char="I am Pakistani"
//     char.indexOf("p")

// }
// indexof()
//  Write a function to delete all vowels from a sentence. Assume that the sentence is not more than 25 characters long.

function removeVowels(sentence) {
    const vowels = ["a", "e", "i", "o", "u"];
    let result = "";
    for (let i = 0; i < sentence.length; i++) {
      if (!vowels.includes(sentence[i])) {
        result += sentence[i];
      }
    }
    return result;
  }
  console.log(removeVowels("This is a sentence with vowels."));

//  The distance between two cities (in km.) is input through the keyboard. Write four functions to convert and print this 
// distance in meters, feet, inches and centimeters.

function meter(km){
    return km*1000
}
function feet(km){
    return km*3280
}
function inches(km) {
    return km*39370.1
    }
    function centimeter(km) {
        return km*100000
          }
var distance=+prompt("Enter the distance in km")
    var a=meter(distance)
    var b=feet(distance)
    var c=inches(distance)
    var d=centimeter(distance)

    document.write("<h1>Distance</h1>"+"Distance in Meter: "+a+"<br>Distance in feet: "+b+"<br>Distance in inches: "+c+
    "<br>Distance in centimeter: "+d)

   
// A cashier has currency notes of denominations 10, 50 and 100. If the amount to be withdrawn is input through the 
// keyboard in hundreds, find the total number of currency notes of each denomination the cashier will have to give to the 
// withdrawer.

function calculateCurrencyNotes(amountInHundreds) {
    var denominations = [100, 50, 10];
    var notes = [0, 0, 0];
  
    for (let i = 0; i < denominations.length; i++) {
      notes[i] = Math.floor(amountInHundreds / denominations[i]);
      amountInHundreds = amountInHundreds % denominations[i];
    }
  
    return notes;
  }
  
  var amountInHundreds = prompt( "Enter the amount to be withdrawn in hundreds:");
  var notes = calculateCurrencyNotes(parseInt(amountInHundreds));
  var hundredNotes = notes[0];
  var fiftyNotes = notes[1];
  var tenNotes = notes[2];
  
  document.write("<h3>Currency Note</h3>"+"You will have "+ hundredNotes+ " hundred notes<br>" +fiftyNotes+ " fifty notes, and<br> "+tenNotes+ " ten notes." );





