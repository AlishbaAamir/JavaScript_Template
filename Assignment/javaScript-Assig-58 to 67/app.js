//--------------DOM------------
// i. Get element of id “main-content” and assign them in a variable.
var parent= document.getElementById("main-content")
// ii. Display all child elements of “main-content” element.
var child= parent.childNodes;
console.log(child)
// iii. Get all elements of class “render” and show their innerHTML 
// in browser.
var renderClass= document.getElementsByClassName("render")
for(var i=0;i<renderClass.length;i++)
 document.write(renderClass[i].innerHTML)
//  iv. Fill input value whose element id first-name using javascript.
var a=document.getElementById("first-name").value="Alex"
// v. Repeat part iv for id ”last-name” and “email”
var b=document.getElementById("last-name").value="Bank"
var c=document.getElementById("email").value="alesbank@gmail.com"

// 2. use HTML code of question 1 and show the result on browser

// i. What is node type of element having id “form-content”.
var formcontent=document.getElementById("form-content")
console.log(formcontent.nodeType)
// ii. Show node type of element having id “lastName” and its child node.
var lastName=document.getElementById("lastName")
console.log("Node Type "+lastName.nodeType)
console.log("node type of child Node: "+lastName.childNodes[0].nodeType)
// iii. Update child node of element having id “lastName”.
lastName.innerHTML="Last Name: Wilson"
// iv. Get First and last child of id “main-content”.
var mainContent=document.getElementById("main-content")
console.log("First child: "+mainContent.firstChild.innerHTML +"Last child: "+mainContent.lastChild.innerHTML)
// v. Get next and previous siblings of id “lastName”.

console.log("Next Siblings: "+lastName.nextSibling.innerHTML+"Previous Siblings: "+lastName.previousSibling.innerHTML)
// vi. Get parent node and node type of element having id “email”
var email=document.getElementById("email");
console.log("Parent Node: "+email.parentNode.id+"Node Type: "+email.nodeType)
