const temples = [
  {
    templeName: "Aba Nigeria", location: "Aba, Nigeria", dedicated: "2005, August, 7", area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah", location: "Manti, Utah, United States", dedicated: "1888, May, 21", area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah", location: "Payson, Utah, United States", dedicated: "2015, June, 7", area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam", location: "Yigo, Guam", dedicated: "2020, May, 2", area: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.", location: "Kensington, Maryland, United States", dedicated: "1974, November, 19", area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Per\u00fa", location: "Lima, Per\u00fa", dedicated: "1986, January, 10", area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico", location: "Mexico City, Mexico", dedicated: "1983, December, 2", area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Salt Lake Temple", location: "Salt Lake City, Utah, United States", dedicated: "1893, April, 6", area: 253015,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/bb20ac26429ab0478980168fbcac032c25dfb3d9/full/800%2C/0/default"
  },
  {
    templeName: "Rome Italy Temple", location: "Rome, Italy", dedicated: "2019, March, 10", area: 40400,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/4e47429c6ce95afa09578b5a4f791b4a09160a6d/full/800%2C/0/default"
  },
  {
    templeName: "Johannesburg South Africa Temple", location: "Johannesburg, South Africa", dedicated: "1985, August, 24", area: 19184,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/05508de0a42058139d86f83a60e28675dae57077/full/%2C500/0/default"
  }
];

const grid = document.querySelector("#temple-grid");
const galleryTitle = document.querySelector("#gallery-title");
const nav = document.querySelector("#navigation");
const menuButton = document.querySelector("#menu-button");

function displayTemples(list) {
  grid.replaceChildren(...list.map((temple) => {
    const card = document.createElement("figure");
    card.className = "temple-card";

    const image = document.createElement("img");
    image.src = temple.imageUrl;
    image.alt = temple.templeName;
    image.loading = "lazy";
    image.width = 400;
    image.height = 250;

    const caption = document.createElement("figcaption");
    const title = document.createElement("h3");
    title.textContent = temple.templeName;
    caption.append(title);

    const details = document.createElement("dl");
    const year = Number(temple.dedicated.slice(0, 4));
    const values = [
      ["Location", temple.location],
      ["Dedicated", temple.dedicated],
      ["Area", `${temple.area.toLocaleString("en-US")} sq ft`]
    ];
    values.forEach(([label, value]) => {
      const row = document.createElement("div");
      const term = document.createElement("dt");
      const description = document.createElement("dd");
      term.textContent = label;
      description.textContent = value;
      row.append(term, description);
      details.append(row);
    });
    card.dataset.year = year;
    caption.append(details);
    card.append(image, caption);
    return card;
  }));
}

const filters = {
  all: () => temples,
  old: () => temples.filter((temple) => Number(temple.dedicated.slice(0, 4)) < 1900),
  new: () => temples.filter((temple) => Number(temple.dedicated.slice(0, 4)) > 2000),
  large: () => temples.filter((temple) => temple.area > 90000),
  small: () => temples.filter((temple) => temple.area < 10000)
};
const titles = { all: "All Temples", old: "Old Temples", new: "New Temples", large: "Large Temples", small: "Small Temples" };

nav.addEventListener("click", (event) => {
  const link = event.target.closest("a[data-filter]");
  if (!link) return;
  event.preventDefault();
  const filter = link.dataset.filter;
  displayTemples(filters[filter]());
  galleryTitle.textContent = titles[filter];
  nav.querySelectorAll("a").forEach((item) => {
    const active = item === link;
    item.classList.toggle("active", active);
    if (active) item.setAttribute("aria-current", "page");
    else item.removeAttribute("aria-current");
  });
  nav.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Open navigation menu");
  menuButton.textContent = "\u2630";
});

menuButton.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? "Close navigation menu" : "Open navigation menu");
  menuButton.textContent = open ? "\u00d7" : "\u2630";
});

document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = `Last modified: ${document.lastModified}`;
displayTemples(temples);
