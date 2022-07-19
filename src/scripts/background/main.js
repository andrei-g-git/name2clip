chrome.tabs.onActivated.addListener((tabId, changeInfo, tab) => {
    console.log("tab in focus changed  ", tabId)

    chrome.tabs.captureVisibleTab({format: "png"}, function(imageUri){
        chrome.storage.local.set({image_uri: imageUri}); 
    });

});
