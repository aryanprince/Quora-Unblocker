document.addEventListener('DOMContentLoaded', () => {
    const dialogBox = document.getElementById('dialog-box');
    const query = { active: true, currentWindow: true };

    chrome.tabs.query(query, (tabs) => {
        dialogBox.innerHTML = getTabURL(tabs[0].url);
    });
});

const getTabURL = (tabURL) => {
    
    if ((tabURL).includes('quora.com')) {
        const barkTitle = `Current URL: ${tabURL}`
        chrome.tabs.update({
            url: 'quora.com'
          });
        return barkTitle;
    }
    else {
        const barkTitle = `lulz`
        return barkTitle;
    }
}