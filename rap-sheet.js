const rapSheetFrag = document.createDocumentFragment();
const sectionRapSheet = document.createElement("section");
sectionRapSheet.setAttribute("id", "rap-sheet");

// let img = document.createElement("img");
// img.setAttribute("src", "img_pulpit.jpg");
// img.setAttribute("alt", "NameofImage");

const myLists = {
    headers1: {
        header1: "Crimes...",
        header2: "Prisons Incarcerated",
        header3: "Witnessess",
        header4: "Victims",
    },
    headers3: {
        header1: "Committed",
        header2: "Convicted"
    },
    headers4: {
        header1: "Guantanamo Bay Prison",
        header2: "Alcatraz Federal Penitentiary",
        header3: "Riverbend Maximum Security",
    },
    dates: {
        date1: "2002-2005",
        date2: "2009-2013",
        date3: "2016-2017",
    },
    victims: {
        victim1: "Chris Traeger",
        victim2: "Leslie Knope",
        victim3: "Ann Perkins",
    },
    witnessess: {
        witness1: "Ron Swanson",
        witness2: "Tom Haverford",
        witness3: "Gary Gergich",
    },
    committedList: {
        list1: "Hacking Traffic Lights",
        list2: "Jaywalking",
        list3: "Cyber Bullying"
    },
    convictedList: {
        list1: "Identity Theft",
        list2: "Grand Theft Auto",
        list3: "Battery"
    }
}

const crimeSections = () => {

    // Function - creates Headers for each CHILD Container
    const createContainerHeader = ob => {
        const createHeader = document.createElement("h1");
        createHeader.innerHTML = myLists.headers1[ob];
        return createHeader;
    }

    // Function - creates PARENT Containers for each Child Container below
    const createParentContainer = val => {
        const createParent = document.createElement("div");
        createParent.id = val;
        return createParent;
    }

    // Function - creates Crime Committed & Convicted CHILD Containers
    const createCrime = (ob, ob2, ob3) => {
        const crimeContainer = document.createElement("div");
        crimeContainer.setAttribute("class", "crimeChild");
        const crimeH3 = document.createElement("h3");
        crimeH3.innerHTML = myLists[ob][ob2];
        const crimeUl = document.createElement("ul");
        for (let i in myLists[ob3]) {
            const crimeLi = document.createElement("li");
            crimeLi.innerHTML = myLists[ob3][i];
            crimeUl.appendChild(crimeLi);
        }
        crimeContainer.appendChild(crimeH3);
        crimeContainer.appendChild(crimeUl);
        return crimeContainer;
    }

    // Function - creates Prison CHILD Container
    const createPrison = (ob, ob2, ob3) => {
        const prisonContainer = document.createElement("div");
        const prisonH4 = document.createElement("h4");
        prisonH4.innerHTML = myLists.headers4[ob];
        const prisonImg = document.createElement("img");
        prisonImg.setAttribute("src", ob2);
        prisonImg.setAttribute("class", "prisonImg");
        const prisonP = document.createElement("p");
        prisonP.innerHTML = myLists.dates[ob3];
        prisonContainer.appendChild(prisonH4);
        prisonContainer.appendChild(prisonImg);
        prisonContainer.appendChild(prisonP);
        return prisonContainer;
    }

    // Function - creates Victim & Witness CHILD Containers
    const createPeople = (ob, ob2, ob3) => {
        const peopleContainer = document.createElement("div");
        const peopleImg = document.createElement("img");
        peopleImg.setAttribute("src", ob3);
        peopleImg.setAttribute("class", "peopleImg");
        const peopleH5 = document.createElement("h5");
        peopleH5.innerHTML = myLists[ob][ob2];
        peopleContainer.appendChild(peopleImg);
        peopleContainer.appendChild(peopleH5);
        return peopleContainer;
    }

    // Crime Container ---------->

    let crimesH1 = createContainerHeader("header1");

    let crimesCommitted = createCrime("headers3", "header1", "committedList");

    let crimesConvicted = createCrime("headers3", "header2", "convictedList");

    const crimeParent = createParentContainer("crimeParent");

    crimeParent.appendChild(crimesCommitted);
    crimeParent.appendChild(crimesConvicted);

    // Prison Container ---------->

    let prisonH1 = createContainerHeader("header2");

    let prison1 = createPrison("header1", "sr-images/prison.jpg", "date1");
    let prison2 = createPrison("header2", "sr-images/prison2.jpg", "date2");
    let prison3 = createPrison("header3", "sr-images/prison3.jpg", "date3");

    const prisonParent = createParentContainer("prisonParent");
    
    prisonParent.appendChild(prison1);
    prisonParent.appendChild(prison2);
    prisonParent.appendChild(prison3);

    // Witness Container ---------->

    let witnessH1 = createContainerHeader("header3");

    let witness1 = createPeople("witnessess", "witness1", "sr-images/Ron_Swanson.jpg");
    let witness2 = createPeople("witnessess", "witness2", "sr-images/Tom_Haverford.jpg");
    let witness3 = createPeople("witnessess", "witness3", "sr-images/Jerry_Gergich.jpg");

    const witnessParent = createParentContainer("witnessParent");

    witnessParent.appendChild(witness1);
    witnessParent.appendChild(witness2);
    witnessParent.appendChild(witness3);

    // Victim Container ----------> 

    let victimH1 = createContainerHeader("header4");

    let victim1 = createPeople("victims", "victim1", "sr-images/Chris_Traeger.jpg");
    let victim2 = createPeople("victims", "victim2", "sr-images/leslie_knope.png");
    let victim3 = createPeople("victims", "victim3", "sr-images/Ann_Perkins.jpg");

    const victimParent = createParentContainer("victimParent");

    victimParent.appendChild(victim1);
    victimParent.appendChild(victim2);
    victimParent.appendChild(victim3);

    // Append to Section Element 

    sectionRapSheet.appendChild(crimesH1);
    sectionRapSheet.appendChild(crimeParent);
    sectionRapSheet.appendChild(prisonH1);
    sectionRapSheet.appendChild(prisonParent);
    sectionRapSheet.appendChild(witnessH1);
    sectionRapSheet.appendChild(witnessParent);
    sectionRapSheet.appendChild(victimH1);
    sectionRapSheet.appendChild(victimParent);

}

rapSheetFrag.appendChild(sectionRapSheet);
wrapper.appendChild(rapSheetFrag);
crimeSections();