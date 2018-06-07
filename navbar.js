let navbarFrag = document.createDocumentFragment();

const divRef = document.createElement("div");
const aRefHome = document.createElement("a");
const aRefRapSheet = document.createElement("a");
const aRefNewsFeed = document.createElement("a");
const aRefFinance = document.createElement("a");
const aRefTravel = document.createElement("a");
divRef.id = "sidenav"
aRefHome.id = "HomeNav"
aRefRapSheet.id = "rap-sheetNav"
aRefNewsFeed.id = "newsFeedNav"
aRefFinance.id = "financeNav"
aRefTravel.id = "section-TravelNav"
aRefHome.href = "#Home"
aRefRapSheet.href = "#rap-sheet"
aRefNewsFeed.href = "#newsFeed"
aRefFinance.href = "#finance"
aRefTravel.href = "#section-Travel"
aRefHome.textContent = "Home"
aRefRapSheet.textContent = "Rap Sheet"
aRefNewsFeed.textContent = "News Feed"
aRefFinance.textContent = "Finance"
aRefTravel.textContent = "Travel"

divRef.appendChild(aRefHome);
divRef.appendChild(aRefRapSheet);
divRef.appendChild(aRefNewsFeed);
divRef.appendChild(aRefFinance);
divRef.appendChild(aRefTravel);
navbarFrag.appendChild(divRef);