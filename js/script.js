const nameField = document.getElementById('name');
nameField.focus();

const otherJobRole = document.getElementById('other-job-role');
otherJobRole.style.display = 'none';

const select = document.querySelector('select');
select.addEventListener('change', () => {
    if(select.value === 'other') {
        otherJobRole.style.display = 'block';
    } else {
        otherJobRole.style.display = 'none';
    }
});

const color = document.getElementById('color');
color.disabled = true;
const design = document.getElementById('design');

/*
  Event listener that disables or enables colors 
  depeding on what shirt design is picked
*/
design.addEventListener('change', (e) => {
    color.disabled = false;
    const colorOptions = color.children;

    for(let i = 0; i < colorOptions.length; i++) {
        let colorOptionsValue = e.target.value;
        let dataTheme = colorOptions[i].getAttribute('data-theme');

        if(colorOptionsValue === dataTheme) {
            colorOptions[i].hidden = false;
        } else {
            colorOptions[i].hidden = true;
        }
    }
});

// Grabs some elements in the activities section
const activities = document.getElementById('activities');
const activitiesCost = document.getElementById('activities-cost');
let totalPrice = 0;


// Adds up the cost of all of the activities picked
activities.addEventListener('change', (e) => {
    let cost = +e.target.getAttribute('data-cost');
    if(e.target.checked) {
        totalPrice += cost;
    } else {
        totalPrice -= cost;
    }
    activitiesCost.innerText = `Total: $${totalPrice}`;
});

// Grabs all of the elements from the payment section
const payment = document.getElementById('payment');
const creditCard = document.getElementById('credit-card');
const payPal = document.getElementById('paypal');
const bitCoin = document.getElementById('bitcoin');

payPal.style.display = 'none';
bitCoin.style.display = 'none';
payment.value = 'credit-card';

/*
  Event listener for displaying which payment option is 
  selected and will disable the ones not selected
*/
payment.addEventListener('change', (e) => {
    if(e.target.value === 'credit-card') {
        creditCard.style.display = 'block';
        payPal.style.display = 'none';
        bitCoin.style.display = 'none';
    } else if(e.target.value === 'paypal') {
        creditCard.style.display = 'none';
        payPal.style.display = 'block';
        bitCoin.style.display = 'none';
    } else if(e.target.value === 'bitcoin') {
        creditCard.style.display = 'none';
        payPal.style.display = 'none';
        bitCoin.style.display = 'block';
    }
});

// Elements for form validation
const email = document.getElementById('email');
const cardNumber = document.getElementById('cc-num');
const zip = document.getElementById('zip');
const cvv = document.getElementById('cvv');
const form = document.querySelector('form');


// Form validation functions
function validateName() {
    let nameInput = nameField.value;
    let validName = /^[a-z]/i.test(nameInput);
    if(!validName) {
        nameField.parentElement.classList.add('not-valid');
        nameField.parentElement.lastElementChild.style.display = 'block';
    } else {
        nameField.parentElement.classList.replace('not-valid', 'valid');
        return true;
    }
}

function validateEmail() {
    let emailInput = email.value;
    let validEmail = /^[^@]+@[^@.]+\.[a-z]+$/i.test(emailInput);
    if(!validEmail) {
        email.parentElement.classList.add('not-valid');
        email.parentElement.lastElementChild.style.display = 'block';
    } else {
        email.parentElement.classList.replace('not-valid', 'valid');
        return true;
    }
}

function validateActivities() {
    if(totalPrice === 0){
        activities.classList.add('not-valid');
        activities.parentElement.lastElementChild.style.display = 'block';
    } else {
        activities.classList.replace('not-valid', 'valid');
        return true;
    }
}

function validateCard() {
    let cardInput = cardNumber.value;
    let validCard = /^\d{13,16}$/.test(cardInput);
    if(!validCard) {
        cardNumber.parentElement.classList.add('not-valid');
        cardNumber.parentElement.lastElementChild.style.display = 'block';
    } else {
        cardNumber.parentElement.classList.replace('not-valid', 'valid');
        return true;
    }
}

function validateZip () {
    let zipInput = zip.value;
    let validZip = /^\d{5}$/.test(zipInput);
    if(!validZip) {
        zip.parentElement.classList.add('not-valid');
        zip.parentElement.lastElementChild.style.display = 'block';
    } else {
        zip.parentElement.classList.replace('not-valid', 'valid');
        return true;
    }
}

function validateCvv() {
    let cvvInput = cvv.value;
    let validCvv = /^\d{3}$/.test(cvvInput);
    if(!validCvv) {
        cvv.parentElement.classList.add('not-valid');
        cvv.parentElement.lastElementChild.style.display = 'block';
    } else {
        cvv.parentElement.classList.replace('not-valid', 'valid');
        return true;
    }
}

/* 
  Event listener that activates when a user submits
  the form and runs the functions that check whether
  or the not the information given is valid. Then it prevents
  the form from submitting if it is not valid.
*/
form.addEventListener('submit', (e) => {
    if(!validateName()) {
        e.preventDefault();
    }
    if(!validateEmail()) {
        e.preventDefault();
    }
    if(!validateActivities()) {
        e.preventDefault();
    }
    if(!validateCard()) {
        e.preventDefault();
    }
    if(!validateZip()) {
        e.preventDefault();
    }
    if(!validateCvv()) {
        e.preventDefault();
    }
});

// Accessibility
const checkbox = document.querySelectorAll('.activities-box input');

for(let i = 0; i < checkbox.length; i++) {
    checkbox[i].addEventListener('focus', (e) => {
        checkbox[i].parentNode.classList.add('focus');
    });
    checkbox[i].addEventListener('blur', (e) => {
        checkbox[i].parentNode.classList.remove('focus');
    });
}



