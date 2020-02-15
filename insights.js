chrome.storage.local.get(['domain'], function (result) {
	if (result.domain != undefined) {
		document.querySelector('.label-input-label').value = result.domain;

		chrome.storage.local.set({
			domain: undefined
		});
	}
});