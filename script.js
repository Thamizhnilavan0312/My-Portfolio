// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Contact form submit handler
function handleSubmit(event) {
  event.preventDefault();
  alert('Thank you! Your message has been received.');
  event.target.reset();
  return false;
}
