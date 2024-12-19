function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("messageError").textContent = "";

    let isValid = true;

    
    let nameRegex = /^[A-Za-z\s]+$/;
    if (!name.match(nameRegex)) {
        document.getElementById("nameError").textContent = "Please enter a valid name (letters and spaces only).";
        isValid = false;
    }

 
    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email.match(emailRegex)) {
        document.getElementById("emailError").textContent = "Please enter a valid email address.";
        isValid = false;
    }


    if (message.trim() === "") {
        document.getElementById("messageError").textContent = "Message cannot be empty.";
        isValid = false;
    }

    
    return isValid;
}
