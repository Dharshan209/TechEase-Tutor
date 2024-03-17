// Get the dark mode button element
const darkModeButton = document.getElementById("darkModeButton");

// Add event listener to toggle dark mode on button click
darkModeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
document.getElementById("quizButton").addEventListener("click", function() {
    window.location.href = "quiz.html"; // Redirect to the quiz page
  });
  // Initialize YouTube player
let player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('videoPlayer', {
    height: '315',
    width: '560',
    videoId: 'Vztjbm6HA58', // Replace with your YouTube video ID
    playerVars: {
      autoplay: 1,
      controls: 1,
      enablejsapi: 1,
      modestbranding: 1,
      rel: 0,
    },
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange,
    },
  });
}

// Function to execute when the player is ready
function onPlayerReady(event) {
  // Do something when the player is ready
}

// Function to execute when the player's state changes
function onPlayerStateChange(event) {
  if (event.data === YT.PlayerState.PLAYING) {
    // YouTube video is playing
    // Implement the listening detection logic here
  }
}