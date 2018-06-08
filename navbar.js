let navbarFrag = document.createDocumentFragment();

const divRef = document.createElement("div");
const aRefHome = document.createElement("a");
const aRefRapSheet = document.createElement("a");
const aRefNewsFeed = document.createElement("a");
const aRefFinance = document.createElement("a");
const aRefTravel = document.createElement("a");
divRef.id = "sidenav"

aRefHome.id = "HomeNav"
aRefHome.setAttribute("class", "fas fa-home");

aRefRapSheet.id = "rap-sheetNav"
aRefRapSheet.setAttribute("class", "fas fa-lock")

aRefNewsFeed.id = "newsFeedNav"
aRefNewsFeed.setAttribute("class", "fas fa-newspaper");
aRefFinance.id = "financeNav"
aRefFinance.setAttribute("class", "fas fa-money-bill")

aRefTravel.id = "section-TravelNav"
aRefTravel.setAttribute("class", "fas fa-plane");

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

