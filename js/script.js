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
design.addEventListener('change', () => {
    color.disabled = false;
});
console.log('test');