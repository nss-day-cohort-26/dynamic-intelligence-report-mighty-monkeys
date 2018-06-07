// variables
const artRef = document.querySelector("#wrapper")
const airports = ["BNA - Nashville,TN","Istanbul Ataturk Airport","Airport in Switzerland","Kuala Lumpur Airport in Malaysia"]
const busStations = ["Bus Station at Spaarne Hospital","Arriva Headquarters Guimarães","Slough Bus Station","Grand Central Terminal"]
const locations = ["Dickson,TN","Kiev,Ukraine","Havana,Cuba","Caracas,Venezuela"]
const rentals = ["Art Pancake Party and Wedding Rental","AirBnB","Nashville Armory"]
const secID = document.createElement("section")
secID.setAttribute("id","section-Travel")
let travelFrag = document.createDocumentFragment()
const h1Element = document.createElement("h1")
const h1Text =document.createTextNode("Travel Report")
h1Element.appendChild(h1Text)
secID.appendChild(h1Element)

//functions
const onload =(array,h3text,imageName)=>{ //takes two arguments, array and header text
    const ulRef = document.createElement("ul") // create ul to hold li items
    const h3Ref =document.createElement("h3") 
    h3Ref.id="word"// create tag h3
    const h3Img = document.createElement("IMG");
    h3Img.src = `images/${imageName}`
    travelFrag.appendChild(secID) //append sec to travelfrag
    artRef.appendChild(travelFrag) //append travelFrag to artRef
    newH3 = document.createTextNode(h3text); //add argument to text node
    h3Ref.appendChild(newH3) //append h3 content to h3
    secID.appendChild(h3Ref) //append h3 to section
    h3Ref.appendChild(h3Img) //append img to h3
    
    for (let i = 0; i < array.length;i++){ //for loop to access arrays and add to ul
        const liRef = document.createElement("li")
        let textNode = document.createTextNode(array[i])
        liRef.appendChild(textNode) //append array value to li
        ulRef.appendChild(liRef) //append to ul
        secID.appendChild(ulRef)//append to artID
        console.log(array[i]) //personal test
    }
};

//function calls in DOMController.js

