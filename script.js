// Get the elements
const infoButton = document.querySelector('.info-button');
const infoBox = document.querySelector('.info-box');

// Function to show the info box
infoButton.addEventListener('mouseover', function() {
    infoBox.style.display = 'block'; // Show the info box
    infoBox.style.opacity = 1; // Fade in the info box
    infoButton.classList.add('hide-icon'); // Add class to fade out the icon
});

// Function to hide the info box when mouse leaves the info button
infoButton.addEventListener('mouseleave', function() {
    infoBox.style.opacity = 0; // Fade out the info box
    setTimeout(() => {
        infoBox.style.display = 'none'; // Hide the info box after the fade-out
    }, 0); // Delay matches the fade-out duration
    infoButton.classList.remove('hide-icon'); // Remove hide-icon to make the icon visible again
    infoButton.classList.add('show-icon'); // Add show-icon class to trigger fade-in of the icon
    setTimeout(() => {
        infoButton.classList.remove('show-icon'); // Remove show-icon after fade-in completes
    }, 0); // Delay matches the fade-in duration
});
