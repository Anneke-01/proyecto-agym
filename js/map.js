const mapDiv = document.getElementById("map");
let map;
function initMap() {
    map = new google.maps.Map(mapDiv, {
        zoom: 4,  // Nivel de zoom inicial
        center: { lat: 48.8566, lng: 2.3522 }  // Centro del mapa inicial (París, Francia)
    });
}

// Crear un objeto Geocoder
var geocoder = new google.maps.Geocoder();

// Crear un array con los países
var countries = ['Francia', 'España', 'Portugal', 'Noruega', 'Alemania', 'Italia', 'Grecia'];

// Función para geocodificar e agregar marcadores al mapa
function geocodeCountry(country) {
    geocoder.geocode({ address: country }, function (results, status) {
        if (status === 'OK') {
            // Ubicación encontrada, crear un marcador en el mapa
            var location = results[0].geometry.location;
            new google.maps.Marker({
                position: location,
                map: map,
                title: country
            });
        } else {
            // No se pudo encontrar la ubicación, manejar el error
            console.error('Geocode error: ' + status);
        }
    });
}




// Geocodificar y agregar marcadores para cada país
countries.forEach(function (country) {
    geocodeCountry(country);
});

// const mapDiv = document.getElementById("map");
//         let map;
//         function initMap(){
//             map = new google.maps.Map(mapDiv,{
//                 center: {lat: -34.397, lng: 150.604},
//                 zoom: 8,
//             });
//         }