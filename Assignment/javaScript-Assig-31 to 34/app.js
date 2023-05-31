// -----------DATE METHODS----------

// 1. Write a program that displays current date and time in your browser.
var date=new Date()
document.write("<h3>Current Date</h3>"+date)

// 2. Write a program that alerts the current month in words. For example December.
 var month=["january","Februray","March","April","May","June","July", "August","September","October","November","December"]
 var theMonth= new Date()
 var mon=theMonth.getMonth()
 var monthName=month[mon]
 document.write("<br><h3>Current Month</h3>"+"Current Month: "+monthName)

//  3. Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show Sun.
var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var now = new Date();
 var theDay = now.getDay();
  var nameOfToday = dayNames[theDay];
  document.write("<br><h3>Today </h3>"+"Today is "+nameOfToday)

//   4. Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today.
var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var now = new Date();
 var theDay = now.getDay();
  var nameOfToday = dayNames[theDay];
  if(theDay=="Sat"||"Sun"){
    alert("It's a fun day")
  }
else{
    alert("it's a working day")
}

// 5. Write a program that shows the message “First fifteen days of the month” if the date is less than 16th of the month 
// else shows “Last days of the month”
var d=new Date()
if (d<=15){
    alert("“First fifteen days of the month”")
}
else{
    alert("“Last days of the month”")
}

// 6. Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that 
// hasn't been declared beforehand. Use any variable you like to represent the Date object.
var currentDate=new Date()
 var date=new Date("Jan 1, 1970")
 var millisec=(currentDate-date)/10000
 var min=(currentDate-date)/100
 document.write("<br><h3>Elapsed</h3>"+"Current Date: "+currentDate+" <br>Elapsed millisecond sicce January 1, 1970: "
 +millisec+"<br> Elapsed minutes sicce January 1, 1970: "+min)
 

// 7. Write a program that tests whether it's before noon and alert “Its AM” else “its PM”
var hours=new Date()
var check=hours.getHours()
if(check>=12){
    alert("It's PM")
}
else{
    alert("It's Am")
}

// 8. Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to variable named laterDate.

var laterDate = new Date("December 31, 2020");
document.write("<br><h3>Later Date</h3>"+"Later Date: "+laterDate)

// 9. Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015
//  var ramadan =new Date(" June 18, 2015")
// var pastRamadan=ramdan.getDay()
// var d=ramadan-pastRamadan
// alert(d)

// 10. Write a program that displays in your browser the seconds that elapsed between the reference date and the 
// beginning of 2015.
var d=new Date()
var date= new Date("2015-01-01")
var diff=(d-date)/1000;
document.write("Current Date: "+diff)




// 14. Write a program to generate your K-Electric bill in your browser. All the amounts should be rounded off to 2 decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)

var customer=prompt("Enter your Name")
var month="May"
var unit= 300
var chargePerUnit=15
var netAmount=unit*chargePerUnit
var latePayment=250
var grossAmount=netAmount+latePayment
document.write("<h3>K-Electric Bill</h3>"+"Customer Namre: "+customer+"<br>Current Month: "+month+"<br>Number of Units: "+unit+"<br>Charges per Unit: "+chargePerUnit+
"<br>Net Amount Payable(Within Due Date): "+netAmount+"<br>Late Payment Surcharge: "+latePayment+
"<br>Gross Amount Payable(After Due Date): "+grossAmount)