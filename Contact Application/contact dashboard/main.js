// getting inputs

let createButton = document.querySelector("#btnCreate");

createButton.addEventListener("click", createContact,);



let contacts = [];
function createContact(e) {
    e.preventDefault();
    let contact = {
        firstName: document.querySelector("#firstName").value,
        lastName: document.querySelector("#lastName").value,
        email: document.querySelector("#email").value,
        phone: document.querySelector("#phone").value,
        userName: document.querySelector("#userName").value,
        password: document.querySelector("#password").value,
        dateOfBirth: document.querySelector("#dob").value,
        gender: document.querySelector("#gender").value,
    }
    if (!contact.firstName == "" && !contact.email == "" && !contact.password == "" && !contact.userName == "" && !contact.dateOfBirth == "" && !contact.gender == "") {
        contacts.push(contact);

        console.warn("added", { contacts });

        document.querySelector("form").reset();

        localStorage.setItem("contactList", JSON.stringify(contacts));
    } else {
        alert("please fill required fields")
    }


}

