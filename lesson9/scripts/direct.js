const requestURL =
"https://github.com/lelopez02/wdd230/blob/main/lesson9/data.json"
fetch(requestURL)
  .then(response => response.json())
  .then(data => {
    const empresasLista = document.getElementById('companies-list');

    // Iterate over the data in the JSON file
    data.empresas.forEach(empresa => {

      // Crear elementos HTML para cada empresa
      const listItem = document.createElement('li');
      const nombre = document.createElement('h3');
      const direccion = document.createElement('p');
      const telefono = document.createElement('p');
      const enlace = document.createElement('a');

      // Assign values to elements
      nombre.textContent = companie.name;
      direccion.textContent = 'Address: ' + companie.address;
      telefono.textContent = 'Phone: ' + companie.phone;
      enlace.textContent = 'Visit website';
      enlace.href = empresa.url;

      // Agregar elementos al listItem
      listItem.appendChild(name);
      listItem.appendChild(address);
      listItem.appendChild(phone);
      listItem.appendChild(link);

      empresasLista.appendChild(listItem);
    });
  });