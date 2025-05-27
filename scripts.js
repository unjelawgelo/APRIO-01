        // Constants
const FROG_ANIMATION_DURATION = 1000;
const FROG_SPAWN_DELAY = 100;
const MAX_FROGS = 20;

// Theme Toggle with rate limiting
let themeToggleCooldown = false;

function toggleTheme() {
    if (themeToggleCooldown) return;
    
    const body = document.body;
    body.classList.toggle("dark-mode");
    
    // Update ARIA attributes
    const toggleSwitch = document.querySelector('.toggle-switch');
    toggleSwitch.setAttribute('aria-checked', body.classList.contains('dark-mode'));
    
    // Set cooldown
    themeToggleCooldown = true;
    setTimeout(() => {
        themeToggleCooldown = false;
    }, 500);
}

// Debounced search functionality
let searchTimeout;

function searchResources() {
    clearTimeout(searchTimeout);
    
    searchTimeout = setTimeout(() => {
        const input = document.getElementById("searchInput").value.toLowerCase();
        const cards = document.querySelectorAll(".card");
        
        cards.forEach(card => {
            const title = card.getAttribute("data-title").toLowerCase();
            const content = card.textContent.toLowerCase(); // Use textContent for better performance
            
            const shouldShow = title.includes(input) || content.includes(input);
            card.style.display = shouldShow ? "block" : "none";
            
            // Update ARIA attributes
            card.setAttribute('aria-hidden', !shouldShow);
        });
    }, 300);
}

// Toggle content with ARIA updates
function toggleContent(button) {
    const contentId = button.getAttribute('aria-controls');
    const content = document.getElementById(contentId);
    const isExpanded = content.hasAttribute('hidden');
    
    if (isExpanded) {
        content.removeAttribute('hidden');
        button.setAttribute('aria-expanded', 'true');
        button.textContent = 'Show Less';
    } else {
        content.setAttribute('hidden', '');
        button.setAttribute('aria-expanded', 'false');
        button.textContent = 'Show More';
    }
}

// Toggle resume filename with ARIA updates
function toggleResumeFilename(event, button) {
    event.preventDefault();
    
    const filenameDiv = document.getElementById(button.getAttribute('aria-controls'));
    const card = button.closest('.card');
    const isExpanded = filenameDiv.hasAttribute('hidden');
    
    if (isExpanded) {
        filenameDiv.removeAttribute('hidden');
        button.setAttribute('aria-expanded', 'true');
        button.textContent = 'Hide Resume';
    } else {
        filenameDiv.setAttribute('hidden', '');
        button.setAttribute('aria-expanded', 'false');
        button.textContent = 'See Resume';
    }
}

// Rate-limited frog animation
let lastFrogTime = 0;
const FROG_RATE_LIMIT = 5000; // 5 seconds between frog animations

function floodWithFrogs() {
    const now = Date.now();
    if (now - lastFrogTime < FROG_RATE_LIMIT) return;
    
    const frogIcon = document.getElementById("frogIcon");
    
    // Change the icon to a frog face
    frogIcon.innerHTML = '<span class="frog-face">🐸</span>';
    
    for (let i = 0; i < MAX_FROGS; i++) {
        setTimeout(() => {
            const frog = document.createElement("div");
            frog.className = "frog";
            frog.innerHTML = "🐸";
            document.body.appendChild(frog);
            
            // Randomize the horizontal position
            frog.style.left = Math.random() * window.innerWidth + 'px';
            
            // Remove the frog after the animation
            setTimeout(() => {
                frog.remove();
            }, FROG_ANIMATION_DURATION);
        }, i * FROG_SPAWN_DELAY);
    }
    
    // Change the icon back after a delay
    setTimeout(() => {
        frogIcon.innerHTML = '<i class="fas fa-frog"></i>';
    }, 2000);
    
    lastFrogTime = now;
}
