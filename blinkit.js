const searchInput = document.getElementById('search-input');
const phrases = ["Search 'Butter'", "Search 'Milk'", "Search 'Chocolate'","search 'eggs'","search 'rice'","search 'curd'","search 'chips'"];
let currentPhraseIndex = 0;

function animateSearchPlaceholder() {
  searchInput.classList.add('placeholder-up');
  setTimeout(() => {
    searchInput.setAttribute('placeholder', phrases[currentPhraseIndex]);
    searchInput.classList.remove('placeholder-up');
    currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
  }, 500); // Adjust the delay to match the transition duration
}

// Trigger the animation every 2 seconds (adjust as needed)
setInterval(animateSearchPlaceholder, 1500);
