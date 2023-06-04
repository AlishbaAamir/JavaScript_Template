// -----------FUNCTION, SWITCH, WHILE, DO-WHILE --------------

// 1. Write a custom function power ( a, b ), to calculate the value of a raised to b.

/*function power(a, b) {
	var result = 1;
	if(b == undefined)
		b = 2;
	for(var i=1; i<=b; i++) {
		result = result * a;
	}
	return result;
}

console.log(power(a=+prompt("Enter The Base"), b=+prompt("Enter the exponent:")));*/

// 2. Any year is entered through the keyboard. Write a function to determine whether the year is a leap year or not.

/*function checkLeapYear(year) {

    //three conditions to find out the leap year
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        document.write(year + ' is a leap year');
    } else {
        document.write(year + ' is not a leap year');
    }
}
var year = prompt('Enter a year:');
checkLeapYear(year);*/

// 03. If the lengths of the sides of a triangle are denoted by a, b, and c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c) where, S = ( a + b + c ) / 2
/*function triangle(a,b,c) {
    var s=( a + b + c ) / 2
    return s;
    }
    function area(a,b,c) {
        var s=triangle(a,b,c)
        var calAreaa=Math.sqrt(s*(s - a)*(s - b)*(s - c))
        document.write("<h3>Area Of Triangle</h3>"+ "The area of Triangle is: "+calAreaa)
        return calAreaa
    }
    area(a=+prompt("Enter Ist length "), b=+prompt("Enter 2nd lenght"),c=+prompt("Enter 3rd length"))*/

// 04. Write a function that receives marks received by a student in 3 subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction and other are for average and percentage. Call those functions 
// from mainFunction and display result in mainFunction.
/*function subject(subject1,subject2, subject3){
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
*/
// 05. You have learned the function indexOf. Code your own custom function that will perform the same functionality. 
// You can code for single character as of now.
function indexof(){
    var char="I am Pakistani"
    char.indexOf("p")
    console.log(char)
}
indexof()

