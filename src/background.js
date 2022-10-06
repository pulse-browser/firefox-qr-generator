browser.tabs.onUpdated.addListener((tabId, changeInfo, tabInfo) => {
    if (changeInfo.status) {
        //show the page action when the page is loaded
        browser.pageAction.show(tabId);

        browser.pageAction.setPopup({
            tabId,
            popup: ("index.html")
        });
    }
});

//pageaction onclick
browser.pageAction.onClicked.addListener(function (tab) {
    pageAction.openPopup()
});