"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

;

(function () {
  var UserLocation =
  /*#__PURE__*/
  function () {
    function UserLocation() {
      _classCallCheck(this, UserLocation);
    }

    _createClass(UserLocation, null, [{
      key: "get",
      value: function get(callback) {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function (location) {
            callback({
              lat: location.coords.latitude,
              lng: location.coords.longitude
            });
          });
        } else {
          alert("No pudimos detectar el lugar en el que te encuentras");
        }
      }
    }]);

    return UserLocation;
  }();

  var lugar_destino = {
    lat: 14.108468,
    //14
    lng: -87.202778,
    //87
    zoom: 17 // Mapa con leafletjs

  };
  var map = L.map('map').setView([lugar_destino.lat, lugar_destino.lng], lugar_destino.zoom);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {//attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map); // Agregar el marcador de la posicion

  L.marker([lugar_destino.lat, lugar_destino.lng]).addTo(map) // .bindPopup('<strong>Restaurante Chucks</strong>')
  //.openPopup()
  .bindTooltip('<strong>Restaurante Chucks</strong>'); // .openTooltip();

  UserLocation.get(function (coords) {
    var lugar_origen = {
      lat: coords.lat,
      lng: coords.lng //Calcular distancia del restaurante al usuario
      // -------------------------------------------------------------------------------    

    };
    L.Routing.control({
      waypoints: [L.latLng(lugar_origen.lat, lugar_origen.lng), L.latLng(lugar_destino.lat, lugar_destino.lng)],
      router: new L.Routing.osrmv1({
        language: 'es',
        profile: 'driving'
      }),
      defaultErrorHandler: false
    }).on('routesfound', function (e) {
      //let routes = e.routes;
      var totalDistanciaViaje = parseFloat((e.routes[0].summary.totalDistance / 1000).toFixed(2));
      var totalTiempoViajeMin = parseFloat(e.routes[0].summary.totalTime);
      var HoraMinutos;
      var t = Math.round(totalTiempoViajeMin / 30) * 30;

      if (t > 86400) {
        HoraMinutos = Math.round(t / 3600) + ' ' + 'Horas';
      } else if (t > 3600) {
        HoraMinutos = Math.floor(t / 3600) + ' ' + 'Horas' + ' ' + Math.round(t % 3600 / 60) + ' ' + 'Minutos';
      } else if (t > 300) {
        HoraMinutos = Math.round(t / 60) + ' ' + 'Minutos';
      } else if (t > 60) {
        HoraMinutos = Math.floor(t / 60) + ' ' + 'Minutos' + (t % 60 !== 0 ? ' ' + t % 60 + ' ' + 'Segundos' : '');
      } else {
        HoraMinutos = t + ' ' + 'Segundos';
      }

      document.querySelector("#message").innerHTML = "\n                                                            Estas a ".concat(HoraMinutos, " de una noche inolvidable en\n                                                            <span class=\"dancing-script medium\">\n                                                                Restaurante Chucks\n                                                            </span>\n                                                            ");
    }).route(); // Para que no aparezca el recuadro y los datos de las rutas si agregar ==>.route();
    // Para que el recuadro con la informacion de las rutas aparezca en el mapa ==>.addTo(map);
  });
})(); //-------------------------------------------------------------------------------
// Code Example 
//-------------------------------------------------------------------------------
// map.locate({setView: true, maxZoom: 29});
// function onLocationFound(e) {
//     console.log(e);        
//     var radius = e.accuracy / 2;
//     console.log(e.latlng);
//     L.marker(e.latlng).addTo(map)
//         .bindPopup("Estás dentro de " + radius + " metros desde este punto").openPopup();
//     L.circle(e.latlng, radius).addTo(map);
// }
// map.on('locationfound', onLocationFound);
//-------------------------------------------------------------------------------