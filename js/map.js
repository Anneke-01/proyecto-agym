// Función de inicialización del mapa
function initMap() {
    // Coordenadas de los países
    var countries = [
        { name: 'Francia', lat: 46.603354, lng: 1.888334 },
        { name: 'España', lat: 40.463667, lng: -3.74922 },
        { name: 'Portugal', lat: 39.399872, lng: -8.224454 },
        { name: 'Noruega', lat: 60.472023, lng: 8.468946 },
        { name: 'Alemania', lat: 51.165691, lng: 10.451526 },
        { name: 'Italia', lat: 41.87194, lng: 12.56738 },
        { name: 'Grecia', lat: 39.074208, lng: 21.824312 }
    ];

    // Opciones de visualización del mapa
    var mapOptions = {
        center: { lat: 48.0, lng: 10.0 }, // Centro del mapa
        zoom: 4 // Nivel de zoom
    };

    // Crear el objeto de mapa
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);

    // Iterar sobre los países y agregar marcadores
    for (var i = 0; i < countries.length; i++) {
        var country = countries[i];
        var marker = new google.maps.Marker({
            position: { lat: country.lat, lng: country.lng },
            map: map,
            title: country.name
        });
    }
}
