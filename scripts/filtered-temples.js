// Temple Data
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
 
];

// Helper function to parse year from "dedicated" property
function getYear(dateStr) {
  // Expects "YYYY, Month, DD"
  return parseInt(dateStr.split(",")[0], 10);
}

// Render temples function
function renderTemples(list) {
  const album = document.getElementById("temple-album");
  album.innerHTML = ""; // Clear
  list.forEach(temple => {
    const fig = document.createElement("figure");
    const img = document.createElement("img");
    img.src = temple.imageUrl;
    img.alt = temple.templeName;
    img.loading = "lazy";
    fig.appendChild(img);

    const caption = document.createElement("figcaption");
    caption.innerHTML = `<strong>${temple.templeName}</strong><br>
      <span>${temple.location}</span><br>
      <span>Dedicated: ${temple.dedicated}</span><br>
      <span>Area: ${temple.area.toLocaleString()} sq ft</span>`;
    fig.appendChild(caption);

    album.appendChild(fig);
  });
}

// Filter function
function filterTemples(type) {
  let filtered;
  switch(type) {
    case "old":
      filtered = temples.filter(t => getYear(t.dedicated) < 1900);
      break;
    case "new":
      filtered = temples.filter(t => getYear(t.dedicated) > 2000);
      break;
    case "large":
      filtered = temples.filter(t => t.area > 90000);
      break;
    case "small":
      filtered = temples.filter(t => t.area < 10000);
      break;
    case "home":
    default:
      filtered = temples;
  }
  renderTemples(filtered);
}

// Navigation filtering
document.addEventListener("DOMContentLoaded", () => {
  renderTemples(temples);

  // Hamburger menu
  const hamburger = document.getElementById("hamburger");
  const nav = document.getElementById("main-nav");
  hamburger.addEventListener("click", () => {
    nav.classList.toggle("open");
    if (nav.classList.contains("open")) {
      hamburger.innerHTML = "&times;";
      hamburger.setAttribute("aria-label", "Close menu");
      hamburger.setAttribute("aria-expanded", "true");
    } else {
      hamburger.innerHTML = "&#9776;";
      hamburger.setAttribute("aria-label", "Open menu");
      hamburger.setAttribute("aria-expanded", "false");
    }
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 700) {
      nav.classList.remove("open");
      hamburger.innerHTML = "&#9776;";
      hamburger.setAttribute("aria-label", "Open menu");
      hamburger.setAttribute("aria-expanded", "false");
    }
  });

  // Navigation links
  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      filterTemples(link.dataset.filter);
      nav.classList.remove("open");
      hamburger.innerHTML = "&#9776;";
      hamburger.setAttribute("aria-label", "Open menu");
      hamburger.setAttribute("aria-expanded", "false");
    });
  });

  // Footer year and last modified
  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent = document.lastModified;
});