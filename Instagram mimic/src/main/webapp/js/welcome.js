document.querySelector("#signInWelcome").addEventListener("click", onClickdisplayLoginForm);
document.querySelector("#navSignin").addEventListener("click", onClickdisplayLoginForm);

document.querySelector("#signUpWelcome").addEventListener("click", onClickdisplaySignupForm);
document.querySelector("#navSignup").addEventListener("click", onClickdisplaySignupForm);

document.querySelector("#cancelSignin").addEventListener("click", onClickDisplayStart);
document.querySelector("#cancelSignUp").addEventListener("click", onClickDisplayStart);


function onClickdisplayLoginForm(e) {
    e.preventDefault();
    document.querySelector("#welcomeBtn").style.display = "none";
    document.querySelector("#signUpForm").style.display = "none";
    document.querySelector("#loginForm").style.display = "block";
    document.querySelector("#getConnectedText").innerText = "SignIn";
    document.querySelector(".hero__content").style.width = "20%";
}



function onClickdisplaySignupForm(e) {
    e.preventDefault();
    document.querySelector("#welcomeBtn").style.display = "none";
    document.querySelector("#getConnectedText").innerText = "SignUP";
    document.querySelector("#signUpForm").style.display = "block";
    document.querySelector(".hero__content").style.width = "20%";
    document.querySelector("#loginForm").style.display = "none";
}

function onClickDisplayStart(e) {
    e.preventDefault();
    document.querySelector("#signUpForm").style.display = "none";
    document.querySelector("#loginForm").style.display = "none";
    document.querySelector("#getConnectedText").innerText = "Get connected with people.";
    document.querySelector(".hero__content").style.width = "";
    document.querySelector("#welcomeBtn").style.display = "";
}


document.querySelector("#logo").addEventListener("click", () => {
    window.location.reload();
});

function checkValidInputs(email, name, password, gender) {

    return (!name == "" && checkValidEmail(email) && !gender == "" && !password == "");
}

function checkValidEmail(email) {
    let emailRegex = /^([a-z 0-9\.-]+)@([a-z0-9-]+)\.([a-z]+)(.[a-z]+)?$/;
    return emailRegex.test(email);
}



document.querySelector("#signUpForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const url = "/signup";
    const email = document.querySelector("#email").value;
    const name = document.querySelector("#name").value;
    const password = document.querySelector("#password").value;
    const gender = document.querySelector("#gender").value;
    const error = document.querySelectorAll(".errorLabel-display");


    if (checkValidInputs(email, name, password, gender)) {
        const signup = {
            email: email,
            name: name,
            password: password,
            createdAt: Date.now(),
            editedAt: Date.now(),
            gender: gender
        }
        try {
            const response = await fetch(url, {
                method: "POST",
                body: JSON.stringify(signup),
                headers: {
                    "Content-Type": "application/json",
                }
            });

            console.log(response);
            const message = await response.text();
            console.log(message);
            if (message == "existing Email") {
                alert("Existing email");
            } else if (message == "success") {
                alert("Welcome - account created");
                window.location.reload();
            }

        } catch (e) {
            console.error(e);
            alert("unable to create account");
        }
    } else if (name == "") {
        error[2].style.opacity = "1";
    } else if (!checkValidEmail(email)) {
        error[3].style.opacity = "1";
    } else if (password == "") {
        error[4].style.opacity = "1";
    } else if (gender == "") {
        error[5].style.opacity = "1";
    }


});


document.querySelector("#loginForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const url = "/login";

    const email = document.querySelector("#emailLogin").value;
    const password = document.querySelector("#passwordLogin").value;
    const error = document.querySelectorAll(".errorLabel-display");

    if (checkValidEmail(email) && !password == "") {
        const login = {
            email: email,
            password: password
        }

        try {
            const response = await fetch(url, {
                method: "POST",
                body: JSON.stringify(login),
                headers: {
                    "Content-Type": "application/json",
                }
            });

            console.log(response);
            const message = await response.text();
            console.log(message);
            if (message == "Invalid Email or password" || message == "mail not found") {
                alert("Invalid Email or password");
            } else if (message == "welcome") {
                window.location.replace("https://kedhar-internship.appspot.com/app");
            }
        } catch (e) {
            console.error(e);
            alert("unable to Sign in");
        }
    } else if (!checkValidEmail(email)) {
        error[0].style.opacity = "1";
    } else if (password == "") {
        error[1].style.opacity = "1";
    }
});