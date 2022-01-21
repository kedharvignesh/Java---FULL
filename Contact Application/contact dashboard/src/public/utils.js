import Contact from "./Contact.js";
import { contactList, displaySelectedContactInfo } from "./main.js";





//jest testcase
export function generateUniqueId() {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
}

//
//jest testcase only for email
function checkValidInputs(email, firstName, gender) {
    let emailRegex = /^([a-z 0-9\.-]+)@([a-z0-9-]+)\.([a-z]+)(.[a-z]+)?$/;
    let validEmail = emailRegex.test(email);
    return (!firstName == "" && validEmail && !gender == "");
}



function refreshPage() {
    window.location.reload();
}



function loadcontactList() {
    let getList;
    try {
        getList = JSON.parse(localStorage.getItem("contactList"));
    } catch (e) {
        console.log(e.message);
    }
    if (getList === null || getList === undefined) {
        getList = [];
    }
    return getList;
};





// event click create 

function onClickCreateButton(e) {
    e.preventDefault();


    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let dateOfBirth = document.getElementById("dob").value;
    let gender = document.getElementById("gender").value;


    if (checkValidInputs(email, firstName, gender)) {
        let contact = new Contact(firstName, lastName, email, phone, dateOfBirth, gender);
        contactList.list.push(contact);
        alert("New Contact Created");
        document.querySelector("form").reset();
        localStorage.setItem("contactList", JSON.stringify(contactList.list));
        refreshPage();
    } else {
        alert("please fill required fields correctly")
    }
}






function onKeyupFilterContact(e) {
    e.preventDefault();
    let displayContactListWrapper = document.querySelector(".contactListwrapper");
    let searchInputDiv = document.getElementById("searchInputDiv");
    let suggBox = document.querySelector(".search-suggestion");
    let key = e.target.value.toLowerCase();
    document.body.addEventListener("mouseup", closeSuggestionOnblur);




    if (key != "" && contactList.list != null) {
        suggBox.innerHTML = contactList.list.filter((contact) => {
            let contactName = contact.firstName.toLowerCase() + " " + contact.lastName.toLowerCase();
            return contactName.indexOf(key) != -1;
        }).map((name) => {

            return name = `<li class="li1" id=${name.id}>${name.firstName} ${name.lastName}</li>`;

        }).join('');

        searchInputDiv.classList.add("active");
        document.querySelector(".createContactDiv").style.opacity = 0.2;
        let displayContactListWrapper = document.querySelector(".contactListwrapper");
        displayContactListWrapper.style.opacity = 0.2;

        try {
            document.querySelector("#editDiv").style.opacity = 0.2;
        } catch (error) {
            error.message;
        }


        //selecting contact
        let allList = document.querySelectorAll(".li1");

        Array.from(allList).forEach((item) => {

            item.addEventListener("click", onClickSelectContact);

        });


    } else if (key == "") {
        searchInputDiv.classList.remove("active");
        displayContactListWrapper.style.opacity = 1;
        document.querySelector(".createContactDiv").style.opacity = 1;

        try {
            document.querySelector("#editDiv").style.opacity = 1;
        } catch (error) {
            error.message;
        }
    } else {
        document.querySelector(".createContactDiv").style.opacity = 1;
        displayContactListWrapper.style.opacity = 1;

    }

    function closeSuggestionOnblur(e) {
        searchInputDiv.classList.remove("active");
        displayContactListWrapper.style.opacity = 1;
        document.querySelector(".createContactDiv").style.opacity = 1;
    }


}




function onClickSelectContact(e) {


    e.preventDefault();
    let currentContact;
    let displayContactListWrapper = document.querySelector(".contactListwrapper");
    console.log(e.target.id);
    displayContactListWrapper.style.display = "none";
    let displayContactDiv = document.getElementById("displayContact");
    displayContactDiv.style.display = "";

    let selectedContact = e.target.id;
    contactList.list.forEach((contact) => {
        if (selectedContact == (contact.id)) {
            currentContact = contact;
            console.log(currentContact);
            let displayContactDiv = document.querySelector("#displayContact");
            displayContactDiv.innerHTML = displaySelectedContactInfo(contact);
        }
    });
    displayContactDiv.classList.add("active");
    document.querySelector(".createContactDiv").style.display = "none";
    try {
        document.querySelector("#editDiv").style.display = "none";
    } catch (error) {
        error.message;
    }



    // delete button inside display

    let deleteButton = document.getElementById("delete");
    deleteButton.addEventListener("click", onDeleteContact);
    function onDeleteContact(e) {
        e.preventDefault();

        if (confirm("Are you sure to delete the contact ?")) {
            contactList.list = contactList.list.filter((contact) => contact != currentContact);
            console.log(contactList.list);

            localStorage.setItem("contactList", JSON.stringify(contactList.list));
            alert("contact deleted");
            refreshPage();

        }

    }


    // cancel button

    let cancelDisplay = document.querySelector("#btnCancel");


    cancelDisplay.addEventListener("click", (e) => {
        e.preventDefault();
        displayContactDiv.classList.remove("active");
        displayContactDiv.innerText = "";
        displayContactListWrapper.style.display = "";

    });


    //edit button

    let editDisplay = document.querySelector("#btnEdit");
    editDisplay.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector(".createContactDiv").style.display = "block";
        let cloneDiv = document.querySelector(".createContactDiv").cloneNode(true);
        document.querySelector(".createContactDiv").style.display = "none";

        let editLabel = cloneDiv.querySelectorAll(".contactLabel-display");
        let buttons = cloneDiv.querySelector("#buttons");



        displayContactDiv.classList.remove("active");
        displayContactDiv.innerText = "";

        cloneDiv.setAttribute("id", "editDiv");
        document.querySelector("main").appendChild(cloneDiv);
        document.querySelector("#editDiv").style.display = "";
        document.querySelector("#editDiv").style.opacity = 1;
        cloneDiv.querySelector("#h1").innerText = "Edit Contact";
        cloneDiv.querySelector("#firstName").value = currentContact.firstName;
        cloneDiv.querySelector("#lastName").value = currentContact.lastName;
        cloneDiv.querySelector("#email").value = currentContact.email;
        cloneDiv.querySelector("#phone").value = currentContact.phone;
        cloneDiv.querySelector("#dob").value = currentContact.deleteContact;
        cloneDiv.querySelector("#gender").value = currentContact.gender;
        cloneDiv.style.display = "block";
        editLabel.forEach((i) => {
            i.classList.add("active");
        });

        buttons.innerHTML = `<input type="button" class="btn" id="btnSave" value="save">
        <input type="button" class="btn" id="btnCancelEdit" value="cancel">`




        //cancel but inside edit
        let cancelButton = cloneDiv.querySelector("#btnCancelEdit");

        cancelButton.addEventListener("click", onCancelEdit);


        function onCancelEdit(e) {
            e.preventDefault();
            document.querySelector("#editDiv").style.display = "none";
            displayContactListWrapper.style.display = "";
            displayContactListWrapper.style.opacity = 1;
        }




        //save button inside edit
        let saveButton = cloneDiv.querySelector("#btnSave");

        saveButton.addEventListener("click", onSaveContact);

        function onSaveContact(e) {
            e.preventDefault();


            // getting inputs
            let firstName = cloneDiv.querySelector("#firstName").value;
            let lastName = cloneDiv.querySelector("#lastName").value;
            let email = cloneDiv.querySelector("#email").value;
            let phone = cloneDiv.querySelector("#phone").value;
            let dateOfBirth = cloneDiv.querySelector("#dob").value;
            let gender = cloneDiv.querySelector("#gender").value;



            if (checkValidInputs(email, firstName, gender) && (confirm("Are you sure to save changes  ?"))) {

                contactList.list = contactList.list.filter((contact) => contact != currentContact);

                localStorage.setItem("contactList", JSON.stringify(contactList.list));

                let contact = new Contact(firstName, lastName, email, phone, dateOfBirth, gender);
                contactList.list.push(contact);
                alert(" changes saved");


                localStorage.setItem("contactList", JSON.stringify(contactList.list));

                refreshPage();
            } else {
                alert("please fill required fields correctly")
            }

        }

    });


}


export {
    onClickCreateButton, onKeyupFilterContact, loadcontactList, onClickSelectContact
}

