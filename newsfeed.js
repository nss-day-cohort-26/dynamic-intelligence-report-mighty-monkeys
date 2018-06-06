

const buildNewsFeed = (newsItems) => {

    const newsFeedFrag = document.createDocumentFragment();

    newsItems.forEach(newsItem => {

        const newsArticle = document.createElement("section");

        const newsItemHeader = document.createElement("h2");
        newsItemHeader.textContent = newsItem.heading;

        const newsHighlightsList = document.createElement("ul");

        const newsListItemLikelihood = document.createElement("li");
        const likelihoodLabel = document.createTextNode("Likelihood: ");
        const likelihoodValue = document.createTextNode(newsItem.likelihood);

        newsListItemLikelihood.appendChild(likelihoodLabel);
        newsListItemLikelihood.appendChild(likelihoodValue);

        const newsListItemDate = document.createElement("li");
        const dateSpan = document.createTextNode("Date: ")
        const dateValue = document.createTextNode(newsItem.date);

        newsListItemDate.appendChild(dateSpan);
        newsListItemDate.appendChild(dateValue);

        const newsListItemLocation = document.createElement("li");
        const whereSpan = document.createTextNode("Where: ");
        const whereValue = document.createTextNode(newsItem.where);

        newsListItemLocation.appendChild(whereSpan);
        newsListItemLocation.appendChild(whereValue);

        newsHighlightsList.appendChild(newsListItemLikelihood);
        newsHighlightsList.appendChild(newsListItemDate);
        newsHighlightsList.appendChild(newsListItemLocation);

        const synopsisHeader = document.createElement("h3");
        synopsisHeader.textContent = "Synopsis:"

        const synopsisParagraph = document.createElement("p");
        synopsisParagraph.textContent = newsItem.synopsis;

        newsArticle.appendChild(newsItemHeader);
        newsArticle.appendChild(newsHighlightsList);
        newsArticle.appendChild(synopsisHeader);
        newsArticle.appendChild(synopsisParagraph);

        newsFeedFrag.appendChild(newsArticle);

    });

    return newsFeedFrag

}