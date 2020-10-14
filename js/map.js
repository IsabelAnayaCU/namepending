/*MAP TAB JS FORMATTING */

/*https://account.mapbox.com: make the map appear using access token from account */


//DISPLAY CU BOULDER CAMPUS MAP 
    mapboxgl.accessToken = 'pk.eyJ1IjoicG91cm5hcyIsImEiOiJja2c5ZGl0MnEwNzh4MnRwNW84aWRlMzA2In0.igXHhRH5VJlv4lTfOqii6g';
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-105.2656199, 40.0049445], 
        zoom: 15
    });