const newsItem = {
    heading: "Stabbing in Baldwin Park"
    ,likelihood: 9
    ,date: "4/16/2018"
    ,where: "Baldwin Park"
    ,synopsis: "There was a stabbing in Baldwin Park early friday morning." +
                "Kyle Shanahan was stabbed thrice in the belly before a local jogger saw the incident" +
                "and began to scream. The perp fled the scene but is believed at this time to be one Jeffrey Dahmer. " +
                "Officer Jack Parker was first to the scene. He began to administer first aid until ambulances could arrive." +
                "The actions of Officer Parker likely saved the life of Kyle."
}

const newsFeedFrag = document.createDocumentFragment();

    const newsArticle = document.createElement("section");

            const newsItemHeader = document.createElement("h2");
            newsItemHeader.textContent = newsItem.heading;

            const newsHighlightsList = document.createElement("ul");

                    const newsListItemLikelihood = document.createElement("li");
                        const likelihoodSpan = document.createElement("span");
                        const likelihoodLable = document.createTextNode;
                        likelihoodLabel.textContent = "Likelihood: "

                        likelihoodSpan.appendChild(likelihoodLable);

                        const likelihoodValue = document.createTextNode;
                        likelihoodValue.textContent = newsItem.likelihood

                        newsListItemLikelihood.appendChild(liklihoodSpan);
                        newsListItemLikelihood.appendChild(likelihoodValue);

                    const newsListItemDate = document.createElement("li");
                        const dateSpan = document.createElement("span");
                        const dateLabel = document.createTextNoade;
                        dateLabel.textContent = "Date: "

                        dateSpan.appendChild(dateLabel);

                        const dateValue = document.createTextNode;
                        dateValue.textContent = newsItem.date;

                        newsListItemDate.appendChild(dateSpan);
                        newsListItemDate.appendChild(datevalue);

                    const newsListItemLocation = document.createElement("li");
                        const whereSpan = document.createElement("span");
                        const whereLabel = document.createTextNode;
                        whereLabel.textContent = "Where: ";

                        whereSpan.appendChild(whereLabel);
                        
                        const whereValue = document.createTextNode;
                        whereValue.textContent = newsItem.where;

                        newsListItemLocation.appendChild(whereSpan);
                        newsListItemLocation.appendChild(locationValue);

            newsHighlightsList.appendChild(newsListItemLikelihood);
            newsHighlightsList.appendChild(newsListItemDate);
            newsHighlightsList.appendChild(newsListItemLocation);

            const synopsisHeader = document.createElement("h3");
            synopsisHeader.textContent = "Synopsis:"

            const synopsisParagraph = document.createElement("p");
            synopsisParagraph.textContent = newsItem.synopsis;

    newsArticle.appendChild(newsItemHead);
    newsArticle.appendChild(newsHighlightsList);
    newsArticle.appendChild(synopsisHeader);
    newsArticle.appendChild(synopsisParagraph);

newsFeedFrag.appendChild(newsArticle);

console.log(newsFeedFrag);
        