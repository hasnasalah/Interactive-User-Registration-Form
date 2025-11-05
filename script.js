const fname=document.getElementById("fname");
const lname=document.getElementById("lname");
const age=document.getElementById("age");
const fnameError=document.getElementById("fnameError");
const lnameError=document.getElementById("lnameError");
const ageError=document.getElementById("ageError");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confPassword = document.getElementById("confirmPassword");
const userError = document.getElementById("usernameError");
const customEmailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confPassError=document.getElementById("confirmPasswordError");
const form = document.getElementById("registrationForm");
const container=document.getElementById("container");
const login=document.getElementById("login");
const loginForm=document.getElementById("loginForm");



function validateAge(){
    if(age.validity.valueMissing){
        age.setCustomValidity("Please enter your age!");
    age.classList.add("invalid");
    age.classList.remove("valid");
      ageError.textContent = age.validationMessage;
    }
    else if(age.value<18){
        age.setCustomValidity("you must be the age of 18 or older!");
         age.classList.add("invalid");
         age.classList.remove("valid");
           ageError.textContent = age.validationMessage;
    }
    else{
        age.setCustomValidity("");
    age.classList.remove("invalid");
    age.classList.add("valid");
    ageError.textContent = "";
    }
}


function validateNameAndLastName(name,error){

     if (name.validity.valueMissing) {
    name.setCustomValidity("Please enter a name!");
    name.classList.add("invalid");
    name.classList.remove("valid");
      error.textContent = name.validationMessage;
  } else {
    name.setCustomValidity("");
    name.classList.remove("invalid");
    name.classList.add("valid");
    error.textContent = "";
  }

}


function validateUsername() {
  if (username.validity.valueMissing) {
    username.setCustomValidity("Please enter a username!");
    username.classList.add("invalid");
    username.classList.remove("valid");
      userError.textContent = username.validationMessage;
  } else {
    username.setCustomValidity("");
    username.classList.remove("invalid");
    username.classList.add("valid");
    userError.textContent = "";
  }

}


function validateEmail(){
    if (email.validity.valueMissing) {
      email.setCustomValidity('We need your email address to contact you!');
          email.classList.add("invalid");
    email.classList.remove("valid");
     customEmailError.textContent = email.validationMessage;
    
    }
    else  if (email.validity.typeMismatch) {
      email.setCustomValidity('Please enter a valid email address, for example, name@example.com.');
       email.classList.remove("valid");
      email.classList.add("invalid");
    customEmailError.textContent = email.validationMessage;
   
    } 
    else {
      email.setCustomValidity(""); 
      email.classList.add("valid");
    email.classList.remove("invalid");
    customEmailError.textContent = "";
    
    
    }

 
}


function validatePasswordMatch() {
  password.setCustomValidity("");
  confPassword.setCustomValidity("");
  password.classList.remove("invalid");
  confPassword.classList.remove("invalid");
  password.classList.add("valid");
  confPassword.classList.add("valid");
  passwordError.textContent = "";
  confPassError.textContent = "";
  if (password.value.length < 8) {
    password.setCustomValidity("Password must be exactly 8 characters long!");
    password.classList.add("invalid");
    password.classList.remove("valid");
    passwordError.textContent = password.validationMessage;
  } 
  else if (confPassword.value.length < 8) {
    confPassword.setCustomValidity("Confirm password must be exactly 8 characters long!");
    confPassword.classList.add("invalid");
    confPassword.classList.remove("valid");
    confPassError.textContent = confPassword.validationMessage;
  } 
  else if (password.value !== confPassword.value) {
    confPassword.setCustomValidity("Passwords do not match!");
    confPassword.classList.add("invalid");
    confPassword.classList.remove("valid");
    confPassError.textContent = confPassword.validationMessage;
  } 
}
fname.addEventListener("blur", () => validateNameAndLastName(fname, fnameError));
lname.addEventListener("blur", () => validateNameAndLastName(lname, lnameError));
username.addEventListener("blur", validateUsername);
email.addEventListener("input", validateEmail);
email.addEventListener("blur", validateEmail);
password.addEventListener("input", validatePasswordMatch);
password.addEventListener("blur", validatePasswordMatch);
age.addEventListener("blur",validateAge);
age.addEventListener("input",validateAge);



form.addEventListener('submit', function(event) {
    event.preventDefault();
    validateUsername();
    validateEmail();
    validatePasswordMatch();
    validateAge();
    validateNameAndLastName(fname,fnameError);
    validateNameAndLastName(lname,lnameError);
 if (!form.checkValidity()) {
    
     return;
  }
  

  

      const user = {
            name: fname.value+" "+lname.value,
            userName: username.value,
            passWord: password.value,
          };
            localStorage.setItem(user.userName, JSON.stringify(user));
  
    
        
          container.style.display="none";
    login.style.display="block";
    console.log(container, login);
        
  
  
});
const loginUsername=document.getElementById("loginUsername");
const loginPassword=document.getElementById("loginPassword");

   loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Use the input value as the key
    const storedUser = localStorage.getItem(loginUsername.value);

    if (storedUser) {
        const parsedUser = JSON.parse(storedUser);

        // Compare the stored password to the typed password
        if (parsedUser.password === loginPassword.value) {
            alert("Login successful!");
            localStorage.setItem("user", JSON.stringify(parsedUser));
            window.location.href = "index.html";
        } else {
            alert("Incorrect password");
        }
    } else {
        alert("User not found");
    }
});
const goBack=document.getElementById("goBack");
goBack.addEventListener("click",function(){
          container.style.display="block";
    login.style.display="none";
    
  
})

