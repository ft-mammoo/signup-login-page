const loginForm = document.getElementById("login-form");
const emailLogin = document.getElementById("email-login");
const passwordLogin = document.getElementById("password-login");
const loginBtn = document.getElementById("login-btn");

const signupForm = document.getElementById("signup-form");
const fullNameSignup = document.getElementById("full-name-signup");
const phoneNumberSignup = document.getElementById("phone-number-signup");
const emailSignup = document.getElementById("email-signup");
const passwordSignup = document.getElementById("password-signup");
const registerBtn = document.getElementById("register-btn");

emailLogin.addEventListener("input", validateLogin);
passwordLogin.addEventListener("input", validateLogin);

fullNameSignup.addEventListener("input", validateSignup);
phoneNumberSignup.addEventListener("input", validateSignup);
emailSignup.addEventListener("input", validateSignup);
passwordSignup.addEventListener("input", validateSignup);

function validateLogin() {

    let valid = true;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const loginEmail = emailLogin.value.trim();
    const loginPassword = passwordLogin.value.trim();

    if (loginEmail === "") {
        setError(emailLogin, "Email is required");
        valid = false;
    } else if (!emailRegex.test(loginEmail)) {
        setError(emailLogin, "Invalid email format");
        valid = false;
    }else{
        clearError(emailLogin);
    }

    if (loginPassword === "") {
        setError(passwordLogin, "Password is required");
        valid = false;
    } else if (loginPassword.length < 8) {
        setError(passwordLogin, "Password must be at least 8 characters");
        valid = false;
    } else {
        clearError(passwordLogin);
    }

    if (valid) {
        loginBtn.disabled = false;
    }else{
        loginBtn.disabled = true;
    }
}

function validateSignup(){
    
    let valid = true;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const signupFullName = fullNameSignup.value.trim();
    const signupPhoneNumber = phoneNumberSignup.value.trim();
    const signupEmail = emailSignup.value.trim();
    const signupPassword = passwordSignup.value.trim();

    if (signupFullName === "") {
        setError(fullNameSignup, "Full name is required");
        valid = false;
    }else if (signupFullName.length < 3) {
        setError(fullNameSignup, "Full name must be at least 3 characters");
        valid = false;
    }else{
        clearError(fullNameSignup);
    }

    if (signupPhoneNumber === "") {
        setError(phoneNumberSignup, "Phone number is required");
        valid = false;
    }else if (signupPhoneNumber.length < 10) {
        setError(phoneNumberSignup, "Phone number must be at least 10 characters");
        valid = false;
    }else{
        clearError(phoneNumberSignup);
    }

    if (signupEmail === "") {
        setError(emailSignup, "Email is required");
        valid = false;
    } else if (!emailRegex.test(signupEmail)) {
        setError(emailSignup, "Invalid email format");
        valid = false;
    }else{
        clearError(emailSignup);
    }

    if (signupPassword === "") {
        setError(passwordSignup, "Password is required");
        valid = false;
    } else if (signupPassword.length < 8) {
        setError(passwordSignup, "Password must be at least 8 characters");
        valid = false;
    } else {
        clearError(passwordSignup);
    }

    if (valid) {
        registerBtn.disabled = false;
    }else{
        registerBtn.disabled = true;
    }
}

function setError(input, message){
    input.classList.add("error");
    input.nextElementSibling.textContent = message;
}
function clearError(input){
    input.classList.remove("error");
    input.nextElementSibling.textContent = " ";
}

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    validateLogin();
    alert("Login successful!");

})

signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    validateSignup();
    alert("Registration successful!");
})

