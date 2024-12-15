let count = 0; // Initial counter value
const counterElement = document.getElementById("counter");

function updateCounter() {
    counterElement.textContent ='0'+ count; // Update the counter display
    count = (count + 1) % 10; // Increment and reset to 0 after 9
}

// Call `updateCounter` every 1 second
setInterval(updateCounter, 1000);
