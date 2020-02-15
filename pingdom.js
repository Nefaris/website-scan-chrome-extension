chrome.storage.local.get(['domain'], function (result) {
	if (result.domain != undefined) {
		document.querySelector('.test-url-input').value = result.domain;

		chrome.storage.local.set({
			domain: undefined
		});
	}
});