import {getElement} from 'html-vision';
import {isElementPartiallyInViewport, isShorts} from './utils.js';

const INITIAL_STEP_S = 5;
const SMALL_STEP_S = 2;
const RATE_STEP = 0.25;

async function getVideoElement() {
	try {
		return await getElement<HTMLVideoElement>('#container video', {
			pollMs: 100,
			timeoutMs: 4000,
			refinedSearch(video) {
				return isElementPartiallyInViewport(video as HTMLElement);
			},
		});
	} catch {}
}

async function rewind(step = INITIAL_STEP_S) {
	const video = await getVideoElement();
	if (!video) return;
	video.currentTime = Math.max(0, video.currentTime - step);
}
async function fastForward(step = INITIAL_STEP_S) {
	const video = await getVideoElement();
	if (!video) return;
	video.currentTime = Math.min(video.duration, video.currentTime + step);
}
async function slowDown() {
	const video = await getVideoElement();
	if (!video) return;
	video.playbackRate = Math.max(0.25, video.playbackRate - RATE_STEP);
}

async function speedUp() {
	const video = await getVideoElement();
	if (!video) return;
	video.playbackRate = Math.min(16, video.playbackRate + RATE_STEP); // YouTube max
}

function registerListeners() {
	window.addEventListener('keydown', async function (event) {
		if (event.key === 'ArrowLeft') {
			event.preventDefault();
			if (isShorts()) {
				rewind(event.ctrlKey ? SMALL_STEP_S : INITIAL_STEP_S);
			} else if (event.ctrlKey) {
				rewind(SMALL_STEP_S);
			}
		} else if (event.key === 'ArrowRight') {
			event.preventDefault();
			if (isShorts()) {
				fastForward(event.ctrlKey ? SMALL_STEP_S : INITIAL_STEP_S);
			} else if (event.ctrlKey) {
				fastForward(SMALL_STEP_S);
			}
		}

		if (event.shiftKey && event.key === '<' && isShorts()) {
			console.log('ok');
			event.preventDefault();
			slowDown();
		} else if (event.shiftKey && event.key === '>' && isShorts()) {
			event.preventDefault();
			speedUp();
		}
	});
}

async function main() {
	registerListeners();
}
main();
