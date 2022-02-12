document.addEventListener('DOMContentLoaded', () => {
    const dialogBox = document.getElementById('dialog-box');
    const query = { active: true, currentWindow: true };

    chrome.tabs.query(query, (tabs) => {
        dialogBox.innerHTML = getBarkedTitle(tabs[0].title);
        document.getElementById("root").innerHTML = "URL:<br>" + window.location.href;
    });
});

const getBarkedTitle = (tabTitle) => {
    const barkTitle = `We are at: ${tabTitle}`
    return barkTitle;
}