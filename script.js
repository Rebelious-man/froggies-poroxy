// Fun random loading text
const funMessages = [
    "Loading the loading...",
    "Ribbit! Almost there...",
    "Froggies hopping on your search...",
    "Swamping through the web...",
    "Hang tight! The frogs are surfing..."
];

let index = 0;
const funText = document.getElementById("funText");

setInterval(() => {
    funText.textContent = funMessages[index];
    index = (index + 1) % funMessages.length;
}, 2000);

// Simulate loading screen
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('loadingScreen').style.display = 'none';
        document.getElementById('mainContent').style.display = 'block';
    }, 3000); // 3 seconds loading
});
