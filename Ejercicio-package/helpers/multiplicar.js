//Estoy importando el paquete file system (fs)
const fs = require('fs');
require("colors");

const crearArchivo =async  (base = 5) => {
    try {

  let salida = '';

  console.log('====================='.green);
  console.log(`    Tabla del ${base}      `.green);
  console.log('====================='.green);

  for(let i = 1; i <= 10; i++){
    salida += `${base} x ${i} = ${base * i}\n`;
  }

  console.log(salida);

    fs.writeFileSync(`tabla-${base}.txt`, salida);
    return `tabla-${base}.txt`;
  }
  catch (error) {
    throw error;
  }
};
//Exportamos el archivo
module.exports = {
  generarArchivo: crearArchivo
};

