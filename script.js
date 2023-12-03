const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const passwordMessage = document.querySelector(".password-message");

function checkPassword (password) {
    if (password.match(/[a-z]/g) && password.match(/[A-Z]/g) && password.match(/[0-9]/g) && password.match(/[^a-zA-Z\d]/g)) {
        passwordMessage.textContent = "";
        alert("Successful login!!!");
    } else {
        passwordMessage.textContent = "Password should contain at least 1 uppercase character, 1 lowercase character, 1 digit, 1 special character"
    }
}

document.addEventListener("submit", (event) => {
    event.preventDefault();
    checkPassword (password.value);
    emailInput.value = "";
    passwordInput.value = ""; 
})