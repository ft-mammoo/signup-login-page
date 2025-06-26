const signupForm = document.getElementById("signup-form");
const loginForm = document.getElementById("login-form");
const emailLogin = document.getElementById("email-login")
const passwordLogin = document.getElementById("password-login")
const loginBtn = document.getElementById("login-btn");

emailLogin.addEventListener("input", validateLogin);
passwordLogin.addEventListener("input", validateLogin);

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

function setError(input, message){
    input.classList.add("error");
    input.nextElementSibling.textContent = message;
}
function clearError(input){
    input.classList.remove("error");
    input.nextElementSibling.textContent = "";
}

signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
})

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    validateLogin();

})