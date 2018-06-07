const popUL = (newsItem) => {
    
    const ul = document.createElement("ul");
        
        for (let prop in newsItem) {
        
            if (prop === "likelihood" || prop === "date" || prop === "where") {
                
                const li = document.createElement("li");
                const boldSpan = document.createElement("span");
                boldSpan.className = "boldSpan"
                li.appendChild(boldSpan);
            
                switch (prop) {
                    case "likelihood":
                        
                        boldSpan.appendChild(document.createTextNode("Likelihood: "))
                        
                        //li.appendChild(document.createTextNode("Likelihood: " + newsItem.likelihood))
                        for (let i = 0; i < newsItem.likelihood; i++) {
                            
                            const icon = document.createElement("i");
                            icon.classList = "fas fa-star";
                            
                            if (newsItem.likelihood <= 4) {
                               icon.style.color = "green";
                            } else if (newsItem.likelihood <= 7) {
                                icon.style.color = "orange";
                            } else {
                                icon.style.color = "red";
                            }
                           
                            li.appendChild(icon);
                        }

                        for (let i = 0; i < (10 - newsItem.likelihood); i++) {
                            const icon = document.createElement("i");
                            icon.classList = "far fa-star";
                            li.appendChild(icon);
                        }

                        break;

                    case "date":

                        boldSpan.appendChild(document.createTextNode("Date: "))
                        
                        li.appendChild(document.createTextNode(newsItem.date))

                        break;

                    case "where":

                        boldSpan.appendChild(document.createTextNode("Where: "))

                        li.appendChild(document.createTextNode(newsItem.where))
                        
                        break;
                }
    
                ul.appendChild(li);
            }     
        }
    
    return ul;
}

const newsFeedImages = [
    "http://static-32.sinclairstoryline.com/resources/media/f5e45f49-19e8-4dfa-ba37-ffa7c2ef5843-large16x9_Stabbing.jpg?1521349977612"
    ,"https://cdn.newsday.com/polopoly_fs/1.13781643.1499190925!/httpImage/image.jpeg_gen/derivatives/landscape_768/image.jpeg"
    ,"https://static1.squarespace.com/static/57ae5a1e9de4bb3199c3155f/t/590780c715d5db8f8bc8669d/1493663944947/iS467921573-Vandalism.jpg?format=1500w"
]

const buildNewsFeed = (newsItems) => {

    const newsFeedFrag = document.createDocumentFragment();

    const newsFeedSection = document.createElement("section");
    newsFeedSection.id = "newsFeed";
    
    const newsFeedTitle = document.createElement("h2");
    newsFeedTitle.id = "newsFeedTitle";
    newsFeedTitle.textContent = "News Feed";
    newsFeedTitle.addEventListener("mouseover", function(){
        let x = 0;
        let y = 0;
        for (i=0; i < 1000; i++) {
            this.style.textShadow = `${x} ${y} 50px red`;
            
            if (x < 25) {
                x += 1
            }
            else if (x >= 25) {
                x -= 1
            }
    
            if (y < 25) {
                y += 1
            }
            else if (y >= 25) {
                y -= 1
            }
        }
    });

    newsFeedSection.appendChild(newsFeedTitle);

    let i = 0

    newsItems.forEach(newsItem => {

        const newsArticle = document.createElement("section");

        const newsItemHeader = document.createElement("h2");
        newsItemHeader.textContent = newsItem.heading;

        const newsHighlightsList = popUL(newsItem);

        const synopsisHeader = document.createElement("h3");
        synopsisHeader.textContent = "Synopsis:";

        const synopsisDiv = document.createElement("div");

        const synopsisImg = document.createElement("img");
        synopsisImg.src = newsFeedImages[i];
        i++;
        synopsisImg.alt = "Knife with Police lights in background";

        const synopsisParagraph = document.createElement("p");
        synopsisParagraph.textContent = newsItem.synopsis;

        synopsisDiv.appendChild(synopsisImg);
        synopsisDiv.appendChild(synopsisParagraph);

        newsArticle.appendChild(newsItemHeader);
        newsArticle.appendChild(newsHighlightsList);
        newsArticle.appendChild(synopsisHeader);
        newsArticle.appendChild(synopsisDiv);

        newsFeedSection.appendChild(newsArticle);

    });

    newsFeedFrag.appendChild(newsFeedSection);

    return newsFeedFrag

}


   

