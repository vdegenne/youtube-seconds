const script = document.createElement('script');
script.type = 'module';
script.src = chrome.runtime.getURL('./content.js');

script.onload = function () {
	this.remove(); // Remove the script element after it has loaded
};

(document.head || document.documentElement).appendChild(script);

// Listen for messages from the injected script
// Use something like `window.postMessage({type: 'STORE_PGN', pgn}, '*');` from the injected script
window.addEventListener('message', (event) => {
	// Check if the message is from the injected script
	if (event.source !== window) return; // Ignore messages from other sources
	if (event.data.type === 'STORE_PGN') {
		chrome.storage.local.set({savedPGN: event.data.pgn}, () => {});
		chrome.runtime.sendMessage({action: 'openLichessTab'});
	}
});
