const companies = {
  "companies": [
    {
      "name": "MercadoLibre",
      "address": "Arias 3751, C1430CRG CABA",
      "phone": "+54 11 4640-8000",
      "url": "https://www.mercadolibre.com.ar",
      "logo": "https://www.elsoldemexico.com.mx/mexico/2ucv8o-mercado-libre-logo.jpg/alternates/LANDSCAPE_768/mercado%20libre%20logo.jpg"
    },
    // ... Add other company objects here
  ]
};

const contentDiv = document.getElementById('content');
const toggleButton = document.getElementById('toggleView');

function displayCards() {
  contentDiv.innerHTML = '';
  companies.companies.forEach(company => {
    const card = `
      <div class="card">
        <img src="${company.logo}" alt="${company.name}">
        <h2>${company.name}</h2>
        <p>Dirección: ${company.address}</p>
        <p>Teléfono: ${company.phone}</p>
        <a href="${company.url}" target="_blank">Sitio web</a>
      </div>
    `;
    contentDiv.insertAdjacentHTML('beforeend', card);
  });
}

function displayList() {
  contentDiv.innerHTML = '<ul>';
  companies.companies.forEach(company => {
    const listItem = `
      <li>
        <h2>${company.name}</h2>
        <p>Dirección: ${company.address}</p>
        <p>Teléfono: ${company.phone}</p>
        <a href="${company.url}" target="_blank">Sitio web</a>
      </li>
    `;
    contentDiv.insertAdjacentHTML('beforeend', listItem);
  });
  contentDiv.insertAdjacentHTML('beforeend', '</ul>');
}

toggleButton.addEventListener('click', () => {
  if (contentDiv.innerHTML === '') {
    displayCards();
  } else if (contentDiv.firstChild.classList.contains('card')) {
    displayList();
  } else {
    displayCards();
  }
});

// Initially display the data as cards
displayCards();


/*fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const companiesList = document.getElementById('companies-list');

    // Iterar sobre los datos del archivo JSON
    data.companies.forEach(company => {
      // Crear elementos HTML para cada empresa
      const listItem = document.createElement('li');
      const name = document.createElement('h3');
      const address = document.createElement('p');
      const phone = document.createElement('p');
      const link = document.createElement('a');
      const logo = document.createElement('img');

      // Asignar valores a los elementos
      name.textContent = company.name;
      address.textContent = 'Address: ' + company.address;
      phone.textContent = 'Phone: ' + company.phone;
      link.textContent = 'Details';
      link.href = company.url;
      logo.src = company.logo;

      // Agregar elementos al listItem
      listItem.appendChild(name);
      listItem.appendChild(address);
      listItem.appendChild(phone);
      listItem.appendChild(logo);
      listItem.appendChild(link);

      // Agregar listItem a la lista de empresas
      companiesList.appendChild(listItem);
    });
  });
*/


  

  

  