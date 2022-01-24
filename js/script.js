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

const activities = document.getElementById('activities');
const activitiesCost = document.getElementById('activities-cost');
let totalPrice = 0;

activities.addEventListener('change', (e) => {
    let cost = +e.target.getAttribute('data-cost');
    if(e.target.checked) {
        totalPrice += cost;
    } else {
        totalPrice -= cost;
    }
    activitiesCost.innerText = `Total: $${totalPrice}`;
});
