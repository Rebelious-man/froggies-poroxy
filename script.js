// Home Screen -> VPN
document.getElementById("enterBrowserBtn").addEventListener("click", () => {
    document.getElementById("homeScreen").style.display = "none";
    document.getElementById("vpnOverlay").style.display = "flex";
});

// VPN Fun Messages
const vpnMessages = [
    "Encrypting frog hops...",
    "Hiding your web footprints...",
    "Ribbit! VPN almost ready...",
    "Swamping through cyberspace..."
];

let vpnIndex = 0;
const vpnFunText = document.getElementById("vpnFunText");
setInterval(() => {
    vpnFunText.textContent = vpnMessages[vpnIndex];
    vpnIndex = (vpnIndex + 1) % vpnMessages.length;
}, 2000);

// Start Browser
document.getElementById("startBrowserBtn").addEventListener("click", () => {
    document.getElementById("vpnOverlay").style.display = "none";
    document.getElementById("browser").style.display = "block";
});

// Multi-tab Browser
let tabCount = 0;
let tabs = {};
const tabsContainer = document.getElementById("tabsContainer");
const iframeContainer = document.getElementById("iframeContainer");
const newTabBtn = document.getElementById("newTabBtn");
const urlInput = document.getElementById("urlInput");
const goBtn = document.getElementById("goBtn");

// Create new tab
function createTab(url = "https://duckduckgo.com") {
    tabCount++;
    const tabId = "tab" + tabCount;

    // Tab button
    const tabButton = document.createElement("button");
    tabButton.textContent = "Tab " + tabCount;
    tabButton.id = "btn-" + tabId;
    tabButton.addEventListener("click", () => switchTab(tabId));
    tabsContainer.appendChild(tabButton);

    // Iframe
    const iframe = document.createElement("iframe");
    iframe.src = url;
    iframe.id = tabId;
    iframe.style.display = "none";
    iframeContainer.appendChild(iframe);

    tabs[tabId] = iframe;

    switchTab(tabId);
}

// Switch tabs
function switchTab(tabId) {
    Object.keys(tabs).forEach(id => {
        tabs[id].style.display = id===tabId?"block":"none";
        document.getElementById("btn-"+id).style.background = id===tabId?"#fffa65":"";
    });
}

// Go button
goBtn.addEventListener("click", () => {
    const activeTabId = Object.keys(tabs).find(id => tabs[id].style.display==="block");
    if (!activeTabId) return;
    let url = urlInput.value.trim();
    if (!/^https?:\/\//i.test(url)) url = "https://"+url;
    tabs[activeTabId].src = url;
});

// New tab button
newTabBtn.addEventListener("click", ()=>createTab());

// Initialize first tab
createTab();

// Preload buttons on home screen
document.querySelectorAll(".preload-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        createTab(btn.dataset.url);
        document.getElementById("homeScreen").style.display = "none";
        document.getElementById("browser").style.display = "block";
    });
});
