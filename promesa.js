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
  
  const id = 1;

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

  getEmpleado(id)
  .then(empleado => console.log(empleado))
  .catch(error => {
    //Codigo a realizar cuando se rechaza la promesa
    console.log(error);
  });

getSalario(id)
  .then(salario => console.log(salario))
  .catch(error => {
    //Codigo a realizar cuando se rechaza la promesa
    console.log(error);
  });

  //otra forma de obtener la promesa
//   getEmpleado (id)
//   .then(empleado =>{

//       getSalario(id)
//       .then(salario => {
//           console.log("El Empleado", empleado, "tiene un salario de: ", salario);
//       })
//       .catch(error => {
//           //codigo  a realizar cuando se rechaza la promesa 
//           console.log(error);
//       })
//   })
//   .catch(error => {
//     //Codigo a realizar cuando se rechaza la promesa
//     console.log(error);
//   });

let nombre;

getEmpleado(id)
.then(empleado => {
    console.log(empleado);
    nombre = empleado.nombre;
    //siempre colocar un return para poder encadenar un then 
    return getSalario();
})
.then(salario => {
    console.log("el empleado: ", nombre, "tiene un salario de :", salario["salario"]);

})
.catch(error => {
    //codigo a realizar cuando se rechaza la promesa
    console.log(error);
});


//revisar el final.. sale undefaidned