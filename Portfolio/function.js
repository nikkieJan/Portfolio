document.addEventListener('DOMContentLoaded', function() {
    // Contact form submission
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        console.log('Form submitted:', { name, email, message });
        
        form.reset();
        
        alert('Thank you for your message! I\'ll get back to you soon.');
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

   
});
 // Slideshow functionality
 function startSlideshows() {
    const slideshows = document.querySelectorAll('.slideshow');
    
    slideshows.forEach(slideshow => {
        const images = slideshow.querySelectorAll('img');
        let currentIndex = 0;
        
        function showNextImage() {
            images[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % images.length;
            images[currentIndex].classList.add('active');
        }
        
        setInterval(showNextImage, 4300); // Change image every 1.5 seconds
    });
}


// Start slideshows
startSlideshows();