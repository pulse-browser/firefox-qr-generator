const qr_generator = browser.menus.create({
    title: 'qr-generator',
    contexts: ["all"],
    documentUrlPatterns: ['*://*/*'],
})

browser.menus.onClicked.addListener(function (info, tab) {
    switch (info.menuItemId) {
        case qr_generator:
            //get the url of the current tab
            browser.tabs.query({active: true, currentWindow: true}, function(tabs) {
                var url = tabs[0].url;
                //create window with index.html 500x500 in the center of the screen, no border
                browser.windows.create({
                    url: "index.html?url=" + url,
                    type: "popup",
                    width: 500,
                    height: 500,
                    left: Math.round((screen.width/2)-(500/2)),
                    top: Math.round((screen.height/2)-(500/2)),
                    focused: true,
                    state: "normal",
                });
                
                
            });

        break
    }
})