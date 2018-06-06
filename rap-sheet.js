const rapSheetFrag = document.createDocumentFragment();
const sectionRapSheet = document.createElement("section");
sectionRapSheet.setAttribute("id", "rap-sheet");

// List Arrays

const myLists = {
    headers1: {
        header1: "Crimes...",
        header2: "Prisons Incarcerated",
        header3: "Witnessess",
        header4: "Victims",
    },
    headers4: {
        header1: "Guantanamo Bay Prison",
        header2: "Alcatraz Federal Penitentiary",
        header3: "Riverbend Maximum Security",
    },
    prison: {
        img1: "",
        img2: "",
        img3: "",
        img4: "",
        img5: "",
        img6: "",
        img7: "",
        img8: "",
        img9: ""
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
        list2: "Jaywalking",
        list3: "Battery"
    }
}
      
const crimeSections = () => {

    const createContainerHeader = ob => {
        const createHeader = document.createElement("h1");
        createHeader.innerHTML = myLists.headers1[ob];
        return createHeader
    }

    // Crimes Section ----------------------------

    // Crime Header 

    let crimesH1 = createContainerHeader("header1");

    // Committed Child

    const committedContainer = document.createElement("div");
    committedContainer.setAttribute("id", "committedSection"); 
    
    const committedH3 = document.createElement("h3");
    committedH3.innerHTML = "Committed";
    
    const committedUl = document.createElement("ul");

    for (let i in myLists.committedList) {
        const committedLi = document.createElement("li");
        committedLi.innerHTML = myLists.committedList[i];
        committedUl.appendChild(committedLi);
    }
      
    committedContainer.appendChild(committedH3);
    committedContainer.appendChild(committedUl);

    // Convicted Child

    const convictedContainer = document.createElement("div");
    convictedContainer.setAttribute("id", "convictedSection"); 
    
    const convictedH3 = document.createElement("h3");
    convictedH3.innerHTML = "Committed"
    
    const convictedUl = document.createElement("ul");

    for (let i in myLists.convictedList) {
        const convictedLi = document.createElement("li");
        convictedLi.innerHTML = myLists.convictedList[i];
        convictedUl.appendChild(convictedLi);
    }
 
    convictedContainer.appendChild(convictedH3);
    convictedContainer.appendChild(convictedUl);

    // Parent Container
    const crimeSection = document.createElement("div"); 
    crimeSection.setAttribute("id", "crimeSection"); 
    crimeSection.appendChild(committedContainer);
    crimeSection.appendChild(convictedContainer);

    // Prison Section --------------------------------

    // Prison Header 
    let prisonH1 = createContainerHeader("header2");

    // Create Prison Container

    const createPrison = (ob, ob2) => {
        const prisonContainer = document.createElement("div");
        const prisonH4 = document.createElement("h4");
        prisonH4.innerHTML = myLists.headers4[ob];
        const prisonP = document.createElement("p");
        prisonP.innerHTML = myLists.dates[ob2];
        prisonContainer.appendChild(prisonH4);
        prisonContainer.appendChild(prisonP);
        return prisonContainer;
    }

    let prison1 = createPrison("header1", "date1");
    let prison2 = createPrison("header2", "date2");
    let prison3 = createPrison("header3", "date3");

     // Prison Parent container
     const prisonParentContainer = document.createElement("div");
     prisonParentContainer.setAttribute("id", "prison-container");

     prisonParentContainer.appendChild(prison1);
     prisonParentContainer.appendChild(prison2);
     prisonParentContainer.appendChild(prison3);

    // Witnesses Section ------

    let witnessH1 = createContainerHeader("header3");

    const createWitness = (ob, ob2) => {
        const witnessContainer = document.createElement("div");
        const witnessH5 = document.createElement("h5");
        witnessH5.innerHTML = myLists.witnessess[ob];
        witnessContainer.appendChild(witnessH5);
        return witnessContainer;
    }

    let witness1 = createWitness("witness1");
    let witness2 = createWitness("witness2");
    let witness3 = createWitness("witness3");

    const witnessParentContainer = document.createElement("div");
    witnessParentContainer.setAttribute("id", "witness-container");

    witnessParentContainer.appendChild(witness1);
    witnessParentContainer.appendChild(witness2);
    witnessParentContainer.appendChild(witness3);

    // Victims Section ------

    let victimH1 = createContainerHeader("header4");

    const createVictim = ob => {
        const victimContainer = document.createElement("div");
        const victimH5 = document.createElement("h5");
        victimH5.innerHTML = myLists.victims[ob];
        victimContainer.appendChild(victimH5);
        return victimContainer;
    }

    let victim1 = createVictim("victim1");
    let victim2 = createVictim("victim2");
    let victim3 = createVictim("victim3");

    const victimParentContainer = document.createElement("div");
    victimParentContainer.setAttribute("id", "victim-container");

    victimParentContainer.appendChild(victim1);
    victimParentContainer.appendChild(victim2);
    victimParentContainer.appendChild(victim3);

    sectionRapSheet.appendChild(crimesH1);
    sectionRapSheet.appendChild(crimeSection);
    sectionRapSheet.appendChild(prisonH1);
    sectionRapSheet.appendChild(prisonParentContainer);
    sectionRapSheet.appendChild(witnessH1);
    sectionRapSheet.appendChild(witnessParentContainer);
    sectionRapSheet.appendChild(victimH1);
    sectionRapSheet.appendChild(victimParentContainer);

}

rapSheetFrag.appendChild(sectionRapSheet);
wrapper.appendChild(rapSheetFrag);
crimeSections();

