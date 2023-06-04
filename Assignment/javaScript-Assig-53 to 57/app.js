// -----------Events-----------

// 1. Consider you have 4 images in a file as shown below:
function openModel(src){
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img");
modal.style.display = "block";
  modalImg.src = this.src;
  
}
function closeModel(src){
    var modal = document.getElementById("myModal");
    modal.style.display = "none";  
}


function zoomIn() {
    
    var fontSize = parseInt(window.getComputedStyle(paragraph).fontSize);
    paragraph.style.fontSize = fontSize + 10 + "px";
  }
  
  function zoomOut() {
    // var paragraph = document.getElementById("myParagraph");
    var fontSize = parseInt(window.getComputedStyle(paragraph).fontSize);
    paragraph.style.fontSize = fontSize - 10 + "px";
  }
// Get the <span> element that closes the modal
 var span = document.getElementsByClassName("close")[0];

// // When the user clicks on <span> (x), close the modal
 span.onclick = function() { 
   modal.style.display = "none";
 }