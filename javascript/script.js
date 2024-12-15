let slideIndex = 1;
showSlides(slideIndex);
// Function to show a specific slide
function showSlides(n) {
    let slides = document.getElementsByClassName("slides");
    let thumbnails = document.getElementsByClassName("thumbnail");
    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < thumbnails.length; i++) {
        thumbnails[i].className = thumbnails[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    thumbnails[slideIndex - 1].className += " active";
}

// Function to navigate to the next/previous slide
function changeSlide(n) {
    showSlides(slideIndex += n);
}

// Function to navigate to a specific slide
function currentSlide(n) {
    showSlides(slideIndex = n);
}