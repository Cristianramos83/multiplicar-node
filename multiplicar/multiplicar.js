const fs = require('fs');
var colors = require('colors');

let listarTablaFromArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        fs.readFile(`tablas/tabla-${base}.txt`, (err, data) => {
            if (err) reject(err);
            resolve(data);
        });
    })
}

let listarTabla = (base, limite = 10) => {

    console.log('============='.green);
    console.log(`tabla de ${base}`.green);
    console.log('================'.green);
    let tabla = '';
    for (let index = 1; index < limite; index++) {
        console.log(`${base} *${limite}=${base * index}`.yellow);
    }


}


let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('No es un numero');
            return;
        }

        let tabla = '';
        for (let index = 1; index < limite; index++) {
            tabla += `${base} *${index}=${base * index} \n`;

        }
        const data = new Uint8Array(Buffer.from(tabla));
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            resolve(`tabla-${base}.txt`);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}