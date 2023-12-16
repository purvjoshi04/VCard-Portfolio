"use strict";

// Function to toggle element classes
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

// Sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// Sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () {
  elementToggleFunc(sidebar);
});

// Contact form variables
const form = document.querySelector("[data-form]");
const formInput = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// Add event to all form input fields for validation
for (let i = 0; i < formInput.length; i++) {
  formInput[i].addEventListener("input", function () {
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
}

// Page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");
const projectItems = document.querySelectorAll("[data-filter-item]");

// Add event to all navigation links
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }
  });
}

// Filter projects based on category
const filterButtons = document.querySelectorAll("[data-filter-btn]");

filterButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const category = this.textContent.toLowerCase();
    
    projectItems.forEach((item) => {
      const itemCategory = item.dataset.category.toLowerCase();
      
      if (category === "all" || itemCategory === category) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});
