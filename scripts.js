        // Constants
const FROG_ANIMATION_DURATION = 1000;
const FROG_SPAWN_DELAY = 100;
const MAX_FROGS = 20;

// Theme Toggle with rate limiting
let themeToggleCooldown = false;

function toggleTheme() {
    const body = document.body;
    body.classList.toggle("dark-mode");
    
    // Update ARIA attributes
    const toggleSwitch = document.querySelector('.toggle-switch');
    toggleSwitch.setAttribute('aria-checked', body.classList.contains('dark-mode'));
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

// Frog animation without rate limiting
function floodWithFrogs() {
    const frogIcon = document.getElementById("frogIcon");
    
    // Change the icon to a frog face
    frogIcon.innerHTML = '<span class="frog-face">🐸</span>';
    
    for (let i = 0; i < MAX_FROGS; i++) {
        setTimeout(() => {
            const frog = document.createElement("div");
            frog.className = "frog";
            frog.innerHTML = '<span class="frog-face">🐸</span>';
            document.body.appendChild(frog);
            
            // Animate frog
            frog.style.left = Math.random() * (window.innerWidth - 40) + 'px';
            frog.style.top = Math.random() * (window.innerHeight - 40) + 'px';
            frog.style.transform = `scale(${Math.random() * 0.5 + 0.5}) rotate(${Math.random() * 360}deg)`;
            
            // Remove frog after animation
            setTimeout(() => frog.remove(), FROG_ANIMATION_DURATION);
        }, i * FROG_SPAWN_DELAY);
    }
    
    // Change the icon back after a delay
    setTimeout(() => {
        frogIcon.innerHTML = '<i class="fas fa-frog"></i>';
    }, 2000);
}
