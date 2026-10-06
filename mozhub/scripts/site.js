const services = [
    { name: "Electrician", category: "home", summary: "Electrical installation, fault finding, lighting, and routine safety checks.", prepare: "Describe the issue, when it began, and whether power has been isolated safely." },
    { name: "Plumber", category: "home", summary: "Water supply, drainage, leak repairs, taps, and bathroom fittings.", prepare: "Share the location of the issue and, if possible, a photo of the affected area." },
    { name: "Cleaner", category: "home", summary: "Home and workspace cleaning, deep cleaning, and move-in preparation.", prepare: "Give the approximate size of the space and the tasks you want included." },
    { name: "Mechanic", category: "transport", summary: "Vehicle inspection, maintenance, diagnostics, and repair advice.", prepare: "Note the vehicle make, model, year, symptoms, and warning lights." },
    { name: "Private tutor", category: "learning", summary: "One-to-one learning support, subject practice, and exam preparation.", prepare: "Name the subject, learner level, learning goals, and preferred schedule." },
    { name: "Photographer", category: "creative", summary: "Portraits, family events, celebrations, and small-business photography.", prepare: "Share the event date, location, coverage needs, and how you plan to use the images." }
];

function renderServices(list, target, message) {
    if (!target) return;
    target.replaceChildren();
    if (message) message.textContent = list.length === 0 ? `No service categories match this filter.` : `${list.length} service ${list.length === 1 ? `category` : `categories`} shown.`;
    list.forEach((service) => {
        const card = document.createElement("article");
        card.className = "service-card";
        const label = document.createElement("p");
        label.className = "card-label";
        label.textContent = service.category === `home` ? `Home and repairs` : service.category === `transport` ? `Transport` : service.category === `learning` ? `Learning` : `Creative and events`;
        const title = document.createElement("h2");
        title.textContent = service.name;
        const summary = document.createElement("p");
        summary.textContent = service.summary;
        const prepTitle = document.createElement("h3");
        prepTitle.textContent = `What to prepare`;
        const prep = document.createElement("p");
        prep.textContent = service.prepare;
        card.append(label, title, summary, prepTitle, prep);
        target.append(card);
    });
}

const featuredTarget = document.querySelector("#featured-services");
if (featuredTarget) renderServices(services.slice(0, 3), featuredTarget);

const serviceFilter = document.querySelector("#service-filter");
if (serviceFilter) {
    const serviceTarget = document.querySelector("#service-list");
    const serviceMessage = document.querySelector("#service-message");
    const applyFilter = () => {
        const matches = serviceFilter.value === "all" ? services : services.filter((service) => service.category === serviceFilter.value);
        renderServices(matches, serviceTarget, serviceMessage);
    };
    serviceFilter.addEventListener("change", applyFilter);
    applyFilter();
}

const menuButton = document.querySelector("#menu-button");
const mainNav = document.querySelector("#main-nav");
if (menuButton && mainNav) {
    menuButton.addEventListener("click", () => {
        const isOpen = menuButton.getAttribute("aria-expanded") === "true";
        menuButton.setAttribute("aria-expanded", String(!isOpen));
        menuButton.setAttribute("aria-label", isOpen ? `Open navigation` : `Close navigation`);
        mainNav.classList.toggle("open", !isOpen);
    });
}

const requestForm = document.querySelector("#request-form");
const savedRequest = document.querySelector("#saved-request");
const clearRequestButton = document.querySelector("#clear-request");
const storageKey = `mozhub-request-notes`;

function showRequest(request) {
    if (!savedRequest) return;
    savedRequest.replaceChildren();
    const heading = document.createElement("h2");
        heading.textContent = `Inquiry notes for ${request.name}`;
    savedRequest.append(heading);
    const details = [
        [`Service`, request.service],
        [`Area`, request.location],
        [`Your notes`, request.details]
    ];
    details.forEach(([label, value]) => {
        const paragraph = document.createElement("p");
        const strong = document.createElement("strong");
        strong.textContent = `${label}: `;
        paragraph.append(strong, document.createTextNode(value));
        savedRequest.append(paragraph);
    });
    if (clearRequestButton) clearRequestButton.hidden = false;
}

if (requestForm) {
    requestForm.addEventListener("submit", (event) => {
        event.preventDefault();
        if (!requestForm.reportValidity()) return;
        const request = {
            name: document.querySelector("#visitor-name").value.trim(),
            service: document.querySelector("#service-type").value,
            location: document.querySelector("#location").value.trim(),
            details: document.querySelector("#job-details").value.trim()
        };
        try {
            localStorage.setItem(storageKey, JSON.stringify(request));
            showRequest(request);
        } catch {
            if (savedRequest) savedRequest.textContent = `Your browser could not save these notes. Please keep a copy before leaving this page.`;
        }
    });
}

if (clearRequestButton) {
    clearRequestButton.addEventListener("click", () => {
        try { localStorage.removeItem(storageKey); } catch { /* Storage may be unavailable. */ }
        clearRequestButton.hidden = true;
        if (savedRequest) {
            savedRequest.replaceChildren();
            const heading = document.createElement(`h2`);
            heading.textContent = `Your inquiry notes`;
            const message = document.createElement(`p`);
            message.textContent = `No notes saved yet. Complete the form to create a local reminder.`;
            savedRequest.append(heading, message);
        }
    });
}

if (savedRequest) {
    try {
        const stored = localStorage.getItem(storageKey);
        if (stored) {
            const request = JSON.parse(stored);
            if (request && typeof request.name === "string" && typeof request.service === "string" && typeof request.location === "string" && typeof request.details === "string") showRequest(request);
        }
    } catch {
        try { localStorage.removeItem(storageKey); } catch { /* Storage may be unavailable. */ }
    }
}
