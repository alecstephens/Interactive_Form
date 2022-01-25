function getFocus() {
    document.getElementById('name').focus();
}
getFocus();


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
const cv = document.getElementById('cvv');
const form = document.querySelector('form');


// Form validation functions
function validateName() {
    const nameInput = nameField.value;
    
}


