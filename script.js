document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signup-form');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');
    const errorMessage = document.getElementById('password-error');

    function validatePasswords() {
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;

        if (confirmPassword === '') {
            errorMessage.textContent = '';
            confirmPasswordInput.setCustomValidity('');
            return;
        }

        if (password !== confirmPassword) {
            errorMessage.textContent = '* Passwords do not match';
            confirmPasswordInput.setCustomValidity('Passwords do not match');
        } else {
            errorMessage.textContent = '';
            confirmPasswordInput.setCustomValidity('');
        }
    }

    passwordInput.addEventListener('input', validatePasswords);
    confirmPasswordInput.addEventListener('input', validatePasswords);

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        validatePasswords();

        if (form.checkValidity()) {
            alert('Account created successfully! (This is just a demo)');
            form.reset();
            errorMessage.textContent = '';
        } else {
            form.reportValidity();
        }
    });

    const inputs = document.querySelectorAll('.input');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });

        input.addEventListener('blur', function() {
            this.parentElement.classList.remove('focused');
        });
    });
});