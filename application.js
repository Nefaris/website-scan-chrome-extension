const searchInput = document.querySelector('#searchInput');
const searchButton = document.querySelector('#searchButton');
const clearInput = document.querySelector('#clearInput');
const searchForm = document.querySelector('#searchForm');

chrome.tabs.getSelected(null, function (tab) {
	searchInput.value = tab.url;
});

clearInput.addEventListener('click', (e) => {
	e.preventDefault();
	searchInput.value = '';
	searchInput.focus();
});

searchForm.addEventListener('submit', (e) => {
	e.preventDefault();

	const gtmetrix = 'https://gtmetrix.com/';
	const pingdom = 'https://tools.pingdom.com/';
	const insights = 'https://developers.google.com/speed/pagespeed/insights/';

	chrome.storage.local.set({
		domain: searchInput.value
	});

	chrome.tabs.create({
		url: gtmetrix,
		active: false
	});

	chrome.tabs.create({
		url: pingdom,
		active: false
	});

	chrome.tabs.create({
		url: insights,
		active: false
	});

	window.close();
});