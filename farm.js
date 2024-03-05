// Simple image carousel using JavaScript
let currentIndex = 0;
const images = document.querySelectorAll('#imageCarousel img');
const totalImages = images.length;

function showImage(index) {
    images.forEach((image) => {
        image.style.display = 'none';
    });

    if (index >= totalImages) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalImages - 1;
    }

    images[currentIndex].style.display = 'block';
}

function nextImage() {
    showImage(currentIndex + 1);
    currentIndex++;
}

function prevImage() {
    showImage(currentIndex - 1);
    currentIndex--;
}

setInterval(nextImage, 2000); // Auto-advance images every 5 seconds
