document.addEventListener("DOMContentLoaded", () => {
  "use strict";
  // contact list the setting of the first ones the base 
  const contacts = [
    {
      name: "Susan Mayers",
      phone: "1234567890",
      email: "susan@gmail.com",
      image: "images/susan.jpg",
    },
    {
      name: "Bree Van de Kamp",
      phone: "2345678901",
      email: "bree@gmail.com",
      image: "images/bree.jpg",
    },
    {
      name: "Gabrielle Solis",
      phone: "3456789012",
      email: "gabrielle@gmail.com",
      image: "images/Gabrielle.jpeg",
    },
    {
      name: "Lynette Scavo",
      phone: "4567890123",
      email: "lynette@gmail.com",
      image: "images/lennetScavo.jpg",
    },
  ];

  /*******************************************************************************************************************************************************/
  //                                                             contact info + edit  
  // the information pop up for every contact : 
  const contactList = document.getElementById("contactList");
  const popup = document.getElementById("details-popup");
  const popupName = document.getElementById("popup-name");
  const popupPhone = document.getElementById("popup-phone");
  const popupEmail = document.getElementById("popup-email");
  const closePopup = document.getElementById("close-popup");


  // the edit pop up for each contact ( when clicking the pen ) : 
  const editPopup = document.getElementById("edit-popup");
  const editNameInput = document.getElementById("edit-name");
  const editPhoneInput = document.getElementById("edit-phone");
  const editEmailInput = document.getElementById("edit-email");
  const saveEditBtn = document.getElementById("save-edit");
  const closeEditBtn = document.getElementById("close-edit-popup");


  /*******************************************************************************************************************************************************/
///                                           defining the MyFunction so i can be able to filter ולשאר הנלווים

function MyFunction(contactArray = contacts) {
  contactList.innerHTML = "";

  // counter of how many contacts are displayed 
  updatePeopleCount(contactArray.length);

  //the alphabeticak order when showing the contacts with each activity 
  const sortedContacts = [...contactArray].sort((a, b) => a.name.localeCompare(b.name));

  sortedContacts.forEach((contact, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <div class="Display">
        <img src="${contact.image}" alt="${contact.name}">
        <span class="Name">${contact.name}</span>
      </div>
      <div class="List-icons">
        <button class="details-btn" title="Details">&#x2755;</button>
        <button class="edit-btn" title="Edit">&#9998;</button>
        <button class="delete-btn" title="Delete">&#x1F5D1;</button>
      </div>`;
    contactList.appendChild(li);

      // Details popup
      li.querySelector(".details-btn").addEventListener("click", () => {
        popupName.textContent = contact.name;
        popupPhone.textContent = contact.phone;
        popupEmail.textContent = contact.email;
        popup.style.display = "flex";
      });

      // Edit popup
      li.querySelector(".edit-btn").addEventListener("click", () => {
        currentEditIndex = index;
        editNameInput.value = contact.name;
        editPhoneInput.value = contact.phone;
        editEmailInput.value = contact.email;
        editPopup.style.display = "flex";
      });

      // Delete button
      li.querySelector(".delete-btn").addEventListener("click", () => {
        contacts.splice(index, 1);
        MyFunction();
      });
    });
  }

  // Save edits
  saveEditBtn.addEventListener("click", () => {
    if (currentEditIndex !== null) {
      contacts[currentEditIndex].name = editNameInput.value;
      contacts[currentEditIndex].phone = editPhoneInput.value;
      contacts[currentEditIndex].email = editEmailInput.value;
      MyFunction();
      editPopup.style.display = "none";
      currentEditIndex = null;
    }
  });

/*******************************************************************************************************************************************************/
//                                                                   add new contact pop up 
// Elements for the add contact popup
const addPopup = document.getElementById("add-popup");
const addBtn = document.getElementById("add-btn");
const saveAddBtn = document.getElementById("save-add");
const closeAddBtn = document.getElementById("close-add-popup");
const addNameInput = document.getElementById("add-name");
const addPhoneInput = document.getElementById("add-phone");
const addEmailInput = document.getElementById("add-email");
const addImageInput = document.getElementById("add-image");

//notes to each steps: 
// showing the add contact popup (basically when clicking on the plus sign )
addBtn.addEventListener("click", () => {
  // Clear old input values
  addNameInput.value = "";
  addPhoneInput.value = "";
  addEmailInput.value = "";
  addImageInput.value = "";
  addPopup.style.display = "flex";
});


// adding the new contact after filling the information making the input for each element the value the user inputs 
saveAddBtn.addEventListener("click", () => {
  const newContact = {
    name: addNameInput.value,
    phone: addPhoneInput.value,
    email: addEmailInput.value,
    image: addImageInput.value || "images/default.jpg", // fallback image
  };

  //Add the new contact to the array using push 
  contacts.push(newContact);

  //Refresh the list using the myFunction
  MyFunction();

  //Closing  the popup
  addPopup.style.display = "none";
});
// the cancle button for the add contact popup 
closeAddBtn.addEventListener("click", (e) => {
  e.preventDefault();
  addPopup.style.display = "none";
});

/*******************************************************************************************************************************************************/
  const deleteAllBtn = document.getElementById("deletAlluser-btn");
  let currentEditIndex = null;
/***************************************************************************************************************************************************** */
//dfining the people counting function
function updatePeopleCount(count) {
  const peopleCountElement = document.getElementById("people-count");
  peopleCountElement.textContent = `${count} ${count === 1 ? "person" : "people"}`;
}
/*****************************************************************************************************************************************************/
  // Close "edit" popup
  closeEditBtn.addEventListener("click", (e) => {
    e.preventDefault();
    editPopup.style.display = "none";
    currentEditIndex = null;
  });

  // Close "details" popup
  closePopup.addEventListener("click", (e) => {
    e.preventDefault();
    popup.style.display = "none";
  });

  // Delete all contacts
  deleteAllBtn.addEventListener("click", () => {
    contactList.innerHTML = "";
  });


 MyFunction();
/***********************************************************************************************************************************************************************/
//the search : filter + display 
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm)
  );
//using MyFunction function 
  MyFunction(filteredContacts);
});
});
