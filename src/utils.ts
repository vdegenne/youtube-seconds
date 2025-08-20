export function isElementPartiallyInViewport(el: HTMLElement) {
	const rect = el.getBoundingClientRect();
	return (
		rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
		rect.bottom > 0 &&
		rect.left < (window.innerWidth || document.documentElement.clientWidth) &&
		rect.right > 0
	);
}

export function isShorts() {
	return window.location.href.includes('shorts');
}
