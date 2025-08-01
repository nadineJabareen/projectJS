document.addEventListener("DOMContentLoaded", () => {
  // the contact info that is shown on each popup thingy 
const contacts = [
    {
      name: "Susan Mayers",
      phone: "1234567890",
      email: "susan@gmail.com",
      image: "images/susan.jpg"
    },
    {
      name: "Bree Van de Kamp",
      phone: "2345678901",
      email: "bree@gmail.com",
      image: "images/bree.jpg"

    },
    {
      name: "Gabrielle Solis",
      phone: "3456789012",
      email: "gabrielle@gmail.com",
      image: "images/gabrielle.jpeg"

      
    },
    {
      name: "Lynette Scavo",
      phone: "4567890123",
      email: "lynette@gmail.com",
      image: "images/lennetScavo.jpg"
      
    }
  ];


const contactList = document.getElementById("contactList");

contacts.forEach((contact, index) => {
  const li = document.createElement("li");
  li.innerHTML = `
    <div class="Display">
      <img src="${contact.image}" alt="${contact.name}">
      <span class="Name">${contact.name}</span>
    </div>
    <div class="List-icons">
      <button class="details-btn" data-index="${index}" title="Details">&#x2755;</button>
      <button class="edit-btn" data-index="${index}" title="Edit">&#9998;</button>
      <button class="delete-btn" data-index="${index}" title="Delete">&#x1F5D1;</button>
    </div>
  `;
  contactList.appendChild(li);
});

   // for the edit pen part for each contact 
const editBtn = li.querySelector(".edit-btn");
editBtn.addEventListener("click", () => {
  currentEditIndex = index; // for each contact bieng edited 

  // Fill the popup with that contact's info
  editNameInput.value = contact.name;
  editPhoneInput.value = contact.phone;
  editEmailInput.value = contact.email;

  // Show the popup
  editPopup.style.display = "flex";
});
});


// Get popup elements
const popup = document.getElementById("details-popup");
const popupName = document.getElementById("popup-name");
const popupPhone = document.getElementById("popup-phone");
const popupEmail = document.getElementById("popup-email");
const closePopup = document.getElementById("close-popup");

// Adding the  click listeners to each "Details" button
document.querySelectorAll(".details-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const index = e.currentTarget.dataset.index;
    const contact = contacts[index];

    // matching each  popup with the contact information
    popupName.textContent = contact.name;
    popupPhone.textContent = contact.phone;
    popupEmail.textContent = contact.email;

    // Show the popup
    popup.style.display = "flex";
  });
});

// Close button
closePopup.addEventListener("click", (e) => {
  e.preventDefault();
  popup.style.display = "none";
});

/*********************************************************************************************************************************** */
//the delete all button js : 
const deleteAllBtn = document.getElementById("deletAlluser-btn");

deleteAllBtn.addEventListener("click", () => {
  contactList.innerHTML = ""; // This clears all the contacts from the screen
});

});
