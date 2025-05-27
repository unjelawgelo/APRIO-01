        // Toggle theme
function toggleTheme() {
    document.body.classList.toggle("dark-mode");
}

// Search functionality
function searchResources() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        const title = card.getAttribute("data-title").toLowerCase();
        const content = card.innerText.toLowerCase(); // Get all text content of the card
        // Check if the input is included in either the title or content
        if (title.includes(input) || content.includes(input)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

// Flood with frogs function
function floodWithFrogs() {
    const totalFrogs = 20; // Total number of frogs to spawn
    const frogIcon = document.getElementById("frogIcon");

    // Change the icon to a frog face
    frogIcon.innerHTML = '<span class="frog-face">🐸</span>';

    for (let i = 0; i < totalFrogs; i++) {
        setTimeout(() => {
            const frog = document.createElement("div");
            frog.className = "frog"; // Add the frog class
            frog.innerHTML = "🐸"; // Frog emoji
            document.body.appendChild(frog);

            // Randomize the horizontal position
            frog.style.left = Math.random() * window.innerWidth + 'px';

            // Remove the frog after the animation
            setTimeout(() => {
                frog.remove();
            }, 1000); // Adjust duration to match animation duration
        }, i * 100); // Stagger the frog appearances
    }

    // Change the icon back after a delay
    setTimeout(() => {
        frogIcon.innerHTML = '<i class="fas fa-frog"></i>';
    }, 2000); // Delay before changing icon back
}

// Video security functions
function enhanceVideoSecurity() {
    const video = document.querySelector('video');
    const container = document.querySelector('.secure-video-container');
    
    if (video && container) {
        // Prevent screen capture
        video.setAttribute('capture', 'none');
        video.setAttribute('controlsList', 'nodownload');
        
        // Add event listeners for security
        container.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            return false;
        });
        
        container.addEventListener('keydown', (e) => {
            e.preventDefault();
            return false;
        });
        
        container.addEventListener('mousedown', (e) => {
            e.preventDefault();
            return false;
        });
        
        // Add overlay to prevent screen capture
        const overlay = document.createElement('div');
        overlay.style.position = 'absolute';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.pointerEvents = 'none';
        container.appendChild(overlay);
    }
}

// Initialize security when page loads
document.addEventListener('DOMContentLoaded', () => {
    enhanceVideoSecurity();
});

// Add security check on window resize
window.addEventListener('resize', () => {
    enhanceVideoSecurity();
});
