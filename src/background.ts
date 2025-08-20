chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
	// if (message.action === 'openLichessTab') {
	// 	// Query for the currently active tab
	// 	chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
	// 		const activeTab = tabs[0] // Get the active tab
	// 		if (activeTab) {
	// 			// Open a new tab next to the active tab
	// 			chrome.tabs.create({
	// 				url: 'https://lichess.org/paste',
	// 				index: activeTab.index + 1, // Open it to the right of the active tab
	// 			})
	// 		}
	// 	})
	// }
});
