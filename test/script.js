const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll('.circle');

circles.forEach(function (circle, index) {
    circle.x = 0;
    circle.y = 0;

    // Add an offset to create a circular pattern
    const angle = (index / circles.length) * 2 * Math.PI;
    const radius = 50; // Adjust the radius as needed
    circle.offsetX = radius * Math.cos(angle);
    circle.offsetY = radius * Math.sin(angle);
});

window.addEventListener('mousemove', function(e) {
    coords.x = e.clientX;
    coords.y = e.clientY;

    circles.forEach(function (circle) {
        // Calculate the new position based on the cursor and circle's offset
        const newX = coords.x + circle.offsetX;
        const newY = coords.y + circle.offsetY;

        // Set the circle's position
        circle.style.left = newX + "px";
        circle.style.top = newY + "px";
    });
});