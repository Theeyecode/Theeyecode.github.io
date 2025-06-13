// Initialize EmailJS with your Public Key
emailjs.init("fI_zwNG12vU7It9zf"); // Replace with your EmailJS Public Key

// Form submission handling
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Send email via EmailJS
  emailjs.send("service_dc0h1mq", "template_hopouep", {
    from_name: name,
    from_email: email,
    message: message
  })
  .then(() => {
    alert('Message sent successfully!');
    document.getElementById('contact-form').reset();
  }, (error) => {
    console.error('Failed to send message:', error);
    alert('Failed to send message. Please try again later.');
  });
});

// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});