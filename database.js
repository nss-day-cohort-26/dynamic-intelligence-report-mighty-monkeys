// Home Database

// Rap-sheet Database

const myLists = {
    headers1: {
        header1: "Crimes...",
        header2: "Prisons Incarcerated",
        header3: "Witnessess",
        header4: "Victims",
        header5: "Rap Sheet"
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

// New Items Database

const newsItems = [

    {
        heading: "Stabbing in Baldwin Park",
        likelihood: 6,
        date: "4/16/2018",
        where: "Baldwin Park",
        synopsis: "There was a stabbing in Baldwin Park early friday morning. " +
            "Kyle Shanahan was stabbed thrice in the belly before a local jogger saw the incident " +
            "and began to scream. The perp fled the scene but is believed at this time to be one Jeffrey Dahmer. " +
            "Officer Jack Parker was first to the scene. He began to administer first aid until ambulances could arrive. " +
            "The actions of Officer Parker likely saved the life of Kyle."
    }

    , {
        heading: "Theft at Thirsties Drugstore",
        likelihood: 4,
        date: "3/13/2018",
        where: "East Ridge",
        synopsis: "A local Thirsties Drugstore was robbed on March 13. The perpetrator entered the store, " +
            "threatened the cashier with a gun, and proceeded to walk through the store, grabbing seemingly random items off the shelves. " +
            "It is believed that he stole at least two cases of Mountain Dew, a hairnet, three bottles of shampoo, and over twenty boxes of cough medicine. " +
            "The perp was caught on CCTV and while the image is unclear, it is believed that he is Jeffrey Dahmer."
    }

    , {
        heading: "Vandelism at Victor's Vacuum Shop",
        likelihood: 9,
        date: "1/4/2018",
        where: "Midtown",
        synopsis: "On the morning of January 14th, Victor Valdez, owner of a local vacuum shop, found that his store had been vandalized by a graffiti artist. " +
            "The words 'These vacuums SUCK!' were found spray-painted across his front display window, along with the tag of the graffiti artist. " +
            "The tag matches similar acts of vandalism committed by Jacob Drew, a known alias of Jeffrey Dahmer."
    }
]

//Finance
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
iconArray = [`<i class="fas fa-home"></i>`, "", `<i class="fas fa-newspaper"></i>`, `<i class="fas fa-money-bill"></i>`, `<i class="fas fa-plane"></i>`];

const airports = ["BNA - Nashville,TN","Istanbul Ataturk Airport","Airport in Switzerland","Kuala Lumpur Airport in Malaysia"]
const busStations = ["Bus Station at Spaarne Hospital","Arriva Headquarters Guimarães","Slough Bus Station","Grand Central Terminal"]
const locations = ["Dickson,TN","Kiev,Ukraine","Havana,Cuba","Caracas,Venezuela"]
const rentals = ["Art Pancake Party and Wedding Rental","AirBnB","Nashville Armory"]
