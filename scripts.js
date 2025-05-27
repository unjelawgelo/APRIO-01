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

// Toggle content function
function toggleContent(button) {
    const content = button.nextElementSibling;
    const isExpanded = content.style.display === 'block';
    
    if (isExpanded) {
        content.style.display = 'none';
        button.textContent = 'Show More';
    } else {
        content.style.display = 'block';
        button.textContent = 'Show Less';
    }
}

// Toggle resume filename visibility
function toggleResumeFilename(event, button) {
    event.preventDefault(); // Prevent page reload
    const filenameDiv = button.nextElementSibling;
    const card = button.closest('.card');
    const isExpanded = filenameDiv.classList.contains('visible');
    
    if (isExpanded) {
        filenameDiv.classList.remove('visible');
        card.classList.remove('has-resume-spacing');
        button.textContent = 'See Resume';
    } else {
        filenameDiv.classList.add('visible');
        card.classList.add('has-resume-spacing');
        button.textContent = 'Hide Resume';
    }
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
