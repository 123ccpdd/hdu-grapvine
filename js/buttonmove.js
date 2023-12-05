function getRandomPosition() {
    var constrainedWidth = 800; // Adjust 100 based on link width
    var constrainedHeight = 400; // Adjust 40 based on link height

    var randomX = Math.floor(Math.random() * constrainedWidth);
    var randomY = Math.floor(Math.random() * constrainedHeight);

    return { x: randomX, y: randomY };
}

var moveableLink = document.getElementById('moveableLink');
var isHovered = false;

function moveLinkRandomly() {
    if (!isHovered) {
        var newPosition = getRandomPosition();

        // Use transform to smoothly move the link
        moveableLink.style.transform = `translate(${newPosition.x}px, ${newPosition.y}px)`;
    }
}

// Move the link randomly when the page loads
moveLinkRandomly();

// Set up an interval to move the link every 2000 milliseconds (2 seconds)
setInterval(moveLinkRandomly, 2000);

// Add mouseover and mouseout event listeners
moveableLink.addEventListener('mouseover', function () {
    isHovered = true;
});

moveableLink.addEventListener('mouseout', function () {
    isHovered = false;
});

// Update position on window resize
window.addEventListener('resize', moveLinkRandomly);