function setBackgroundVideo() {
    const videoUrl = '/assets/bg.mp4';
    const videoElement = document.createElement('video');

    videoElement.src = videoUrl;
    videoElement.loop = true;
    videoElement.muted = true;
    videoElement.volume = .2;
    videoElement.autoplay = true;
    videoElement.style.position = 'fixed';
    videoElement.style.top = '0';
    videoElement.style.left = '0';
    videoElement.style.width = '100%';
    videoElement.style.height = '100%';
    videoElement.style.objectFit = 'fill';
    videoElement.style.zIndex = '-1';

    let audio = new Audio('assets/bg.mp3');

    audio.play()
    audio.volume = .5;
    audio.loop = true;

    document.body.appendChild(videoElement);
}

let currentIndex = 0;
let direction = 1;
const typingContainer = document.querySelector(".user-status");
const textToType = typingContainer.textContent;

function typeText() {
    typingContainer.textContent = textToType.slice(0, currentIndex);
    currentIndex += direction;

    if (currentIndex > textToType.length || currentIndex < 0) {
        // Wait for 2 seconds after finishing typing or de-typing
        setTimeout(() => {
            direction *= -1;
            // Start the typing or de-typing animation again
            setTimeout(typeText, 100);
        }, 2000);
    } else {
        // Continue typing or de-typing animation
        setTimeout(typeText, 100);
    }
}

function openUrl(url){
    const newTabUrl = 'https://www.' + url;

      // Open the new tab
    window.open(newTabUrl, '_blank');
}

// Start the typing animation
typeText();
// Start the typing animation

// Call the function to set the background video
setBackgroundVideo();