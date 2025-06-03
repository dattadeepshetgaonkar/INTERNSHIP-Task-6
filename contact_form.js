document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');
    const successMessage = document.getElementById('successMessage');

    function isValidEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(email);
    }

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        let hasError = false;
        nameError.textContent = '';
        emailError.textContent = '';
        messageError.textContent = '';
        successMessage.textContent = '';

        if (!nameInput.value.trim()) {
            nameError.textContent = 'Please enter your name.';
            hasError = true;
        }
        if (!emailInput.value.trim()) {
            emailError.textContent = 'Please enter your email address.';
            hasError = true;
        } else if (!isValidEmail(emailInput.value.trim())) {
            emailError.textContent = 'Enter a valid email address.';
            hasError = true;
        }
        if (!messageInput.value.trim()) {
            messageError.textContent = 'Please enter your message.';
            hasError = true;
        }
        if (!hasError) {
            successMessage.textContent = 'Thank you! Your message has been received.';
            form.reset();
        }
    });
}); 