const observerOptions = {
    root: null,
    rootMargin: '100px',
    threshold: 0
};

const videoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const video = entry.target;

        if (!entry.isIntersecting && !video.paused) {
            video.pause();
        }
    });
}, observerOptions);

const observeVideos = () => {
    const videos = document.querySelectorAll('video');
    videos.forEach(video => videoObserver.observe(video));
};

observeVideos();

const autoClosePopup = () => {
    const closeButton = document.querySelector('[aria-label="Close Video and scroll"]')
    if (closeButton) {
        closeButton.click();
    }
};

setInterval(autoClosePopup, 100)