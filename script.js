document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Simple validation (already required in HTML but double check)
    if (name === '' || email === '' || message === '') {
        showResponse('Please fill in all fields.', true);
        return;
    }

    // Simulate sending message
    showResponse(`Thank you, ${name}! Your message has been sent.`, false);

    // Reset form
    this.reset();
});

function showResponse(msg, isError) {
    const responseMsg = document.getElementById('responseMsg');
    responseMsg.textContent = msg;
    responseMsg.style.color = isError ? 'red' : 'green';
}
