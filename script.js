// Elements

const authContainer = document.querySelector(".auth-container");
const dashboard = document.querySelector(".dashboard");

const loginBtn = document.querySelector(".main-btn");
const logoutBtn = document.querySelector(".logout");

const emailInput = document.querySelector('input[type="email"]');
const passwordInput = document.querySelector('input[type="password"]');


// Login

loginBtn.addEventListener("click", () => {

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if(email === "" || password === ""){
        alert("Please enter Email and Password.");
        return;
    }

    authContainer.style.display = "none";
    dashboard.style.display = "block";

});


// Logout

logoutBtn.addEventListener("click", () => {

    dashboard.style.display = "none";
    authContainer.style.display = "flex";

    emailInput.value = "";
    passwordInput.value = "";

});


// Google Button Demo

const googleBtn = document.querySelector(".google-btn");

googleBtn.addEventListener("click", () => {
    alert("Google Login will be connected with Firebase Authentication.");
});
