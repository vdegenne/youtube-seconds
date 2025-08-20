<img src="https://raw.githubusercontent.com/vdegenne/youtube-seconds/refs/heads/master/assets/images/logo.svg" alt="Logo" width="150"/>

# youtube-seconds

## Features

- Use `ctrl + ←` to rewind 2 seconds
- Use `ctrl + →` to fast-forward 2 seconds
- It works on shorts too (`←` and `→` as well)
- You can use `Shift + <` and `Shift + >` to change the speed on shorts (just like on normal videos)

## Installation

- Copy this repository on your computer locally.
- [Load the extension in Chrome.](https://developer.chrome.com/docs/extensions/get-started/tutorial/hello-world#load-unpacked)

If you want to change the default 2 seconds step:

- open `./src/content.ts` change the value of `SMALL_STEP_S`
- install building dependencies: `npm i`
- build with `npm run build`
- reload the extension in chrome.
