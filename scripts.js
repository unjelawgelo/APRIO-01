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


 


// Toggle the preview image when clicking the button
function togglePreview(event) {
    event.preventDefault(); // Prevent the default anchor action

    const previewContainer = document.getElementById("previewContainer");
    const toggleButton = event.target; // The button that was clicked
    
    // Toggle the display of the preview container (show/hide the image)
    if (previewContainer.style.display === "none") {
        previewContainer.style.display = "block"; // Show the image
        // Change button text after click
        toggleButton.innerHTML = "Tap any image to See More...";
    } else {
        previewContainer.style.display = "none"; // Hide the image
        // Reset button text if preview is closed
        toggleButton.innerHTML = "Do not click!";
    }

    // Make the font smaller
    toggleButton.style.fontSize = "0.8rem";  // Adjust the font size as needed

    // Add event listeners to each image in the preview container for notification
    const previewImages = document.querySelectorAll(".preview-container img");
    previewImages.forEach(image => {
        image.addEventListener("click", () => {
            showNotification();
        });
    });
}


function scrollToCard7() {
    // Find the card7 element by its id and scroll it into view
    const card7 = document.getElementById('card7');
    const buttonInCard7 = card7.querySelector('.button'); // Find the button in Card 7

    // Scroll to Card 7
    card7.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });

    // Add the blinking class to make the button blink
    buttonInCard7.classList.add('blinking');

    // Optional: Remove the blinking class after animation is complete (2 iterations)
    setTimeout(() => {
        buttonInCard7.classList.remove('blinking');
    }, 2000); // After 2 seconds (2 iterations of the 1s animation)
}
