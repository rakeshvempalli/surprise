// DOM Elements
const openingScene = document.getElementById('openingScene');
const loveJourney = document.getElementById('loveJourney');
const cakeSection = document.getElementById('cakeSection');
const prayerSection = document.getElementById('prayerSection');
const surpriseSection = document.getElementById('surpriseSection');
const endingScene = document.getElementById('endingScene');
const startJourneyBtn = document.getElementById('startJourney');
const nextSectionBtn = document.getElementById('nextSectionBtn');
const cutCakeBtn = document.getElementById('cutCakeBtn');
const nextToSurpriseBtn = document.getElementById('nextToSurpriseBtn');
const viewGalleryBtn = document.getElementById('viewGalleryBtn');
const finalMessageBtn = document.getElementById('finalMessageBtn');
const replayBtn = document.getElementById('replayBtn');
const musicToggle = document.getElementById('musicToggle');
const bgMusic = document.getElementById('bgMusic');
const messagesContainer = document.getElementById('messagesContainer');
const confettiContainer = document.getElementById('confettiContainer');
const photoGallery = document.getElementById('photoGallery');
const heartsContainer = document.getElementById('heartsContainer');
const floatingPetals = document.getElementById('floatingPetals');
const moon = document.getElementById('moon');
const stars = document.getElementById('stars');

// Love Messages
const loveMessages = [
    "You are my Dua come true.",
    "Every heartbeat whispers your name.",
    "I thank Allah every day for blessing me with you.",
    "Your smile lights up my world.",
    "You are my peace in this chaotic world.",
    "Loving you is the easiest thing I've ever done.",
    "You make every day feel like Eid.",
    "My love for you grows with every prayer."
];

// Initialize
let currentScene = 0;
let musicPlaying = false;

// Create floating hearts
function createHearts() {
    for (let i = 0; i < 15; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.width = `${Math.random() * 20 + 10}px`;
        heart.style.height = heart.style.width;
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.top = `${Math.random() * 100}%`;
        heart.style.animationDuration = `${Math.random() * 3 + 3}s`;
        heart.style.animationDelay = `${Math.random() * 2}s`;
        heartsContainer.appendChild(heart);
    }
}

// Create falling petals
function createPetals() {
    for (let i = 0; i < 20; i++) {
        const petal = document.createElement('div');
        petal.classList.add('petal');
        petal.style.width = `${Math.random() * 20 + 10}px`;
        petal.style.height = `${Math.random() * 15 + 5}px`;
        petal.style.left = `${Math.random() * 100}%`;
        petal.style.animationDuration = `${Math.random() * 5 + 5}s`;
        petal.style.animationDelay = `${Math.random() * 3}s`;
        floatingPetals.appendChild(petal);
    }
}

// Create confetti
function createConfetti() {
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.backgroundColor = getRandomColor();
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
        confetti.style.animationDelay = `${Math.random() * 0.5}s`;
        confetti.style.width = `${Math.random() * 8 + 5}px`;
        confetti.style.height = `${Math.random() * 8 + 5}px`;
        confettiContainer.appendChild(confetti);
    }
}

// Create stars
function createStars() {
    for (let i = 0; i < 50; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.width = `${Math.random() * 6 + 3}px`;
        star.style.height = star.style.width;
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDuration = `${Math.random() * 2 + 1}s`;
        star.style.animationDelay = `${Math.random() * 2}s`;
        stars.appendChild(star);
    }
}

// Get random color for confetti
function getRandomColor() {
    const colors = ['#ff6b81', '#ff4757', '#ff7f50', '#ff6348', '#ffa502', '#eccc68', '#2ed573', '#1dd1a1', '#2e86de', '#5352ed', '#a55eea', '#fd79a8'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Typewriter effect for messages
async function typeWriter(element, text, speed = 50) {
    return new Promise((resolve) => {
        let i = 0;
        const typing = setInterval(() => {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
            } else {
                clearInterval(typing);
                resolve();
            }
        }, speed);
    });
}

// Display love messages one by one
async function displayLoveMessages() {
    for (const message of loveMessages) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', 'text-2xl', 'text-rose-800', 'mb-6', 'font-medium', 'max-w-lg', 'mx-auto', 'opacity-0', 'transform', '-translate-y-4', 'transition-all', 'duration-500');
        messagesContainer.appendChild(messageDiv);
        await typeWriter(messageDiv, message);
        messageDiv.classList.remove('opacity-0', '-translate-y-4');
        await new Promise(resolve => setTimeout(resolve, 2000));
    }
    nextSectionBtn.classList.remove('hidden');
}

// Show prayer messages with delay
async function showPrayerMessages() {
    const messages = prayerSection.querySelectorAll('p');
    for (const message of messages) {
        message.classList.remove('hidden');
        await new Promise(resolve => setTimeout(resolve, 2500));
    }
    nextToSurpriseBtn.classList.remove('hidden');
}

// Initialize scenes
function init() {
    createHearts();
    createPetals();
    createStars();
}

// Event Listeners
startJourneyBtn.addEventListener('click', async () => {
    openingScene.classList.add('hidden');
    loveJourney.classList.remove('hidden');
    await displayLoveMessages();
});

nextSectionBtn.addEventListener('click', () => {
    loveJourney.classList.add('hidden');
    cakeSection.classList.remove('hidden');
});

cutCakeBtn.addEventListener('click', () => {
    createConfetti();
    cutCakeBtn.disabled = true;
    cutCakeBtn.textContent = 'Happy Birthday!';
    cutCakeBtn.classList.remove('bg-rose-600', 'hover:bg-rose-700');
    cutCakeBtn.classList.add('bg-amber-400', 'hover:bg-amber-500');
    
    setTimeout(() => {
        cakeSection.classList.add('hidden');
        prayerSection.classList.remove('hidden');
        showPrayerMessages();
    }, 3000);
});

nextToSurpriseBtn.addEventListener('click', () => {
    prayerSection.classList.add('hidden');
    surpriseSection.classList.remove('hidden');
});

viewGalleryBtn.addEventListener('click', () => {
    photoGallery.classList.toggle('hidden');
    viewGalleryBtn.innerHTML = photoGallery.classList.contains('hidden') 
        ? 'View Our Memories <i data-feather="image"></i>' 
        : 'Hide Memories <i data-feather="eye-off"></i>';
    feather.replace();
});

finalMessageBtn.addEventListener('click', () => {
    surpriseSection.classList.add('hidden');
    endingScene.classList.remove('hidden');
});

replayBtn.addEventListener('click', () => {
    location.reload();
});

musicToggle.addEventListener('click', () => {
    if (musicPlaying) {
        bgMusic.pause();
        musicToggle.innerHTML = '<i data-feather="music"></i>';
    } else {
        bgMusic.play();
        musicToggle.innerHTML = '<i data-feather="pause"></i>';
    }
    musicPlaying = !musicPlaying;
    feather.replace();
});

// Gift box surprises
document.querySelectorAll('.gift-box').forEach((box, index) => {
    box.addEventListener('click', () => {
        const message = box.querySelector('p');
        if (message.classList.contains('hidden')) {
            message.classList.remove('hidden');
            box.querySelector('i').classList.add('hidden');
        }
    });
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    init();
    feather.replace();
    
    // Auto-play music on iOS requires user interaction
    document.body.addEventListener('click', () => {
        if (!musicPlaying) {
            bgMusic.play().catch(e => console.log("Auto-play prevented"));
            musicPlaying = true;
            musicToggle.innerHTML = '<i data-feather="pause"></i>';
            feather.replace();
        }
    }, { once: true });
});
