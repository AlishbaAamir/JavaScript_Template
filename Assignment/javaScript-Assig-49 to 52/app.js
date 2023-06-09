// -----------EVENTS --------------

// 01. Create a signup form and display form data in your web page on submission
function formData(){
    var email=document.getElementById("email")[0].value
    var userName=document.getElementById("usrname")[0].value
    var password=document.getElementById("password")[0].value
    var confirm=document.getElementById("confirm-password")[0].value

    var data= email + userName+ password+confirm
    console.log(data)
}