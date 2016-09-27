angular.module('starter.services', [])


.factory('detallesfactory', function(){
    return {
        detalles: [{},{
            id: 1,
            fecha:'18/10/2016',
            resumen: [
				{titulo: 'I Robot'},
				{autor:'Isac Asimov'},
				{editorial:'Edhasa'},
                {img:'img/img3.jpg'},
                {precio:100}
			],
            cantidad: '(3)',
            estado:'COmprado',
            total:'300'
            },
            {
            }]
    };
});