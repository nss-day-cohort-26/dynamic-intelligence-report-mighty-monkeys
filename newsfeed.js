
const buildNewsFeed = (newsItems) => {

    const newsFeedFrag = document.createDocumentFragment();

    newsItems.forEach(newsItem => {

        const newsArticle = document.createElement("section");

        const newsItemHeader = document.createElement("h2");
        newsItemHeader.textContent = newsItem.heading;

        const newsHighlightsList = popUL(newsItems);

        const synopsisHeader = document.createElement("h3");
        synopsisHeader.textContent = "Synopsis:"

        const synopsisParagraph = document.createElement("p");
        synopsisParagraph.textContent = newsItem.synopsis;

        newsArticle.appendChild(newsItemHeader, newsHighlightsList, synopsisHeader, synopsisParagraph);
        // newsArticle.appendChild(newsHighlightsList);
        // newsArticle.appendChild(synopsisHeader);
        // newsArticle.appendChild(synopsisParagraph);

        newsFeedFrag.appendChild(newsArticle);

    });

    return newsFeedFrag

}

const popUL = (newsItems) => {
    
    const ul = document.createElement("ul");

    newsItems.forEach(function(newsItem) {
        
        for (let prop in newsItem) {
        
            if (prop === "likelihood" || prop === "date" || prop === "where") {
                
                const li = document.createElement("li");
            
                switch (prop) {
                    case likelihood:
                        li.appendChild(document.createTextNode("Likelihood: " + newsItem.likelihood))
                        break;
                    case date:
                        li.appendChild(document.createTextNode("Date: " + newsItem.date))
                        break;
                    case where:
                        li.appendChild(document.createTextNode("Where: " + newsItem.where))
                        break;
                }
    
                ul.appendChild(li);
            }     
        }
    })
    
    return ul;
}

