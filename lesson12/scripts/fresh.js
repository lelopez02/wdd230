function loadJSON(callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'fruits.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            callback(JSON.parse(xobj.responseText));
        }
    };
    xobj.send(null);
}

// Function to populate the select elements with available fruits
function populateFruitSelects(data) {
    const selectElements = document.querySelectorAll('select[id^="fruit"]');
    const fruits = data;

    for (let i = 0; i < selectElements.length; i++) {
        for (let j = 0; j < fruits.length; j++) {
            const option = document.createElement('option');
            option.value = fruits[j].name;
            option.textContent = fruits[j].name;
            selectElements[i].appendChild(option);
        }
    }
}

// Function to handle form submission and display output
function submitForm() {
    const firstName = document.getElementById('firstName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const fruit1 = document.getElementById('fruit1').value;
    const fruit2 = document.getElementById('fruit2').value;
    const fruit3 = document.getElementById('fruit3').value;
    const specialInstructions = document.getElementById('specialInstructions').value;
    const currentDate = new Date();

    // Calculate and display nutritional information here...

    // Display the output area with the submitted data
    document.getElementById('outputFirstName').textContent = firstName;
    document.getElementById('outputEmail').textContent = email;
    document.getElementById('outputPhone').textContent = phone;
    document.getElementById('outputFruits').textContent = `${fruit1}, ${fruit2}, ${fruit3}`;
    document.getElementById('outputInstructions').textContent = specialInstructions;
    document.getElementById('outputDate').textContent = currentDate.toDateString();

    document.getElementById('outputArea').style.display = 'block';
}

// Load JSON data and populate the form selects on page load
document.addEventListener('DOMContentLoaded', function () {
    loadJSON(function (data) {
        populateFruitSelects(data);
    });
});