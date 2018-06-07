const bodyRef = document.querySelector("body");
const wrapper = document.querySelector("#wrapper");
const fragment = document.createDocumentFragment();

bodyRef.insertBefore(navbarFrag, wrapper);
fragment.appendChild(homeFrag);
fragment.appendChild(rapSheetFrag);
fragment.appendChild(buildNewsFeed(newsItems));
fragment.appendChild(financeFrag);
fragment.appendChild(travelFrag);
wrapper.appendChild(fragment);
 
// travel function calls


onload(airports,"Airports","BNA.jpg" );
onload(busStations, "Bus Stations","busker.jpeg");
onload(locations,"Active Locations","Location.png");
onload(rentals, "Rentals","stand.jpg");