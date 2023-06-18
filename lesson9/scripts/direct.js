fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const empresasLista = document.getElementById('empresas-lista');

    // Iterar sobre los datos del archivo JSON
    data.empresas.forEach(empresa => {
      // Crear elementos HTML para cada empresa
      const listItem = document.createElement('li');
      const nombre = document.createElement('h3');
      const direccion = document.createElement('p');
      const telefono = document.createElement('p');
      const enlace = document.createElement('a');
      const logo = document.createElement('img');

      // Asignar valores a los elementos
      nombre.textContent = empresa.nombre;
      direccion.textContent = 'Address: ' + empresa.direccion;
      telefono.textContent = 'Phone: ' + empresa.telefono;
      enlace.textContent = 'Details';
      enlace.href = empresa.url;
      logo.src = empresa.logo;

      // Agregar elementos al listItem
      listItem.appendChild(nombre);
      listItem.appendChild(direccion);
      listItem.appendChild(telefono);
      listItem.appendChild(logo);
      listItem.appendChild(enlace);

      // Agregar listItem a la lista de empresas
      empresasLista.appendChild(listItem);
    });
  });

  

  