let financeFrag = document.createDocumentFragment();

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