/*MAP TAB JS FORMATTING */

/*https://account.mapbox.com: make the map appear using access token from account */

mapboxgl.accessToken = '<sk.eyJ1IjoicG91cm5hcyIsImEiOiJja2c5ZHE4aDQwcTBwMnJtdTBiMjcyb2gyIn0.MPNsbHaLvewsgwIkz9lKtQ>'; 

var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [-74.5, 40], // starting position [lng, lat]
    zoom: 9 // starting zoom
});