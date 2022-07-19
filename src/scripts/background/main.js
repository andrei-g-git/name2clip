chrome.tabs.onActivated.addListener((tabId, changeInfo, tab) => {
    console.log("tab in focus changed  ", tabId)

    chrome.tabs.captureVisibleTab(function(imageUri){
        console.log("will capture")
        console.log(imageUri);
        chrome.runtime.sendMessage({uri: imageUri}, function(response){
            console.log("uri received")
        })        
    });

});
