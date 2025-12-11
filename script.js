// ================================
// INITIALIZE MAP
// ================================
var map = L.map('map').setView([17.445, 78.349], 17);

// Map tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);


// ================================
// USER LOCATION
// ================================
function locateUser() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function (pos) {
                var lat = pos.coords.latitude;
                var lng = pos.coords.longitude;

                L.marker([lat, lng]).addTo(map)
                    .bindPopup("You are here").openPopup();

                map.setView([lat, lng], 18);
            },
            function () {
                alert("Unable to find your location.");
            }
        );
    }
}

locateUser();


// ================================
// ACCESSIBLE PATH DATA
// ================================
const accessiblePaths = [
    {
        "name": "Main Accessible Route",
        "coords": [
            [17.4450, 78.3490],
            [17.4455, 78.3492],
            [17.4460, 78.3491],
            [17.4465, 78.3488]
        ]
    }
];


// ================================
// DRAW ROUTE
// ================================
function drawAccessibleRoute() {
    accessiblePaths.forEach(route => {
        L.polyline(route.coords, { weight: 6, color: "blue" }).addTo(map)
            .bindPopup("Accessible Route");
    });
}


// ================================
// SEARCH FUNCTION
// ================================
function findRoute() {
    let dest = document.getElementById("dest").value;

    if (dest.trim() === "") {
        alert("Please enter a destination.");
        return;
    }

    alert("Finding accessible route to: " + dest);

    drawAccessibleRoute();
}