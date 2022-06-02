const empleados = [
    {
      id: 1,
      nombre: 'Eleonor'
    },
    {
      id: 2,
      nombre: 'Fausto'
    },
    {
      id: 3,
      nombre: 'Juliana'
    }
  ];
  
  const salarios = [
    {
      id: 1,
      salario: 1000
    },
    {
      id: 2,
      salario: 1500
    }
  ];
  
  const id = 2;

const getEmpleado = (id) => {

  return new Promise((resolve, reject) => {
    const empleado = empleados.find(e => e.id === id);
    if(empleado){
      resolve(empleado);
    } else {
      reject(`No existe el empleado con el id ${id}`);
    }
  });
};

const getSalario = (id) => {

  return new Promise((resolve, reject) => {
    const salario = salarios.find(s => s.id === id);
    if(salario){
      resolve(salario);
    } else {
      reject(`No existe el salario con el id ${id}`);
    }
  });
}


//se llaman esepciones 
//el try y catch es una espcion 
//get, colvar, await son promesas 

const getInfoUsuario = async (id) => {
  try {
    const empleado = await getEmpleado(id);
    const salario = await getSalario(id);
    return `El salario del empleado: ${empleado.nombre} es de ${salario['salario']}`;
  }
  //throw es para colocar un esepcion a la fuerza 
  catch(ex){
    throw ex;
  }
};

getInfoUsuario(id)
  .then(msg => console.log(msg))
  .catch(error => console.log(error));