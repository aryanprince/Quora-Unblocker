document.addEventListener('DOMContentLoaded', () => {
    const dialogBox = document.getElementById('dialog-box');
    const query = { active: true, currentWindow: true };

    chrome.tabs.query(query, (tabs) => {
        dialogBox.innerHTML = getTabURL(tabs[0].url);
    });
});

const getTabURL = (tabTitle) => {
    const barkTitle = `Current URL: ${tabTitle}`
    return barkTitle;
}