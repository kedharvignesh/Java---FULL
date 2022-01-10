/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/public/Contact.js":
/*!*******************************!*\
  !*** ./src/public/Contact.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Contact)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/public/utils.js");
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Contact = /*#__PURE__*/_createClass(function Contact(firstName, lastName, email, phone, dateOfBirth, gender) {
  _classCallCheck(this, Contact);

  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.phone = phone;
  this.dateOfBirth = dateOfBirth;
  this.gender = gender;
  this.id = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.generateUniqueId)();
});



/***/ }),

/***/ "./src/public/main.js":
/*!****************************!*\
  !*** ./src/public/main.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contactList": () => (/* binding */ contactList),
/* harmony export */   "onClickDisplayHome": () => (/* binding */ onClickDisplayHome),
/* harmony export */   "displaySelectedContactInfo": () => (/* binding */ displaySelectedContactInfo)
/* harmony export */ });
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/public/styles.css");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "./src/public/utils.js");


var contactList = {
  list: (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.loadcontactList)()
};

function init() {
  var createButton = document.getElementById("btnCreate");
  var searchInput = document.getElementById("searchContactInput");
  var createContactButon = document.getElementById("btnCreateContact");
  var applicationTitle = document.querySelector("h1");
  contactList.list = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.loadcontactList)();
  createButton.addEventListener("click", _utils_js__WEBPACK_IMPORTED_MODULE_1__.onClickCreateButton);
  searchInput.addEventListener("keyup", _utils_js__WEBPACK_IMPORTED_MODULE_1__.onKeyupFilterContact);
  createContactButon.addEventListener("click", onClickDisplayAddContact);
  applicationTitle.addEventListener("click", onClickDisplayHome);
  showContactList();
}

console.log(contactList.list);
init(); // display 

function showContactList() {
  contactList.list = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.loadcontactList)();
  var displayContactList = document.querySelector(".contactList");
  displayContactList.innerHTML = contactList.list.sort(function (a, b) {
    var x = a.firstName + a.lastName;
    var y = b.firstName + b.lastName;

    if (x > y) {
      return 1;
    }

    if (x < y) {
      return -1;
    }

    return 0;
  }).map(function (name) {
    return name = "<li class=\"liContact\" id=".concat(name.id, ">").concat(name.firstName, " ").concat(name.lastName, "</li>");
  }).join('');
  var allContactList = document.querySelectorAll(".liContact");
  Array.from(allContactList).forEach(function (item) {
    item.addEventListener("click", _utils_js__WEBPACK_IMPORTED_MODULE_1__.onClickSelectContact);
  });
} //display home


function onClickDisplayHome(e) {
  e.preventDefault();
  var displayContactListWrapper = document.querySelector(".contactListwrapper");
  displayContactListWrapper.style.display = "";
  document.querySelector(".createContactDiv").style.display = "none";
  document.getElementById("displayContact").style.display = "none";

  try {
    document.getElementById("editDiv").style.display = "none";
  } catch (error) {
    error.message;
  }
} // display Add cotact 


function onClickDisplayAddContact(e) {
  e.preventDefault();
  var displayContactListWrapper = document.querySelector(".contactListwrapper");
  displayContactListWrapper.style.display = "none";
  document.getElementById("displayContact").style.display = "none";
  document.querySelector(".createContactDiv").style.display = "block";
  document.querySelector(".createContactDiv").style.opacity = 1;

  try {
    document.getElementById("editDiv").style.display = "none";
  } catch (error) {
    error.message;
  }
} //display contact info
//jest snapshot testcase 


function displaySelectedContactInfo(contact) {
  return "<li id='li2'>First name : ".concat(contact.firstName, "</li>\n        <li id='li2'>Last name : ").concat(contact.lastName, "</li>\n        <li id='li2'>Email : ").concat(contact.email, "</li>\n        <li id='li2'>Email : Phone :").concat(contact.phone, "</li>\n        <li id='li2'>Date Of Birth : ").concat(contact.dateOfBirth, "</li>\n        <li id='li2'>Gender : ").concat(contact.gender, "</li><div >\n        <input type=\"button\" class=\"btn\" id=\"btnEdit\" value=\"Edit\">\n        <input type=\"button\" class=\"btn\" id=\"delete\" value=\"delete\">\n        <input type=\"button\" class=\"btn\" id=\"btnCancel\" value=\"cancel\"></div>");
}



/***/ }),

/***/ "./src/public/utils.js":
/*!*****************************!*\
  !*** ./src/public/utils.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateUniqueId": () => (/* binding */ generateUniqueId),
/* harmony export */   "onClickCreateButton": () => (/* binding */ onClickCreateButton),
/* harmony export */   "onKeyupFilterContact": () => (/* binding */ onKeyupFilterContact),
/* harmony export */   "loadcontactList": () => (/* binding */ loadcontactList),
/* harmony export */   "onClickSelectContact": () => (/* binding */ onClickSelectContact)
/* harmony export */ });
/* harmony import */ var _Contact_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Contact.js */ "./src/public/Contact.js");
/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.js */ "./src/public/main.js");

 //jest testcase

function generateUniqueId() {
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
} //
//jest testcase only for email

function checkValidInputs(email, firstName, gender) {
  var emailRegex = /^([a-z 0-9\.-]+)@([a-z0-9-]+)\.([a-z]+)(.[a-z]+)?$/;
  var validEmail = emailRegex.test(email);
  return !firstName == "" && validEmail && !gender == "";
}

function refreshPage() {
  window.location.reload();
}

function loadcontactList() {
  var getList;

  try {
    getList = JSON.parse(localStorage.getItem("contactList"));
  } catch (e) {
    console.log(e.message);
  }

  if (getList === null || getList === undefined) {
    getList = [];
  }

  return getList;
}

; // event click create 

function onClickCreateButton(e) {
  e.preventDefault();
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var dateOfBirth = document.getElementById("dob").value;
  var gender = document.getElementById("gender").value;

  if (checkValidInputs(email, firstName, gender)) {
    var contact = new _Contact_js__WEBPACK_IMPORTED_MODULE_0__["default"](firstName, lastName, email, phone, dateOfBirth, gender);
    _main_js__WEBPACK_IMPORTED_MODULE_1__.contactList.list.push(contact);
    alert("New Contact Created");
    document.querySelector("form").reset();
    localStorage.setItem("contactList", JSON.stringify(_main_js__WEBPACK_IMPORTED_MODULE_1__.contactList.list));
    refreshPage();
  } else {
    alert("please fill required fields correctly");
  }
}

function onKeyupFilterContact(e) {
  e.preventDefault();
  var displayContactListWrapper = document.querySelector(".contactListwrapper");
  var searchInputDiv = document.getElementById("searchInputDiv");
  var suggBox = document.querySelector(".search-suggestion");
  var key = e.target.value.toLowerCase();
  document.body.addEventListener("mouseup", closeSuggestionOnblur);

  if (key != "" && _main_js__WEBPACK_IMPORTED_MODULE_1__.contactList.list != null) {
    suggBox.innerHTML = _main_js__WEBPACK_IMPORTED_MODULE_1__.contactList.list.filter(function (contact) {
      var contactName = contact.firstName.toLowerCase() + " " + contact.lastName.toLowerCase();
      return contactName.indexOf(key) != -1;
    }).map(function (name) {
      return name = "<li class=\"li1\" id=".concat(name.id, ">").concat(name.firstName, " ").concat(name.lastName, "</li>");
    }).join('');
    searchInputDiv.classList.add("active");
    document.querySelector(".createContactDiv").style.opacity = 0.2;

    var _displayContactListWrapper = document.querySelector(".contactListwrapper");

    _displayContactListWrapper.style.opacity = 0.2;

    try {
      document.querySelector("#editDiv").style.opacity = 0.2;
    } catch (error) {
      error.message;
    } //selecting contact


    var allList = document.querySelectorAll(".li1");
    Array.from(allList).forEach(function (item) {
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
  var currentContact;
  var displayContactListWrapper = document.querySelector(".contactListwrapper");
  console.log(e.target.id);
  displayContactListWrapper.style.display = "none";
  var displayContactDiv = document.getElementById("displayContact");
  displayContactDiv.style.display = "";
  var selectedContact = e.target.id;
  _main_js__WEBPACK_IMPORTED_MODULE_1__.contactList.list.forEach(function (contact) {
    if (selectedContact == contact.id) {
      currentContact = contact;
      console.log(currentContact);

      var _displayContactDiv = document.querySelector("#displayContact");

      _displayContactDiv.innerHTML = (0,_main_js__WEBPACK_IMPORTED_MODULE_1__.displaySelectedContactInfo)(contact);
    }
  });
  displayContactDiv.classList.add("active");
  document.querySelector(".createContactDiv").style.display = "none"; // delete button inside display

  var deleteButton = document.getElementById("delete");
  deleteButton.addEventListener("click", onDeleteContact);

  function onDeleteContact(e) {
    e.preventDefault();

    if (confirm("Are you sure to delete the contact ?")) {
      _main_js__WEBPACK_IMPORTED_MODULE_1__.contactList.list = _main_js__WEBPACK_IMPORTED_MODULE_1__.contactList.list.filter(function (contact) {
        return contact != currentContact;
      });
      console.log(_main_js__WEBPACK_IMPORTED_MODULE_1__.contactList.list);
      localStorage.setItem("contactList", JSON.stringify(_main_js__WEBPACK_IMPORTED_MODULE_1__.contactList.list));
      alert("contact deleted");
      refreshPage();
    }
  } // cancel button


  var cancelDisplay = document.querySelector("#btnCancel");
  cancelDisplay.addEventListener("click", function (e) {
    e.preventDefault();
    displayContactDiv.classList.remove("active");
    displayContactDiv.innerText = "";
    displayContactListWrapper.style.display = "";
  }); //edit button

  var editDisplay = document.querySelector("#btnEdit");
  editDisplay.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(".createContactDiv").style.display = "block";
    var cloneDiv = document.querySelector(".createContactDiv").cloneNode(true);
    document.querySelector(".createContactDiv").style.display = "none";
    var editLabel = cloneDiv.querySelectorAll(".contactLabel-display");
    var buttons = cloneDiv.querySelector("#buttons");
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
    editLabel.forEach(function (i) {
      i.classList.add("active");
    });
    buttons.innerHTML = "<input type=\"button\" class=\"btn\" id=\"btnSave\" value=\"save\">\n        <input type=\"button\" class=\"btn\" id=\"btnCancelEdit\" value=\"cancel\">"; //cancel but inside edit

    var cancelButton = cloneDiv.querySelector("#btnCancelEdit");
    cancelButton.addEventListener("click", onCancelEdit);

    function onCancelEdit(e) {
      e.preventDefault();
      document.querySelector("#editDiv").style.display = "none";
      displayContactListWrapper.style.display = "";
      displayContactListWrapper.style.opacity = 1;
    } //save button inside edit


    var saveButton = cloneDiv.querySelector("#btnSave");
    saveButton.addEventListener("click", onSaveContact);

    function onSaveContact(e) {
      e.preventDefault(); // getting inputs

      var firstName = cloneDiv.querySelector("#firstName").value;
      var lastName = cloneDiv.querySelector("#lastName").value;
      var email = cloneDiv.querySelector("#email").value;
      var phone = cloneDiv.querySelector("#phone").value;
      var dateOfBirth = cloneDiv.querySelector("#dob").value;
      var gender = cloneDiv.querySelector("#gender").value;

      if (checkValidInputs(email, firstName, gender) && confirm("Are you sure to save changes  ?")) {
        _main_js__WEBPACK_IMPORTED_MODULE_1__.contactList.list = _main_js__WEBPACK_IMPORTED_MODULE_1__.contactList.list.filter(function (contact) {
          return contact != currentContact;
        });
        localStorage.setItem("contactList", JSON.stringify(_main_js__WEBPACK_IMPORTED_MODULE_1__.contactList.list));
        var contact = new _Contact_js__WEBPACK_IMPORTED_MODULE_0__["default"](firstName, lastName, email, phone, dateOfBirth, gender);
        _main_js__WEBPACK_IMPORTED_MODULE_1__.contactList.list.push(contact);
        alert(" changes saved");
        localStorage.setItem("contactList", JSON.stringify(_main_js__WEBPACK_IMPORTED_MODULE_1__.contactList.list));
        refreshPage();
      } else {
        alert("please fill required fields correctly");
      }
    }
  });
}



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/public/styles.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/public/styles.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "::-moz-selection {\r\n    background-color: #eeeda2;\r\n    color: #fff;\r\n  }\r\n  \r\n  ::selection {\r\n    background-color: #eeeda2;\r\n    color: #fff;\r\n  }\r\n\r\n\r\n  *,\r\n  *::before,\r\n  *::after {\r\n    margin: 0;\r\n    padding: 0;\r\n    -webkit-box-sizing: inherit;\r\n    box-sizing: inherit;\r\n  }\r\n  \r\n  html {\r\n    font-size: 62.5%;\r\n    -webkit-box-sizing: border-box;\r\n    box-sizing: border-box;\r\n  }\r\n\r\n\r\n  body { \r\n    line-height: 1.6;\r\n    font-weight: 300;\r\n    font-family: 'Lato', sans-serif;\r\n    color: #777;\r\n    padding: 3rem;\r\n    min-height: 100vh;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n    -ms-flex-direction: column;\r\n    flex-direction: column;\r\n  }\r\n  \r\n  .main {\r\n    background-color: #f7f7f7;\r\n    padding: 6rem 0;\r\n    -webkit-box-flex: 1;\r\n    -ms-flex: 1;\r\n    flex: 1;\r\n    display: flex;\r\n    justify-content: center;\r\n         \r\n  }\r\n\r\n\r\n  .flex {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    \r\n  }\r\n  \r\n  .contactDetails {\r\n    margin: 5% 0% !important;\r\n  }\r\n\r\n  .btn,\r\n  .btn:link,\r\n  .btn:visited {\r\n    font-size: 1.6rem;\r\n    padding: 1.4rem 3rem;\r\n    border-radius: 10rem;\r\n    text-transform: uppercase;\r\n    display: inline-block;\r\n    text-decoration: none;\r\n    position: relative;\r\n    -webkit-transition: all 0.4s;\r\n    transition: all 0.4s;\r\n    font-weight: 400;\r\n    -webkit-backface-visibility: hidden;\r\n    backface-visibility: hidden;\r\n    border: none;\r\n    cursor: pointer;\r\n    background-color: #6096af;\r\n    color: #ecea5d; \r\n  }  \r\n\r\n  .btn:hover {\r\n    -webkit-transform: translateY(-3px);\r\n    transform: translateY(-3px);\r\n    -webkit-box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);\r\n    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);\r\n  }\r\n  \r\n  .btn:focus {\r\n    outline: none;\r\n    background-color: #2e864b;\r\n  }\r\n  \r\n#delete{\r\n  background-color: #d8535e;\r\n  color: #ecea5d;\r\n}\r\n\r\n#btnCreateContact{\r\n  position: relative;\r\n  top :24%;\r\n  left: 30%;\r\n  background-color: #f2f2f2;\r\n  color: #6096af;\r\n  font-weight: 900;\r\n  font-family: inherit;\r\n}\r\n  .header {\r\n    background-color: #6096af;\r\n    color: #ecea5d;\r\n    padding: 0 5rem;\r\n    height: 12rem;\r\n    position: relative;\r\n    z-index: 100;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: justify;\r\n    -ms-flex-pack: justify;\r\n    justify-content: space-between;\r\n    -webkit-box-align: center;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n      font-size: 25px;\r\n  }\r\n  \r\n  .headerCreate {\r\n    height: 8rem;\r\n    font-size: 16px;\r\n    border-radius: 2px;\r\n    margin-bottom: 20px;\r\n    width: 100% !important;\r\n    display: flex;\r\n    justify-content: center;\r\n        \r\n  }\r\n\r\n  #allContacts{\r\n    height: 40px;\r\n    position: relative;\r\n    bottom: 40px;\r\n    \r\n  }\r\n\r\n  .footer__copyright {\r\n    justify-self: end;\r\n    color: #999;\r\n  }\r\n\r\n  .nav {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n    -ms-flex-align: center;\r\n   \r\n  }\r\n  \r\n\r\n  .createContactDiv {\r\n    margin: 0 auto;\r\n    max-width: 220rem;\r\n    background-color: #fff;\r\n    -webkit-box-shadow: 0 2.5rem 8rem 2rem rgba(0, 0, 0, 0.06);\r\n    box-shadow: 0 2.5rem 8rem 2rem rgba(0, 0, 0, 0.06);\r\n    padding: 0 0 0rem 0;\r\n    border-radius: 15px;\r\n    display: none;\r\n        \r\n  }\r\n\r\n  .userInput {\r\n    display: block;\r\n    font-family: inherit;\r\n    font-size: 1.5rem;\r\n    color: inherit;\r\n    font-weight: bold;\r\n    padding: 1.25rem 2rem;\r\n    border: none;\r\n    width: 95%;\r\n    background-color: #fff;\r\n    background-color: #f2f2f2;\r\n    border-top: 3px solid transparent;\r\n    border-bottom: 3px solid transparent;\r\n    -webkit-transition: all 0.3s;\r\n    transition: all 0.3s;\r\n    border-radius: 4px;\r\n    -webkit-box-sizing: border-box;\r\n    box-sizing: border-box;\r\n    \r\n  \r\n  }\r\n\r\n\r\n  .userInput:focus {\r\n    outline: none;\r\n    border-bottom: 3px solid #55c57a;\r\n  }\r\n  .userInput:focus:invalid {\r\n    border-bottom: 3px solid #ff7730;\r\n  }\r\n  .userInput::-webkit-input-placeholder {\r\n    color: #bbb;\r\n  }\r\n  \r\n  .formAdd:not(:last-child) {\r\n    margin-bottom: 2.5rem;\r\n  }\r\n  \r\n  .contactLabel {\r\n    display: block;\r\n    font-size: 15px;\r\n    font-weight: 700;\r\n    \r\n  }\r\n\r\n\r\n\r\n  input:invalid {\r\n    border: 2px solid #ffccc4;\r\n  }\r\n  \r\n  input:valid {\r\n    border: 2px solid #b9fff4;\r\n  }\r\n\r\n\r\n\r\n \r\n\r\n#addForm{\r\n  text-align: center;\r\npadding: 0 3%;\r\n} \r\n\r\n.wrapper{\r\n  max-width: 450px;\r\n  margin: 150px auto;\r\n}\r\n\r\n.wrapper .search-input{\r\n  background: #fff;\r\n  width: 35%;\r\n  border-radius: 5px;\r\n  position: absolute;\r\n  box-shadow: 0px 1px 5px 3px rgba(0,0,0,0.12);\r\n}\r\n\r\n.search-input input{\r\n  height: 50px;\r\n  width: 100%;\r\n  outline: none;\r\n  border: none;\r\n  border-radius: 5px;\r\n  padding: 0 60px 0 20px;\r\n  font-size: 18px;\r\n  box-shadow: 0px 1px 5px rgba(0,0,0,0.1);\r\n  color: #777;\r\n}\r\n\r\n.search-input.active input{\r\n  border-radius: 5px 5px 0 0;\r\n}\r\n\r\n.search-input .search-suggestion{\r\n  padding: 0;\r\n  opacity: 0;\r\n  pointer-events: none;\r\n  max-height: 280px;\r\n  overflow-y: auto;\r\n}\r\n\r\n.search-input.active .search-suggestion{\r\n  padding: 10px 8px;\r\n  opacity: 1;\r\n  pointer-events: auto;\r\n}\r\n\r\n.search-suggestion li{\r\n  list-style: none;\r\n  padding: 8px 12px;\r\n  display: none;\r\n  width: 100%;\r\n  cursor: default;\r\n  border-radius: 3px;\r\n  color: #777;\r\n}\r\n\r\n.search-input.active .search-suggestion li{\r\n  display: block;\r\n}\r\n.search-suggestion li:hover{\r\n  background: #efefef;\r\n}\r\n\r\n.display-contact.active {\r\n  display: block;\r\n  font-family: inherit;\r\n  font-size: 18px;\r\n  color: inherit;\r\n  font-weight: bold;\r\n  padding: 1.25rem 2rem;\r\n  border: none;\r\n  width: 50%;\r\n  background-color: #fff;\r\n  background-color: #f2f2f2;\r\n  border-top: 3px solid transparent;\r\n  border-bottom: 3px solid transparent;\r\n  -webkit-transition: all 0.3s;\r\n  transition: all 0.3s;\r\n  border-radius: 4px; \r\n -webkit-box-sizing: border-box;\r\n  box-sizing: border-box;\r\n list-style: none; \r\n \r\n}\r\n.display-contact.active li{\r\npadding: 4px;\r\n}\r\n\r\n.display-contact.active input{\r\n  font-size: 1.3rem;\r\n  padding: 1.4rem 3rem;\r\n  border-radius: 10rem;\r\n  text-transform: uppercase;\r\n  display: inline-block;\r\n  text-decoration: none;\r\n  position: relative;\r\n  -webkit-transition: all 0.4s;\r\n  transition: all 0.4s;\r\n  font-weight: 400;\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  border: none;\r\n  cursor: pointer; \r\n \r\n\r\n}\r\n\r\n.display-contact.active input:hover {\r\n  -webkit-transform: translateY(-3px);\r\n  transform: translateY(-3px);\r\n  -webkit-box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);\r\n  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);\r\n}\r\n\r\n.display-contact.active input:focus {\r\n  outline: none;\r\n  background-color: #2e864b;\r\n}\r\n\r\n.contactLabel-display {\r\n  display: none;\r\n}\r\n\r\n.contactLabel-display.active {\r\n  display: block;\r\n  font-size: 15px;\r\n  font-weight: 700;\r\n\r\n}\r\n\r\n.contactListwrapper{\r\n  max-width: 475px;\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  \r\n  \r\n}\r\n.contactListwrapper .contactList{\r\n  background: #fff;\r\n  width: 35%;\r\n  border-radius: 5px;\r\n  position: absolute;\r\n  box-shadow: 0px 1px 5px 3px rgba(0,0,0,0.12);\r\n  font-size: 18px;\r\n  font-weight:550;\r\n  overflow-y: scroll;\r\nmax-height: 400px;\r\n}\r\n\r\n.contactList li{\r\n  list-style: none;\r\n  padding: 8px 2px;\r\n  display: none;\r\n  width: 100%;\r\n  cursor: default;\r\n  border-radius: 3px;\r\n  color: #777;\r\n}\r\n\r\n.contactList li{\r\n  display: block;\r\n}\r\n.contactList li:hover{\r\n  background: #efefef;\r\n}\r\n\r\n", "",{"version":3,"sources":["webpack://./src/public/styles.css"],"names":[],"mappings":"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","sourcesContent":["::-moz-selection {\r\n    background-color: #eeeda2;\r\n    color: #fff;\r\n  }\r\n  \r\n  ::selection {\r\n    background-color: #eeeda2;\r\n    color: #fff;\r\n  }\r\n\r\n\r\n  *,\r\n  *::before,\r\n  *::after {\r\n    margin: 0;\r\n    padding: 0;\r\n    -webkit-box-sizing: inherit;\r\n    box-sizing: inherit;\r\n  }\r\n  \r\n  html {\r\n    font-size: 62.5%;\r\n    -webkit-box-sizing: border-box;\r\n    box-sizing: border-box;\r\n  }\r\n\r\n\r\n  body { \r\n    line-height: 1.6;\r\n    font-weight: 300;\r\n    font-family: 'Lato', sans-serif;\r\n    color: #777;\r\n    padding: 3rem;\r\n    min-height: 100vh;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n    -ms-flex-direction: column;\r\n    flex-direction: column;\r\n  }\r\n  \r\n  .main {\r\n    background-color: #f7f7f7;\r\n    padding: 6rem 0;\r\n    -webkit-box-flex: 1;\r\n    -ms-flex: 1;\r\n    flex: 1;\r\n    display: flex;\r\n    justify-content: center;\r\n         \r\n  }\r\n\r\n\r\n  .flex {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    \r\n  }\r\n  \r\n  .contactDetails {\r\n    margin: 5% 0% !important;\r\n  }\r\n\r\n  .btn,\r\n  .btn:link,\r\n  .btn:visited {\r\n    font-size: 1.6rem;\r\n    padding: 1.4rem 3rem;\r\n    border-radius: 10rem;\r\n    text-transform: uppercase;\r\n    display: inline-block;\r\n    text-decoration: none;\r\n    position: relative;\r\n    -webkit-transition: all 0.4s;\r\n    transition: all 0.4s;\r\n    font-weight: 400;\r\n    -webkit-backface-visibility: hidden;\r\n    backface-visibility: hidden;\r\n    border: none;\r\n    cursor: pointer;\r\n    background-color: #6096af;\r\n    color: #ecea5d; \r\n  }  \r\n\r\n  .btn:hover {\r\n    -webkit-transform: translateY(-3px);\r\n    transform: translateY(-3px);\r\n    -webkit-box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);\r\n    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);\r\n  }\r\n  \r\n  .btn:focus {\r\n    outline: none;\r\n    background-color: #2e864b;\r\n  }\r\n  \r\n#delete{\r\n  background-color: #d8535e;\r\n  color: #ecea5d;\r\n}\r\n\r\n#btnCreateContact{\r\n  position: relative;\r\n  top :24%;\r\n  left: 30%;\r\n  background-color: #f2f2f2;\r\n  color: #6096af;\r\n  font-weight: 900;\r\n  font-family: inherit;\r\n}\r\n  .header {\r\n    background-color: #6096af;\r\n    color: #ecea5d;\r\n    padding: 0 5rem;\r\n    height: 12rem;\r\n    position: relative;\r\n    z-index: 100;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: justify;\r\n    -ms-flex-pack: justify;\r\n    justify-content: space-between;\r\n    -webkit-box-align: center;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n      font-size: 25px;\r\n  }\r\n  \r\n  .headerCreate {\r\n    height: 8rem;\r\n    font-size: 16px;\r\n    border-radius: 2px;\r\n    margin-bottom: 20px;\r\n    width: 100% !important;\r\n    display: flex;\r\n    justify-content: center;\r\n        \r\n  }\r\n\r\n  #allContacts{\r\n    height: 40px;\r\n    position: relative;\r\n    bottom: 40px;\r\n    \r\n  }\r\n\r\n  .footer__copyright {\r\n    justify-self: end;\r\n    color: #999;\r\n  }\r\n\r\n  .nav {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n    -ms-flex-align: center;\r\n   \r\n  }\r\n  \r\n\r\n  .createContactDiv {\r\n    margin: 0 auto;\r\n    max-width: 220rem;\r\n    background-color: #fff;\r\n    -webkit-box-shadow: 0 2.5rem 8rem 2rem rgba(0, 0, 0, 0.06);\r\n    box-shadow: 0 2.5rem 8rem 2rem rgba(0, 0, 0, 0.06);\r\n    padding: 0 0 0rem 0;\r\n    border-radius: 15px;\r\n    display: none;\r\n        \r\n  }\r\n\r\n  .userInput {\r\n    display: block;\r\n    font-family: inherit;\r\n    font-size: 1.5rem;\r\n    color: inherit;\r\n    font-weight: bold;\r\n    padding: 1.25rem 2rem;\r\n    border: none;\r\n    width: 95%;\r\n    background-color: #fff;\r\n    background-color: #f2f2f2;\r\n    border-top: 3px solid transparent;\r\n    border-bottom: 3px solid transparent;\r\n    -webkit-transition: all 0.3s;\r\n    transition: all 0.3s;\r\n    border-radius: 4px;\r\n    -webkit-box-sizing: border-box;\r\n    box-sizing: border-box;\r\n    \r\n  \r\n  }\r\n\r\n\r\n  .userInput:focus {\r\n    outline: none;\r\n    border-bottom: 3px solid #55c57a;\r\n  }\r\n  .userInput:focus:invalid {\r\n    border-bottom: 3px solid #ff7730;\r\n  }\r\n  .userInput::-webkit-input-placeholder {\r\n    color: #bbb;\r\n  }\r\n  \r\n  .formAdd:not(:last-child) {\r\n    margin-bottom: 2.5rem;\r\n  }\r\n  \r\n  .contactLabel {\r\n    display: block;\r\n    font-size: 15px;\r\n    font-weight: 700;\r\n    \r\n  }\r\n\r\n\r\n\r\n  input:invalid {\r\n    border: 2px solid #ffccc4;\r\n  }\r\n  \r\n  input:valid {\r\n    border: 2px solid #b9fff4;\r\n  }\r\n\r\n\r\n\r\n \r\n\r\n#addForm{\r\n  text-align: center;\r\npadding: 0 3%;\r\n} \r\n\r\n.wrapper{\r\n  max-width: 450px;\r\n  margin: 150px auto;\r\n}\r\n\r\n.wrapper .search-input{\r\n  background: #fff;\r\n  width: 35%;\r\n  border-radius: 5px;\r\n  position: absolute;\r\n  box-shadow: 0px 1px 5px 3px rgba(0,0,0,0.12);\r\n}\r\n\r\n.search-input input{\r\n  height: 50px;\r\n  width: 100%;\r\n  outline: none;\r\n  border: none;\r\n  border-radius: 5px;\r\n  padding: 0 60px 0 20px;\r\n  font-size: 18px;\r\n  box-shadow: 0px 1px 5px rgba(0,0,0,0.1);\r\n  color: #777;\r\n}\r\n\r\n.search-input.active input{\r\n  border-radius: 5px 5px 0 0;\r\n}\r\n\r\n.search-input .search-suggestion{\r\n  padding: 0;\r\n  opacity: 0;\r\n  pointer-events: none;\r\n  max-height: 280px;\r\n  overflow-y: auto;\r\n}\r\n\r\n.search-input.active .search-suggestion{\r\n  padding: 10px 8px;\r\n  opacity: 1;\r\n  pointer-events: auto;\r\n}\r\n\r\n.search-suggestion li{\r\n  list-style: none;\r\n  padding: 8px 12px;\r\n  display: none;\r\n  width: 100%;\r\n  cursor: default;\r\n  border-radius: 3px;\r\n  color: #777;\r\n}\r\n\r\n.search-input.active .search-suggestion li{\r\n  display: block;\r\n}\r\n.search-suggestion li:hover{\r\n  background: #efefef;\r\n}\r\n\r\n.display-contact.active {\r\n  display: block;\r\n  font-family: inherit;\r\n  font-size: 18px;\r\n  color: inherit;\r\n  font-weight: bold;\r\n  padding: 1.25rem 2rem;\r\n  border: none;\r\n  width: 50%;\r\n  background-color: #fff;\r\n  background-color: #f2f2f2;\r\n  border-top: 3px solid transparent;\r\n  border-bottom: 3px solid transparent;\r\n  -webkit-transition: all 0.3s;\r\n  transition: all 0.3s;\r\n  border-radius: 4px; \r\n -webkit-box-sizing: border-box;\r\n  box-sizing: border-box;\r\n list-style: none; \r\n \r\n}\r\n.display-contact.active li{\r\npadding: 4px;\r\n}\r\n\r\n.display-contact.active input{\r\n  font-size: 1.3rem;\r\n  padding: 1.4rem 3rem;\r\n  border-radius: 10rem;\r\n  text-transform: uppercase;\r\n  display: inline-block;\r\n  text-decoration: none;\r\n  position: relative;\r\n  -webkit-transition: all 0.4s;\r\n  transition: all 0.4s;\r\n  font-weight: 400;\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n  border: none;\r\n  cursor: pointer; \r\n \r\n\r\n}\r\n\r\n.display-contact.active input:hover {\r\n  -webkit-transform: translateY(-3px);\r\n  transform: translateY(-3px);\r\n  -webkit-box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);\r\n  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);\r\n}\r\n\r\n.display-contact.active input:focus {\r\n  outline: none;\r\n  background-color: #2e864b;\r\n}\r\n\r\n.contactLabel-display {\r\n  display: none;\r\n}\r\n\r\n.contactLabel-display.active {\r\n  display: block;\r\n  font-size: 15px;\r\n  font-weight: 700;\r\n\r\n}\r\n\r\n.contactListwrapper{\r\n  max-width: 475px;\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  \r\n  \r\n}\r\n.contactListwrapper .contactList{\r\n  background: #fff;\r\n  width: 35%;\r\n  border-radius: 5px;\r\n  position: absolute;\r\n  box-shadow: 0px 1px 5px 3px rgba(0,0,0,0.12);\r\n  font-size: 18px;\r\n  font-weight:550;\r\n  overflow-y: scroll;\r\nmax-height: 400px;\r\n}\r\n\r\n.contactList li{\r\n  list-style: none;\r\n  padding: 8px 2px;\r\n  display: none;\r\n  width: 100%;\r\n  cursor: default;\r\n  border-radius: 3px;\r\n  color: #777;\r\n}\r\n\r\n.contactList li{\r\n  display: block;\r\n}\r\n.contactList li:hover{\r\n  background: #efefef;\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/public/styles.css":
/*!*******************************!*\
  !*** ./src/public/styles.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/public/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/public/main.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.js.map