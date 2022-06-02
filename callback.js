/*setTimeout(() => {
    console.log('Hola Mundo');
  }, 1000);
*/
  const getUsuarioById = (id) => {
    const usuario = {
      id,
      nombre: 'Victor'
    };
  
    setTimeout(() => {
      console.log(usuario);
    }, 1500);
  };
  
  getUsuarioById(10);