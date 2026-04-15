const password = document.getElementById('password');
const strengthBar = document.getElementById('strength-bar');
const strengthText = document.getElementById('strength-text');
const toggle = document.getElementById('toggle');

// Requirements elements
const reqs = {
    length: /.{8,}/,
    upper: /[A-Z]/,
    number: /[0-9]/,
    special: /[^A-Za-z0-9]/
};

password.addEventListener('input', () => {
    const val = password.value;
    let score = 0;

    // Check each regex
    Object.keys(reqs).forEach(key => {
        const element = document.getElementById(key);
        if (reqs[key].test(val)) {
            element.classList.add('valid');
            score++;
        } else {
            element.classList.remove('valid');
        }
    });

    // Update Strength Bar
    updateMeter(score, val.length);
});

function updateMeter(score, length) {
    if (length === 0) {
        strengthBar.style.width = '0%';
        strengthText.innerText = 'Empty';
    } else if (score <= 2) {
        strengthBar.style.width = '33%';
        strengthBar.style.backgroundColor = '#ff4d4d'; // Weak
        strengthText.innerText = 'Weak';
    } else if (score === 3) {
        strengthBar.style.width = '66%';
        strengthBar.style.backgroundColor = '#ffa500'; // Medium
        strengthText.innerText = 'Medium';
    } else if (score === 4) {
        strengthBar.style.width = '100%';
        strengthBar.style.backgroundColor = '#2ecc71'; // Strong
        strengthText.innerText = 'Strong';
    }
}

// Show/Hide Password Toggle
toggle.addEventListener('click', () => {
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    toggle.innerText = type === 'password' ? 'Show' : 'Hide';
});