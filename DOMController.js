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
