document.addEventListener('DOMContentLoaded', () => {
    const dialogBox = document.getElementById('dialog-box');
    const query = { active: true, currentWindow: true };

    chrome.tabs.query(query, (tabs) => {
        dialogBox.innerHTML = getTabURL(tabs[0].url);
    });
});

const getTabURL = (tabURL) => {
    const barkTitle = `Current URL: ${tabURL}`
    return barkTitle;
}