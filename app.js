const argv = require('./config/yargs').argv;
var colors = require('colors');

//requireds
//const fs = require('fs');
//const fs = require('express'); no nativos de node, expansiones
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado ${colors.red(archivo)}`.yellow))
            .catch(err => console.log(err));
        break;
    default:
        console.log('comando no reconocido');
}


//console.log('Limite', argv.limite);
//console.log(argv2);
/* 
let parametro = argv[2];
let base = parametro.split('=')[1];
 */