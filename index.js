// JavaScript for search functionality
const searchBtn = document.getElementById("search-icon");
const searchInput = document.getElementById("search-bar");
function searchCity() {
    const city = searchInput.value.trim().toLowerCase();
    if (city === "delhi") {
        window.location.href = "delhi/del.html";
    }
    else if (city === "mumbai") {
        window.location.href = "mumbai/mumbai.html";
    }
    else if (city === "bangalore" || city === "bengaluru") {
        window.location.href = "bengaluru/beng.html";
    }
    else if (city === "hyderabad") {
        window.location.href = "hyderbad/hyd.html";
    }
    else if (city === "chennai") {
        window.location.href = "chennai/che.html";
    }
    else {
        alert("City not found. Please try Delhi, Mumbai, Bengaluru, Hyderabad, or Chennai.");
    }
}

// Event listeners for search button and Enter key
searchBtn.addEventListener("click", searchCity);
searchInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        searchCity();
    }
});

// Auto-suggestion feature
const suggestionsBox = document.getElementById("suggestions");
const cities = [
    { name: "Delhi", link: "delhi/del.html" },
    { name: "Mumbai", link: "mumbai/mumbai.html" },
    { name: "Bengaluru", link: "bengaluru/beng.html" },
    { name: "Hyderabad", link: "hyderbad/hyd.html" },
    { name: "Chennai", link: "chennai/che.html" }
];

searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    suggestionsBox.innerHTML = "";

    if (query === "") return;

    const filteredCities = cities.filter(city =>
        city.name.toLowerCase().includes(query)
    );

    filteredCities.forEach(city => {
        const div = document.createElement("div");
        div.textContent = city.name;

        div.addEventListener("click", () => {
            window.location.href = city.link;
        });

        suggestionsBox.appendChild(div);
    });
});
document.addEventListener("click", (e) => {
    if (!e.target.closest("#search")) {
        suggestionsBox.innerHTML = "";
    }
});
