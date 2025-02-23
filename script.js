// JavaScript to handle button click and ad behavior

// Get references to the elements
const showAdBtn = document.getElementById('showAdBtn');
const adModal = document.getElementById('adModal');
const closeAdBtn = document.getElementById('closeAdBtn');
const adsenseAd = document.getElementById('adsense-ad');

// Show the ad when the button is clicked
showAdBtn.addEventListener('click', function() {
    adsenseAd.style.display = 'block';  // Show the AdSense ad
    adModal.style.display = 'flex';     // Show the ad modal
});

// Close the ad when the "Close Ad" button is clicked
closeAdBtn.addEventListener('click', function() {
    adsenseAd.style.display = 'none';   // Hide the AdSense ad
    adModal.style.display = 'none';     // Hide the ad modal
});