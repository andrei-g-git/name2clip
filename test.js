const contextMenuItem = {
    "id": "standin-context",
    "title": "wah",
    "contexts": ["all"]
};
let browser = chrome; //doesn't support promisses?

browser
    .contextMenus
    .create(contextMenuItem);

browser
    .contextMenus
    .onClicked
    .addListener((event) => handleContextClick(event, browser));

function handleContextClick(event, browser){ 
    alert(".... awefeawf")

    console.log(event.pageUrl);


    const url = event.pageUrl;
    $.get(url, function(response) {
        $('body',response).html();
    })

    browser.downloads.download(
        {
			url: "https://wallup.net/wp-content/uploads/2019/09/404961-audi-q7-2006-suv-300x200.jpg",
			filename: "shitty-car.jpg",
			saveAs: true
		},
        () => console.log("should open file explorer")
    );
}