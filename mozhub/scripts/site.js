```javascript
// ------------------------------------
// MOBILE NAVIGATION
// ------------------------------------

const menuButton = document.querySelector("#menu-button");
const mainNav = document.querySelector("#main-nav");

if (menuButton && mainNav) {
    menuButton.addEventListener("click", () => {
        mainNav.classList.toggle("open");
    });
}


// ------------------------------------
// DESTINATION DATA
// ------------------------------------

const destinations = [
    {
        name: "Maputo",
        region: "south",
        description: "A lively capital city with culture, food, and history.",
        image: "images/maputo.jpg"
    },

    {
        name: "Tofo",
        region: "south",
        description: "A coastal destination known for beaches and ocean experiences.",
        image: "images/tofo.jpg"
    },

    {
        name: "Vilankulo",
        region: "center",
        description: "A beautiful coastal town near the Bazaruto Archipelago.",
        image: "images/vilankulo.jpg"
    },

    {
        name: "Gorongosa",
        region: "center",
        description: "A natural destination famous for wildlife and conservation.",
        image: "images/gorongosa.jpg"
    },

    {
        name: "Ilha de Moçambique",
        region: "north",
        description: "A historic island with important cultural heritage.",
        image: "images/ilha-mocambique.jpg"
    }
];


// ------------------------------------
// DISPLAY DESTINATIONS
// ------------------------------------

function displayDestinations(list) {

    const destinationList =
        document.querySelector("#destination-list");

    const message =
        document.querySelector("#destination-message");

    if (!destinationList) {
        return;
    }

    destinationList.innerHTML = "";

    if (list.length === 0) {

        message.textContent =
            "No destinations were found for this region.";

        return;
    }

    message.textContent =
        `${list.length} destination(s) found.`;

    list.forEach((destination) => {

        const card = document.createElement("article");

        card.classList.add("card", "destination-card");

        card.innerHTML = `
            <img
                src="${destination.image}"
                alt="${destination.name}"
                loading="lazy"
                width="800"
                height="533">

            <h2>${destination.name}</h2>

            <p>${destination.description}</p>

            <p>
                <strong>Region:</strong>
                ${destination.region}
            </p>
        `;

        destinationList.appendChild(card);
    });
}


// ------------------------------------
// FILTER DESTINATIONS
// ------------------------------------

function filterDestinations() {

    const filter =
        document.querySelector("#region-filter");

    if (!filter) {
        return;
    }

    const selectedRegion = filter.value;

    if (selectedRegion === "all") {

        displayDestinations(destinations);

    } else {

        const filteredDestinations =
            destinations.filter(
                (destination) =>
                    destination.region === selectedRegion
            );

        displayDestinations(filteredDestinations);
    }
}


const regionFilter =
    document.querySelector("#region-filter");

if (regionFilter) {

    regionFilter.addEventListener(
        "change",
        filterDestinations
    );

    displayDestinations(destinations);
}


// ------------------------------------
// TRAVEL FORM
// ------------------------------------

const travelForm =
    document.querySelector("#travel-form");

if (travelForm) {

    travelForm.addEventListener("submit", (event) => {

        event.preventDefault();

        const visitorName =
            document.querySelector("#visitor-name").value;

        const region =
            document.querySelector("#region").value;

        const interest =
            document.querySelector(
                'input[name="interest"]:checked'
            ).value;

        const preference = {
            name: visitorName,
            region: region,
            interest: interest
        };

        localStorage.setItem(
            "travelPreference",
            JSON.stringify(preference)
        );

        displaySavedPreference(preference);
    });
}


// ------------------------------------
// DISPLAY SAVED PREFERENCE
// ------------------------------------

function displaySavedPreference(preference) {

    const savedPreference =
        document.querySelector("#saved-preference");

    if (!savedPreference) {
        return;
    }

    savedPreference.innerHTML = `
        <h2>Welcome, ${preference.name}!</h2>

        <p>
            Your preferred region is
            <strong>${preference.region}</strong>.
        </p>

        <p>
            You are interested in
            <strong>${preference.interest}</strong>.
        </p>
    `;
}


// ------------------------------------
// LOAD LOCAL STORAGE
// ------------------------------------

const savedData =
    localStorage.getItem("travelPreference");

if (savedData) {

    const savedPreference =
        JSON.parse(savedData);

    displaySavedPreference(savedPreference);
}
```
