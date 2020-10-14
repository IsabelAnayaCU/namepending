/*MAP TAB JS FORMATTING */

/*https://account.mapbox.com: make the map appear using access token from account */

mapboxgl.accessToken = '<pk.eyJ1IjoicG91cm5hcyIsImEiOiJja2c5ZGl0MnEwNzh4MnRwNW84aWRlMzA2In0.igXHhRH5VJlv4lTfOqii6g>';

//DISPLAY CU BOULDER CAMPUS MAP 
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        zoom: 15,
        center: [-105.2656199, 40.0049445] 
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

