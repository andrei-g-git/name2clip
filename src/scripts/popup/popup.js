document.addEventListener( 'DOMContentLoaded', test );

function test(){
    console.log("test() ran")
    const imageTag = document.getElementById("test-image");
    chrome.storage.local.get("image_uri", function(data){
        console.log("URI: ", data["image_uri"]);
        imageTag.src = data["image_uri"];
    });
}
