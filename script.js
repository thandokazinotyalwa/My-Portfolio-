function validateForm() {
    let nameField = document.getElementById("name");
    let nameRegex = /^[A-Za-z]+$/; // Regular expression to match only alphabetic characters
    let nameValue = nameField.value;
    let emailField = document.getElementById("email");
    let emailValue = emailField.value;
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Regular expression for validating email
  
    // Resetting styles
    nameField.style.border = "1px solid #ced4da"; // Reset border color
    emailField.style.border = "1px solid #ced4da"; // Reset border color
   
   
    // Name validation
    if (!nameRegex.test(nameValue)) {
      alert("Please enter a valid name with only alphabetic characters.");
      nameField.style.border = "1px solid red"; // Change border color to red
      return false;
    }
   
    // Email validation
    if (!emailRegex.test(emailValue)) {
      alert("Please enter a valid email address.");
      emailField.style.border = "1px solid red"; // Change border color to red
      return false;
    } 
  
    alert("Thank you for contacting us. We'll get back to you.");
   
    return true;
  }