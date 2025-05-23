'use strict';



const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

const themeToggleBtn = document.querySelector('[data-theme-toggle]');

const savedTheme = localStorage.getItem('theme');
console.log('Saved theme from localStorage:', savedTheme);

if (savedTheme === 'dark') {
  document.body.classList.add('dark-theme');
  document.body.classList.remove('light-theme');
} else if (savedTheme === 'light') {
  document.body.classList.add('light-theme');
  document.body.classList.remove('dark-theme');
} else {
  console.log('No saved theme, defaulting to light-theme');
  document.body.classList.add('light-theme');
}

themeToggleBtn.addEventListener('click', function () {
  if (document.body.classList.contains('dark-theme')) {
    console.log('Switching to light theme');
    document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');
    localStorage.setItem('theme', 'light');
  } else {
    console.log('Switching to dark theme');
    document.body.classList.remove('light-theme');
    document.body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark');
  }
});




// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}





// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll('[data-filter-item]');
const filterButtons = document.querySelectorAll('[data-filter-btn]');
const selectButtons = document.querySelectorAll('[data-select-item]');

// Filter items based on category
const filterFunc = function(selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue === 'All') {
      filterItems[i].classList.add('active');
    } else if (filterItems[i].dataset.category === selectedValue.toLowerCase()) {
      filterItems[i].classList.add('active');
    } else {
      filterItems[i].classList.remove('active');
    }
  }
}

// Add click events to filter buttons
filterButtons.forEach((button) => {
  button.addEventListener('click', function() {
    const selectedValue = this.textContent;
    filterFunc(selectedValue);
    
    // Update active state of filter buttons
    filterButtons.forEach((btn) => btn.classList.remove('active'));
    this.classList.add('active');
  });
});

// Add click events to select items (for mobile dropdown)
selectButtons.forEach((button) => {
  button.addEventListener('click', function() {
    const selectedValue = this.textContent;
    filterFunc(selectedValue);
    
    // Update select box value
    document.querySelector('[data-selecct-value]').textContent = selectedValue;
  });
});

// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}

// Add form submit handler
form.addEventListener("submit", function (e) {
  e.preventDefault();
  
  // Get form data
  const formData = new FormData(form);
  const name = formData.get('fullname') || 'Not provided';
  const email = formData.get('email') || 'Not provided';
  const message = formData.get('message') || 'Not provided';
  
  // Create mailto link
  const mailtoLink = `mailto:pias.phacharakorn@gmail.com?subject=Portfolio Contact from ${name}&body=From: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
  
  // Open email client
  window.location.href = mailtoLink;
  
  // Optional: Reset form after submission
  form.reset();
  formBtn.setAttribute("disabled", "");
});



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
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