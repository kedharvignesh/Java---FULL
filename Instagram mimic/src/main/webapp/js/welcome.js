document.querySelector("#signInWelcome").addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector("#welcomeBtn").style.display = "none";
    document.querySelector("#loginForm").style.display = "block";
});


document.querySelector("#signUpWelcome").addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector("#welcomeBtn").style.display = "none";
    document.querySelector("#getConnectedText").innerText = "SignUP";
    document.querySelector("#signUpForm").style.display = "block";

    document.querySelector(".hero__content").style.width = "10%";

});


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
            alert("unsble to create account");
        }
    } else if (name == "") {
        error[0].style.opacity = "1";
    } else if (!checkValidEmail(email)) {
        error[1].style.opacity = "1";
    } else if (password == "") {
        error[2].style.opacity = "1";
    } else if (gender == "") {
        error[3].style.opacity = "1";
    }


});


document.querySelector("#loginForm").addEventListener