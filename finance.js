let financeFrag = document.createDocumentFragment();
const financeObject = {
    bankAccounts:{
        ul:[
            "Has an offshore account located somewhere in the Cayman Islands. Exact location is unknown.",
            "Has a Swiss bank account at Credit Suisse located in Zurich, Switzerland",
            "Has business account set up with the name of Very Good Business LLC. Seems suspicious. Possibly fake."
        ]
    },//<h4>Bank Accounts</h4><ul><li*3>
    businesses:{
        ul:[
            "Owner of Very Good Business LLC",
            "Self-employed at Fiverr",
            "Does odd jobs on Craigslist",
            "Is business partner with Creeper Man With The Van"
        ]
    },//<h4>Businesses</h4><ul><li*4>
    blackmailedIndividuals:{
        ul:[
            "Madona",
            "Michael Jackson",
            "Coolio"
        ]
    },//<h4>Blackmailed Individuals</h4><ul><li*3>
    moneyLaunderingMethods:{
        ul:[
            "Craigslist",
            "Bitcoin"
        ]
    }//<h4>Money Laundering Methods</h4><ul><li*2>
}
let headerFourArray = ["Bank Accounts","Businesses","Blackmailed Individuals","Money Laundering Methods"]
let sectionFinance = document.createElement("section");
sectionFinance.id = "finance";

const h1 = document.createElement("h1")
h1.textContent = "Finances"

const makeFinance = () => {
    sectionFinance.appendChild(h1);
    let i = 0;
    for (const key in financeObject) {
        const h4 = document.createElement("h4")
        h4.textContent = headerFourArray[i++];
        sectionFinance.appendChild(h4);
        for (const keyTwo in financeObject[key]) {
            const ul = document.createElement("ul")
            h4.appendChild(ul)
            Array.from(financeObject[key].ul).forEach(item =>{
                const li = document.createElement("li")
                li.textContent = item;
                ul.appendChild(li);

            })
        }
    }
    
    financeFrag.appendChild(sectionFinance);
}
makeFinance();