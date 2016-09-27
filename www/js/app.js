(function(){
  var bocks = [{ id: '1',
              titulo: 'El juego de Ender',
              autor: 'Orson Scott Card',
              editorial:'Ediciones B/Zeta',
              precio:10,
              descripcion: "En el año 2070 la humanidad está en guerra con una raza extraterrestre conocida como los insectores (su nombre proviene del parecido que tienen a los insectos). Tras fracasar en su Primera Invasión (de exploración) del sistema solar la cual está cerca de acabar con la humanidad, ésta establece una alianza mundial para hacer frente a la amenaza, con la creación de una unidad militar multinacional, la Flota Internacional (FI), otorgándose el gobierno de la tierra a la Hegemonía dividiéndose el gobierno del planeta entre tres cuerpos: el Hegemon, el Polemarch, y el Strategos; los cuales pelean por el dominio durante la guerra. En este futuro la humanidad ha desarrollado el viaje interestelar, la comunicación más rápida que la luz (denominada ansible en las novelas de Ursula K. Le Guin), el control sobre la gravedad y otros mecanismos y armas (muchos descubiertos a partir de los restos de la Primera Invasión Insectora). La segunda invasión (que, a diferencia de la primera, era para colonizar) fue detenida en el último momento por el talento del estratega, Mazer Rackham. Pero han pasado décadas, y la humanidad se enfrenta a un futuro incierto esperando el exterminio por una posible tercera invasión por los extraterrestres.",
              images: 'img/img1.jpg'
               },
            
              { id: '2',
              titulo: 'Juego de tronos',
              autor: 'George R. R. Martin',
              editorial:'Gigamesh',
              precio:150,
              descripcion: "Al principio de la historia, Eddard Stark, como Señor de Invernalia, en nombre de Robert I Baratheon, rey de los Siete Reinos, debe condenar y ejecutar a un desertor de la Guardia de la Noche. Sus hijos se encuentran entre los testigos. En el viaje de vuelta a Invernalia, los hijos de Eddard descubren al lado de su madre muerta cinco cachorros de lobo huargo, uno para cada uno de sus hijos legítimos y otro cachorro totalmente blanco, que se queda su bastardo Jon Nieve (el lobo huargo es el símbolo de la Casa Stark, que aparece en la heráldica de la familia Stark). Después de la muerte de Lord Jon Arryn, anterior Mano del Rey (el más alto asesor del rey), el rey Robert Baratheon visita a Eddard en Invernalia. Como confía en él como un viejo amigo y como aliado en la lucha por el trono, el Rey Robert le pide a Eddard convertirse en la nueva Mano del Rey. Eddard acepta, en contra de sus instintos, y al mismo tiempo promete a su esposa, Lady Catelyn Stark que va a investigar la muerte de la Mano anterior, Jon Arryn",
              images: 'img/img2.jpg'
              },
             
              { id: '3',
              titulo: 'A robot',
              autor: 'Isac Asimov',
              editorial:'Edhasa',
              precio:100,
              descripcion: "En el año 1996, la compañía Robots fabricaba robots sin voz, pues hasta ese momento no se habían desarrollado robots parlantes con inteligencia. Gloria, una encantadora, lista y muy activa niñita de 8 años, se divierte jugando y charlando con su robot niñera Robbie, un obediente robot programado para cuidarla, y que tiene sentimientos dulces por ella. Sin embargo, la madre de Gloria, Grace Weston, está dispuesta a separar para siempre a su hija de su amigo, pues está llena de prejuicios, y piensa que Gloria debe jugar con niños normales y no con una terrible y espantosa máquina, y además no soporta que la gente la vea y sepa que su hija es criada por un robot, debido a la intolerancia que las personas sienten hacia estos",
              images:'img/img3.jpg'
              }
    ];
    
    
    var usuario = {
              nombre:'Eduardo',
              email:'laloalanis22@gmail.com',
              contra:'12345',
              direccion:'garsilaso de la vega #14740',
              cp:'31136',
              pais:'Mexico',
              ciudad:'Chihuahua'
    }; 
    
  
    
    var app = angular.module('bockStore', ['ui.router', 'starter.services']);
  
        app.controller('BockStoreController', function(){
            this.products = bocks;
            this.usuario = usuario;
        });
    
        app.controller("detalleController", function($scope, detallesfactory, $stateParams){
            
            $scope.pedidos = detallesfactory.detalles[$stateParams.id];
        })
        
        app.controller("tablaController", function($scope, detallesfactory){
            
            $scope.tablapedidos = detallesfactory.detalles;
        })  
                       
        

        app.config(function($stateProvider, $urlRouterProvider) {
  
            $stateProvider
            .state('index', {
            url: "/index",
            templateUrl: "index.html"
            })
    
            .state('datos', {
            url: "/datos",
            templateUrl: "templates/datos.html"
            })
  
            .state('pedidos', {
            url: "/pedidos",
            templateUrl: "templates/pedidos.html"
            })
  
            .state('dashboard', {
            url: "/dashboard",
            templateUrl: "templates/dashboard.html"
            })
            
            .state('detalle', {
            url: "/pedidos/:id",
            templateUrl: "templates/detalle-pedido.html",
            
            })
            
        });
    
       
   
                 
})();