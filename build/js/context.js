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
        postMetadata
    ));

const handleContextClick = (event, postMetadata) => {
    logClickInfo(event);

    postMetadata(
        event.pageUrl,
        event.linkUrl,
        event.srcUrl,
        "http://localhost:9999/scraper"
    )
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

    $.ajax({
        url: apiPath,
        type: "POST",
        data: data,
        //data: "awefawefawefe",
        success: (response) => {
            console.log("got data")
            console.log(response)
        }
    })

    console.log("after api call")
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
