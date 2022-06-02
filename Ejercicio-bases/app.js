// //Estoy importando el paquete file system (fs)
// const fs = require('fs');
// try{
// const base = 10;
// let salida = '';

// console.log('=====================');
// console.log(`    Tabla del ${base}      `);
// console.log('=====================');

// for(let i = 1; i <= 10; i++){
//   salida += `${base} x ${i} = ${base * i}\n`;
// }

// console.log(salida);
// //throw es como un stop
// // fs.writeFile(`tabla-${base}.txt`, salida, (err)=> {
// //   if(err) throw err;
// //   console.log(`table-${base} creado`);
// // });

// //
// fs.writeFileSync(`tabla-${base}.txt`, salida);
// console.log(`tabla-${base}.txt creado`);
// }
// catch(error){
//   throw error;
// }

const { generarArchivo } = require('./helpers/multiplicar');
//const base = 7;
const [, , arg3 = 'base=9'] = process.argv;
const [, base] = arg3.split('=');
console.log(base);

generarArchivo(base)
.then(nombreArchivo => console.log(nombreArchivo, 'creado'))
.catch(err => console.log(err));


//console.log(process.argv);