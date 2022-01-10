import style from './styles.css';


import { onClickCreateButton, onKeyupFilterContact, loadcontactList, onClickSelectContact } from "./utils.js";




const contactList = { list: loadcontactList() }




function init() {
    let createButton = document.getElementById("btnCreate");
    let searchInput = document.getElementById("searchContactInput");
    let createContactButon = document.getElementById("btnCreateContact");
    let applicationTitle = document.querySelector("h1");
    contactList.list = loadcontactList();
    createButton.addEventListener("click", onClickCreateButton);
    searchInput.addEventListener("keyup", onKeyupFilterContact);
    createContactButon.addEventListener("click", onClickDisplayAddContact);
    applicationTitle.addEventListener("click", onClickDisplayHome);

    showContactList();
}

console.log(contactList.list);


init();




// display 
function showContactList() {
    contactList.list = loadcontactList();
    let displayContactList = document.querySelector(".contactList");
    displayContactList.innerHTML = contactList.list.sort((a, b) => {
        let x = (a.firstName + a.lastName);
        let y = (b.firstName + b.lastName);
        if (x > y) { return 1; }
        if (x < y) { return -1; }
        return 0;
    }).map((name) => {

        return name = `<li class="liContact" id=${name.id}>${name.firstName} ${name.lastName}</li>`;

    }).join('');


    let allContactList = document.querySelectorAll(".liContact");

    Array.from(allContactList).forEach((item) => {

        item.addEventListener("click", onClickSelectContact);

    });
}



//display home
function onClickDisplayHome(e) {
    e.preventDefault();
    let displayContactListWrapper = document.querySelector(".contactListwrapper");
    displayContactListWrapper.style.display = "";
    document.querySelector(".createContactDiv").style.display = "none";
    document.getElementById("displayContact").style.display = "none";
    try {
        document.getElementById("editDiv").style.display = "none";
    } catch (error) {
        error.message;
    }
}



// display Add cotact 

function onClickDisplayAddContact(e) {
    e.preventDefault();
    let displayContactListWrapper = document.querySelector(".contactListwrapper");
    displayContactListWrapper.style.display = "none";
    document.getElementById("displayContact").style.display = "none";
    document.querySelector(".createContactDiv").style.display = "block";
    document.querySelector(".createContactDiv").style.opacity = 1;
    try {
        document.getElementById("editDiv").style.display = "none";
    } catch (error) {
        error.message;
    }
}


//display contact info

//jest snapshot testcase 
function displaySelectedContactInfo(contact) {
    return `<li id='li2'>First name : ${contact.firstName}</li>
        <li id='li2'>Last name : ${contact.lastName}</li>
        <li id='li2'>Email : ${contact.email}</li>
        <li id='li2'>Email : Phone :${contact.phone}</li>
        <li id='li2'>Date Of Birth : ${contact.dateOfBirth}</li>
        <li id='li2'>Gender : ${contact.gender}</li><div >
        <input type="button" class="btn" id="btnEdit" value="Edit">
        <input type="button" class="btn" id="delete" value="delete">
        <input type="button" class="btn" id="btnCancel" value="cancel"></div>`
}




export { contactList, onClickDisplayHome, displaySelectedContactInfo };



