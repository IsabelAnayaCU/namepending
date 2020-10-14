/*MAP TAB JS FORMATTING */

/*https://account.mapbox.com: make the map appear using access token from account */

mapboxgl.accessToken = '<pk.eyJ1IjoicG91cm5hcyIsImEiOiJja2c5ZzY1eTAwbDUxMzJwZjF0ODYxdDBmIn0.gJv5bZ9pm7EL6lgw5vZLfg>';

//DISPLAY CU BOULDER CAMPUS MAP 
    var map = new mapboxgl.Map({
        //container id
        container: 'map', 
        //URL
        style: 'mapbox://styles/mapbox/map_style',
        //[longitude, latitude]
        center: [-105.2656199, 40.0049445], 
        //starting zoom into map 
        zoom: 14 // starting zoom
    });

    var layerList = document.getElementById('menu');
    var inputs = layerList.getElementsByTagName('input');
     
    function switchLayer(layer) {
    var layerId = layer.target.id;
    map.setStyle('mapbox://styles/mapbox/' + layerId);
    }
     
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].onclick = switchLayer;
    }