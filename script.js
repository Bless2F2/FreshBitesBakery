// Product Search/filter for Bakery
document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('searchBox');
  if (searchInput) { 
    searchInput.addEventListener('input', function(e) {
      let filter = e.target.value.toLowerCase();
      document.querySelectorAll('.product-card').forEach(item => {
        let text = item.textContent.toLowerCase();
        item.style.display = text.includes(filter) ? 'block' : 'none';
      });
    });
  }
});

    // lightbox gallery
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const galleryImages = document.querySelectorAll('.product-card img');

  if (lightbox && lightboxImg && galleryImages.length > 0) {
    galleryImages.forEach(img => {
      img.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
      });
    });

    lightbox.addEventListener('click', () => {
      lightbox.style.display = 'none';
    });
  }

  // Contact Form
  const contactForm = document.getElementById('contactForm');
const successMsg = document.getElementById('successMsg');

if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    successMsg.style.display = 'block';
    successMsg.textContent = `Thanks ${name}! We will get back to you soon `; 
    contactForm.reset();
    setTimeout(() => successMsg.style.display = 'none', 4000);
  });
}

  // ENQUIRY FORM VALIDATION - Only runs if form exists
  const enquiryForm = document.getElementById('enquiryForm');
  if (enquiryForm) {
    enquiryForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      
      if (name.length < 2) {
        alert('Please enter your full name - minimum 2 characters');
        return;
      }
      
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        alert('Please enter a valid email address');
        return;
      }
      
      if (message.length < 10) {
        alert('Please enter a message with at least 10 characters');
        return;
      }
      
      alert('Thank you ' + name + '! Fresh Bites Bakery will contact you soon.');
      enquiryForm.reset();
    });
  }
