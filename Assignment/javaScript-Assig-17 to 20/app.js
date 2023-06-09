// -----------ARRAYS AND LOOP ---------------

// // 1. Declare and initialize an empty multidimensional array.(Array of arrays)
// Declare and initialize an empty multidimensional array
var multidimensionalArray = [[]];
// Declare and initialize a 2x3 multidimensional array
var multidimensionalsArray = [[], [], []];

// 2. Declare and initialize a multidimensional array
// representing the following matrix:
// 0 1 2 3
// 1 0 1 2
// 2 1 0 1

// Declare and initialize a multidimensional array representing the matrix
var matrix = [
  [0, 1, 2, 3],
  [1, 0, 1, 2],
  [2, 1, 0, 1],
];
    // 3. Write a program to print numeric counting from 1 to 10.
for(i=0;i<=10;i++){
    document.write(i+" <br> ")
}


// 4. Write a program to print multiplication table of any number using for loop. Table number & length should be 
// taken as an input from user

var num=+prompt("Enter the number you want to print the Table")
var len=+prompt("Enter the number you want to take length")
document.write("<h3>Table OF "+num+"<br></h3>")
for(i=1;i<=len;i++){
    document.write(num+" X "+i+" = "+ num*i+"<br>")
}

   
// 5. Write a program to print items of the following array using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]

var fruits = ["apple", "banana", "mango", "orange", "strawberry"]
for(i=0;i<=fruits.length;i++){
     document.write(fruits[i]+" <br>")
    
}
document.write("<br> Element at index 0 is "+fruits[0]+"<br> Element at index 1 is "+fruits[1]+"<br> Element at index 2 is "+fruits[2]
 +"<br> Element at index 3 is "+fruits[3]+"<br> Element at index 4 is "+fruits[4])

// 6. Generate the following series in your browser. See example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
document.write("<h3>Counting</h3>")
for(i=1;i<=15;i++){
    document.write(i+" , ")
} 
document.write("<br><h3>Reverse Counting</h3>")
for(j=10;j>=1;j--){
    document.write(j+", ")
} 
document.write("<h3>Even:</h3>")
 for(k=1;k<=20;k++){
 if(k%2==0){
     document.write(k+" , ")
 }
 }
 document.write("<br><h3>Odd:</h3>")
for(l=1;l<=20;l++){
 if(l%2!=0){
    document.write(l+" , ")
 }
}
document.write("<br><h3>Series</h3>")
for(m=1;m<=10;m++){
    document.write(m*2 +"K , ")
}

// 7. You have an array A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an array.
// After searching, prompt the user whether the given item is found in the list or not. Example
// var items = ["cake", "apple", "pie", "cookie", "chips", "patties"]
// var want=prompt("Welcom! What do you want to order Sir/Ma'am")
// var search = false
// for(i=0;i<items.length;i++){
//     if(item[i]===want){
//     search=true
//     break;
// }
// }
// if(search){
//     alert(items+"is found in the list")
// }
// else{
//     alert(items+"is not found in the list")
// }
// 8. Write a program to identify the largest number in the given array.A = [24, 53, 78, 91, 12]
var large = [24, 53, 78, 91, 12];
var largest = large[0];

for (let i = 1; i < large.length; i++) {
  if (large[i] > largest) {
    largest = large[i];
  }
}
document.write("<h3>Largest Number</h3>"+"The largest number in the array is: " + largest);

// 9. Write a program to identify the smallest number in the given array.
// A = [24, 53, 78, 91, 12]

var small = [24, 53, 78, 91, 12];
var smallest = small[0];

for (let i = 1; i < small.length; i++) {
  if (small[i] < smallest) {
    smallest = small[i];
  }
}
document.write("<h3>Smallest Number</h3>"+"The smallest number in the array is: " + smallest);

// 10. Write a program to print multiples of 5 ranging 1 to 100
document.write("<h3>Ranging</h3>")
for(var i=1;i<=100;i++){
    if(i%5==0){
        document.write( i+ " ")
    }
}
