const newsItems = [

    {
        heading: "Stabbing in Baldwin Park",
        likelihood: 9,
        date: "4/16/2018",
        where: "Baldwin Park",
        synopsis: "There was a stabbing in Baldwin Park early friday morning." +
            "Kyle Shanahan was stabbed thrice in the belly before a local jogger saw the incident" +
            "and began to scream. The perp fled the scene but is believed at this time to be one Jeffrey Dahmer. " +
            "Officer Jack Parker was first to the scene. He began to administer first aid until ambulances could arrive." +
            "The actions of Officer Parker likely saved the life of Kyle."
    }

    , {
        heading: "Theft at Thirsties Drugstore",
        likelihood: 7,
        date: "3/13/2018",
        where: "East Ridge",
        synopsis: "A local Thirsties Drugstore was robbed on March 13. The perpetrator entered the store, " +
            "threatened the cashier with a gun, and proceeded to walk through the store, grabbing seemingly random items off the shelves. " +
            "It is believed that he stole at least two cases of Mountain Dew, a hairnet, three bottles of shampoo, and over twenty boxes of cough medicine. " +
            "The perp was caught on CCTV and while the image is unclear, it is believed that he is Jeffrey Dahmer."
    }

    , {
        heading: "Vandelism at Victor's Vacuum Shop",
        likelihood: 5,
        date: "1/4/2018",
        where: "Midtown",
        synopsis: "On the morning of January 14th, Victor Valdez, owner of a local vacuum shop, found that his store had been vandalized by a graffiti artist." +
            "The words 'These vacuums SUCK!' were found spray-painted across his front display window, along with the tag of the graffiti artist." +
            "The tag matches similar acts of vandalism committed by Jacob Drew, a known alias of Jeffrey Dahmer."
    }
]

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