document.addEventListener( 'DOMContentLoaded', init );

function init(){

    const button = document.getElementById("button");
    if(button){
        button.addEventListener("click", () => {

            console.log("clicked")
            alert("clicked")

            chrome.downloads.download(
                {
                    url: "https://blah.com",
                    filename: "somefile.zip",
                    saveAs: true
                },
                () => console.log("should open file explorer")
            );
        });

    } else {
        console.log("no putton")
    }

}