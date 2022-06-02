const clientes = [
  {
    id: 1,
    nombre: 'Leonor'
  },
  {
    id: 2,
    nombre: 'Jacinto'
  },
  {
    id: 3,
    nombre: 'Waldo'
  }
]

const pagos = [
  {
    id: 1,
    pago: 1000,
    moneda: 'Bs'
  },
  {
    id: 2,
    pago: 1800,
    moneda: 'Bs'
  }
]

//callback Cliente
const getclientesById = (id, callback) => {
  const cliente = clientes.find(cliente => cliente.id === id)
    callback(cliente)
}
getclientesById(1, (clientes) => {
  console.log("callbak clientes:", clientes);
})
//Calback pagos
const getPagosById = (id, callback) => {
  const pago = pagos.find(pagos => pagos.id === id)
    callback(pago);
}
getPagosById(2, (pagos) => {
  console.log("callback pagos:", pagos);
})

//Promesa
//Promesa clientes
const id = 1
const getClientes = (id) => {
  return new Promise((resolve, reject) => {
    const cliente = clientes.find(e => e.id === id);
    if (cliente) {
      resolve(cliente)
    } else {
      reject(`No existe el cliente con el id ${id}`)
    }
  })
}

//Promesa pagos
const getPagos = (id) => {
  return new Promise((resolve, reject) => {
    const pago = pagos.find(s => s.id === id)
    if (pago) {
      resolve(pago)
    } else {
      reject(`No exiswte el pago con el id ${id}`)
    }
  })
}
getClientes(id)
  .then(cliente => console.log("Promesa clientes", cliente))
  .catch(error => {
    console.log(error);
  })

getPagos(id)
  .then(pago => console.log("Promesa pagos", pago))
  .catch(error => {
    console.log(error);
  })
//promesa en cadena
//pago del cliente
let nombre;



getClientes(id)
  .then(cliente => {
    nombrecliente = cliente.nombre;
    return getPagos(id);
  })
  .then(pago => {
    console.log(' Promesa en Cadena: El cliente:', nombrecliente, 'tiene que cancelar un pago de:', pago['pago'], 'en moneda de : ', pago.moneda);
  })
  .catch(error => {
    console.log(error);
  });

//async await
const getInfoCliente = async (id) => {
  try {
    const cliente = await getClientes(id);
    const pago = await getPagos(id);
    return ` Async Await El pago  del cliente: ${cliente.nombre} es de ${pago.pago} ${pago.moneda}`;
  }
  catch (ex) {
    throw ex;
  }
}

getInfoCliente(id)
  .then(msg => console.log(msg))
  .catch(err => console.log(err))