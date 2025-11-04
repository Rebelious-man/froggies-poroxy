const overlay = document.getElementById('overlay');
const loadingText = document.getElementById('loading-text');
const goBtn = document.getElementById('go-btn');
const urlInput = document.getElementById('url-input');
const iframeContainer = document.getElementById('iframe-container');
const mainIframe = document.getElementById('main-iframe');
const newTabBtn = document.getElementById('new-tab-btn');
const tabs = document.getElementById('tabs');

let tabCount = 1;
let activeTabId = 'tab1';

function showOverlay() {
    const messages = [
        "Loading the froggiest proxy...",
        "Hopping through the web...",
        "Eating virtual flies...",
        "Croak! Almost there...",
        "Froggies are dancing!"
    ];
    let i = 0;
    loadingText.textContent = messages[i];
    overlay.style.display = 'flex';
    const interval = setInterval(() => {
        i = (i + 1) % messages.length;
        loadingText.textContent = messages[i];
    }, 1000);
    return interval;
}

function hideOverlay(interval) {
    clearInterval(interval);
    overlay.style.display = 'none';
}

goBtn.addEventListener('click', () => {
    const url = urlInput.value.trim();
    if (!url) return;
    const interval = showOverlay();
    mainIframe.src = url;
    mainIframe.onload = () => hideOverlay(interval);
});

newTabBtn.addEventListener('click', () => {
    tabCount++;
    const tabId = 'tab' + tabCount;
    const newTabBtn = document.createElement('div');
    newTabBtn.classList.add('tab');
    newTabBtn.id = tabId;
    newTabBtn.textContent = `Tab ${tabCount}`;
    tabs.appendChild(newTabBtn);

    // Switch to new tab when clicked
    newTabBtn.addEventListener('click', () => {
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        newTabBtn.classList.add('active');
        activeTabId = tabId;
        mainIframe.src = 'https://duckduckgo.com';
    });

    // Auto activate new tab
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    newTabBtn.classList.add('active');
    activeTabId = tabId;
    mainIframe.src = 'https://duckduckgo.com';
});

// Initial overlay on page load
window.addEventListener('load', () => {
    const interval = showOverlay();
    setTimeout(() => hideOverlay(interval), 2000);
});
