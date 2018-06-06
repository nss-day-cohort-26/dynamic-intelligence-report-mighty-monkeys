const wrapper = document.querySelector("#wrapper");
const fragment = document.createDocumentFragment();

fragment.appendChild(homeFrag);
fragment.appendChild(rapSheetFrag);
fragment.appendChild(newsFeedFrag);
fragment.appendChild(financeFrag);
fragment.appendChild(travelFrag);
wrapper.appendChild(fragment);
