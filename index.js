var nameError=document.getElementById('name-error')
var phoneError=document.getElementById('phone-error')
var emailError=document.getElementById('email-error')
var messageError=document.getElementById('message-error')
var submitError=document.getElementById('submit-error')


function validateName(){
    var name=document.getElementById('contact-name').value;
    if (name.length==0){
        nameError.innerHTML="Name is required";
        return false;
    }
    nameError.innerHTML="valid";
    return true;
        
}

function validateEmail(){
    var email=document.getElementById('contact-email').value;
    if (email.length==0){
        emailError.innerHTML="Email is required";
        return false;
    }

    if(!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)){
        emailError.innerHTML="Invalid email";
        return false;
    }

    emailError.innerHTML="valid";
    return true;
}

function validateMessage(){
    var message=document.getElementById('contact-message').value;
    if (message.length==0){
        messageError.innerHTML="Message is required";
        return false;
    }
    messageError.innerHTML="valid";
    return true;
}

function validateForm(){
    if (!validateName() || !validateEmail() || !validateMessage()){
        submitError.innerHTML="Please fill in the required fields";
        submitError.style.display = "block";
        setTimeout(function(){submitError.style.display = "none";}, 5000);
    return false;
    }
    submitError.style.display = "none";
    window.location.href = "success.html";
    return false;
}