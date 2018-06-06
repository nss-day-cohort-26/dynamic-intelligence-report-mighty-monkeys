let financeFrag = document.createDocumentFragment();

let sectionFinance = document.createElement("section");
sectionFinance.id = "finance";

const h1 = document.createElement("h1")
h1.textContent = "finance text"

{/* <h1>Finances</h1>
<h4>Bank Accounts</h4>
    <ul>
        <li>Has an offshore account located somewhere in the Cayman Islands. Exact location is unknown.</li>
        <li>Has a Swiss bank account at Credit Suisse located in Zurich, Switzerland</li>
        <li>Has business account set up with the name of Very Good Business LLC. Seems suspicious. Possibly fake.</li>
    </ul>
<h4>Businesses</h4>
    <ul>
        <li>Owner of Very Good Business LLC</li>
        <li>Self-employed at Fiverr</li>
        <li>Does odd jobs on Craigslist</li>
        <li>Is business partner with Creeper Man With The Van</li>
    </ul>
<h4>Blackmailed Individuals</h4>
    <ul>
        <li>Madona</li>
        <li>Michael Jackson</li>
        <li>Coolio</li>
    </ul>
<h4>Money Laundering Methods</h4>
    <ul>
        <li>Craigslist</li>
        <li>Bitcoin</li>
    </ul> */}


// const asd = () => {
//     const h4 = document.createElement("h4")
//     const ul = document.createElement("ul")
//     const li = document.createElement("li")
//     h4.textContent = "";
    
// }

sectionFinance.appendChild(h1);
financeFrag.appendChild(sectionFinance);