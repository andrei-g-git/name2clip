const contextMenuItem = {
    "id": "title-scraper",
    "title": "Title Scraper",
    "contexts": ["all"]
};

let browser = chrome; //doesn't support promisses?

browser
    .contextMenus
    .create(contextMenuItem);

browser
    .contextMenus
    .onClicked
    .addListener(event => handleContextClick(
        event, 
        postMetadata,
        browser
    ));

const handleContextClick = (event, postMetadata, browser) => {
    logClickInfo(event);

    postMetadata(
        event.pageUrl,
        event.linkUrl,
        event.srcUrl,
        "http://localhost:9999/scraper"
    )
        .then(response => {
            console.log("RES:::: ", response)
            browser.downloads.download({
                url: "https://wikipedia.org",
                filename: response,
                saveAs: true
            },
                () => console.log("should open file explorer")
            )
        });
};

const postMetadata = (url, link, src, apiPath) => {
    console.log(`in postMetadata got:  ${url}  and   ${link}     and   ${src}    and   ${apiPath}`)

    const dataObject = {
        url: url,
        link: link,
        src: src
    };

    const data = JSON.stringify(dataObject);
    console.log("json:    " , data)

    return $.ajax({
        url: apiPath,
        type: "POST",
        data: data,
        dataType: "text"
    })
};

const logClickInfo = (event) => {
    console.log("page: " + event.pageUrl);
    console.log("frame: " + event.frameUrl);
    console.log("link: " + event.linkUrl);
    console.log("media type: " + event.mediaType);
    console.log("parent id" + event.parentMenuItemId);
    console.log("src:", event.srcUrl);
    //console.log("", event.);
}
