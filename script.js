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

    // Add event listeners for real-time validation
    passwordInput.addEventListener('input', validatePasswords);
    confirmPasswordInput.addEventListener('input', validatePasswords);

    // Handle form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Validate passwords one more time
        validatePasswords();

        // Check if form is valid
        if (form.checkValidity()) {
            // Here you would typically send the data to a server
            alert('Account created successfully! (This is just a demo)');
            form.reset();
            errorMessage.textContent = '';
        } else {
            // Show validation errors
            form.reportValidity();
        }
    });

    // Add focus/blur effects for better UX
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