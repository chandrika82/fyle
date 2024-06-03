let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    const carouselInner = document.querySelector('.carousel-inner');
    carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// Hide the form popup when the DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
    closeForm(); // Call the closeForm function to hide the form initially
    // Add event listeners for the "Contact Us" button and form submission
    document.getElementById("contactButton").addEventListener("click", openForm);
    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission

        closeForm(); // Close the form after submission

        document.getElementById("successMessage").style.display = "flex"; // Show the success message

        // Hide the success message after 3 seconds
        setTimeout(function() {
            document.getElementById("successMessage").style.display = "none";
        }, 3000);
    });
});


function openForm() {
    document.getElementById("formPopup").style.display = "flex";
}

function closeForm() {
    document.getElementById("formPopup").style.display = "none";
}

function changeImage(imageName, event) {
    console.log("Image name:", imageName); // Debug log
    var image = document.getElementById("displayedImage");
    var imagePath = imageName + ".jpg";
    console.log("Image path:", imagePath); // Debug log
    image.src = imagePath;

    // Remove "clicked" class from all options
    var options = document.querySelectorAll('.option');
    options.forEach(function(option) {
        option.classList.remove('clicked');
    });

    // Add "clicked" class to the clicked option
    event.target.closest('.option').classList.add('clicked');
}
function redirectToFyle() {
    window.location.href = 'https://www.fylehq.com/';
}








