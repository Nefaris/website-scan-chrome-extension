chrome.storage.local.get(['domain'], function (result) {
	if (result.domain != undefined) {
		document.querySelector('.js-analyze-form-url').value = result.domain;

		chrome.storage.local.set({
			domain: undefined
		});
	}
});