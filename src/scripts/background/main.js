//import Tesseract from "tesseract.js";
import { createWorker } from 'tesseract.js';

chrome.tabs.onActivated.addListener((tabId, changeInfo, tab) => {

    chrome.tabs.captureVisibleTab({format: "png"}, function(imageUri){
        chrome.storage.local.set({image_uri: imageUri}); 

        // Tesseract.recognize(
        //     imageUri,
        //     "eng"
        // )
        //     .catch(err => console.error(err))
        //     .then(({data: {text}}) => {
        //         console.log(text)
        //     })  ;  

        const worker = createWorker({
            logger: m => console.log(m)
          });
          
          (async () => {
            await worker.load();
            await worker.loadLanguage('eng');
            await worker.initialize('eng');
            const { data: { text } } = await worker.recognize(imageUri);
            console.log(text);
            await worker.terminate();
          })();
    });
});
