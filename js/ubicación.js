// Función para obtener la ubicación del usuario
function obtenerUbicacion() {
    // Verificar si el navegador soporta la geolocalización
    if (navigator.geolocation) {
        // Solicitar la ubicación del usuario
        navigator.geolocation.getCurrentPosition(function (position) {
            var lat = position.coords.latitude;
            var lng = position.coords.longitude;

            // Utilizar la ubicación del usuario
            console.log('Latitud: ' + lat);
            console.log('Longitud: ' + lng);

            // Aquí puedes agregar tu lógica para utilizar la ubicación del usuario, como mostrar un mapa con la ubicación o realizar acciones basadas en la ubicación.
        }, function (error) {
            // Manejar los errores de geolocalización
            console.log('Error al obtener la ubicación del usuario:', error.message);
        });
    } else {
        // El navegador no soporta la geolocalización
        console.log('La geolocalización no está soportada por el navegador.');
    }
}
