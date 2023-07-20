const lastModifiedElement = document.getElementById('last-modified');
const lastModifiedDate = new Date(document.lastModified);
const options = { year: 'numeric', month: 'long', day: 'numeric' };
const formattedDate = lastModifiedDate.toLocaleDateString('en-US', options);
lastModifiedElement.textContent += formattedDate;