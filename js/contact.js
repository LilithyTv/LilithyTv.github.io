document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    if (email.trim() && message.trim()) {
        alert('Thank you for your message. We will get back to you soon.');
        console.log('Email:', email, 'Phone:', phone, 'Message:', message);

        this.reset();
    } else {
        alert('Please fill out the email and message fields.');
    }
});
