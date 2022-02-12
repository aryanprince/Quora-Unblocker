document.addEventListener('DOMContentLoaded', () => {
    const dialogBox = document.getElementById('dialog-box');
    const query = { active: true, currentWindow: true };

    chrome.tabs.query(query, (tabs) => {
        dialogBox.innerHTML = getTabURL(tabs[0].url);
    });
});

const getTabURL = (tabURL) => {
    
    if ((tabURL).includes('quora.com')) {
        const dialogMessage = `Yay!`
        
            var lastChar = tabURL.substr(-1);
            if (lastChar !== '/') {
                chrome.tabs.update({
                    url: tabURL + "/"
                });
            }
            
        return dialogMessage;
    }
    else {
        const dialogMessage = `Try this on quora.com`
        return dialogMessage;
    }
}