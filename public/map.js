document.addEventListener('DOMContentLoaded', () => {
    // Initialize the map
    const map = L.map('map').setView([37.7749, -122.4194], 2); // Default view (worldwide)

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    // Get bird sightings from backend
    fetch('/api/incidents') //<< must match routes.js api/birds
        .then(response => response.json())
        .then(birds => {
            birds.forEach(bird => {
                if (bird.lat && bird.long) {
                    const marker = L.marker([bird.lat, bird.long]).addTo(map);
                    marker.bindPopup(
                        `<b>${bird.species}</b>
                        <br>${bird.name}
                        <br>${bird.notes}`
                    );
                }
            });
        })
        .catch(err => console.error('Error loading birds:', err));
});
