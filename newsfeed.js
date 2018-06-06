const popUL = (newsItem) => {
    
    const ul = document.createElement("ul");
        
        for (let prop in newsItem) {
        
            if (prop === "likelihood" || prop === "date" || prop === "where") {
                
                const li = document.createElement("li");
            
                switch (prop) {
                    case "likelihood":
                        li.appendChild(document.createTextNode("Likelihood: " + newsItem.likelihood))
                        break;
                    case "date":
                        li.appendChild(document.createTextNode("Date: " + newsItem.date))
                        break;
                    case "where":
                        li.appendChild(document.createTextNode("Where: " + newsItem.where))
                        break;
                }
    
                ul.appendChild(li);
            }     
        }
    
    return ul;
}



const buildNewsFeed = (newsItems) => {

    const newsFeedSection = document.createElement("section");
    newsFeedSection.id = "newsFeed";
    const newsFeedFrag = document.createDocumentFragment();

    newsItems.forEach(newsItem => {

        const newsArticle = document.createElement("section");

        const newsItemHeader = document.createElement("h2");
        newsItemHeader.textContent = newsItem.heading;

        const newsHighlightsList = popUL(newsItem);

        const synopsisHeader = document.createElement("h3");
        synopsisHeader.textContent = "Synopsis:"

        const synopsisParagraph = document.createElement("p");
        synopsisParagraph.textContent = newsItem.synopsis;

        newsArticle.appendChild(newsItemHeader);
        newsArticle.appendChild(newsHighlightsList);
        newsArticle.appendChild(synopsisHeader);
        newsArticle.appendChild(synopsisParagraph);

        newsFeedSection.appendChild(newsArticle);

    });

    newsFeedFrag.appendChild(newsFeedSection);

    return newsFeedFrag

}


