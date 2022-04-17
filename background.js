// background.js
try {
  let color = '#3aa757';

  importScripts('popup.js')
  chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ color });
    console.log('Default background color set to %cgreen', `color: ${color}`);
  });
} catch (e) {
  console.log(e)
}




