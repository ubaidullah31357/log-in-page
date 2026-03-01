let loginForm = document.getElementById ("login-form");
let inputBox = document.querySelectorAll ("input-box");
let rememberForget = document.getElementsByClassName ("remember-forget");
let loginBtn = document.getElementById ("login-btn");
let forgetPassword = document.getElementById ("forget-password");
let register = document.getElementById ("register");
let userName = document.getElementById ("user-name");
let password = document.getElementById ("password");
let showPassword = document.getElementById ("show-password");

loginBtn.addEventListener ("click", () => {
    if (userName.value === "uu583112@gmail.com" && password.value === "72727") {
        window.location.assign("./Clg/index.html");
    } else {
        alert ("Access Denied");
    }
});

function toggle () {
    if (password.type === "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }
}