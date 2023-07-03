function initMap() {
    // Coordenadas del National Museum of Scotland
    var location = { lat: 55.9479, lng: -3.189 };

    // Crear un mapa centrado en la ubicación especificada
    var map = new google.maps.Map(document.getElementById('map'), {
        center: location,
        zoom: 15
    });

    // Crear un marcador en la ubicación especificada
    var marker = new google.maps.Marker({
        position: location,
        map: map,
        title: 'National Museum of Scotland'
    });
}