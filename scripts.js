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


// Open Modal
function openModal(event) {
    event.preventDefault(); // Prevent the default anchor action
    const modal = document.getElementById("videoModal");
    const video = document.getElementById("modalVideo");
    modal.style.display = "flex"; // Use flex to center the modal
    video.play(); // Start playing the video
}

function closeModal() {
    const modal = document.getElementById("videoModal");
    const video = document.getElementById("modalVideo");
    modal.style.display = "none"; // Hide the modal
    video.pause(); // Pause the video
    video.currentTime = 0; // Reset the video to the beginning
}

// Close modal on clicking outside of the modal content
window.onclick = function(event) {
    const modal = document.getElementById("videoModal");
    if (event.target === modal) {
        closeModal();
    }
}

// Initialize modal state on page load
window.onload = function() {
    const modal = document.getElementById("videoModal");
    modal.style.display = "none"; // Ensure modal is hidden on load
}
