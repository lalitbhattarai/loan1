let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.transform = "translateX(-" + slideIndex * 100 + "%)";
    }
    slideIndex = (slideIndex + 1) % slides.length;
    setTimeout(showSlides, 5000);
}
