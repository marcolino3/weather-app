// Selectors
const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const message1 = document.querySelector('#message-1');
const message2 = document.querySelector('#message-2');


weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const location = search.value;

    message1.textContent = 'Loading...';
    message2.textContent = '';
    
    fetchingData(location);
});

const fetchingData = (location) => {

    fetch('http://localhost:3000/weather?address=' + location)
    .then((response) => {
        response.json().then((data) => {

            if (data.error) {
                return message1.textContent = data.error;
            }

            message1.textContent = data.location;
            message1.textContent = 'Temperature: ' + data.forecastData.temperature + ', Weather: ' + data.forecastData.weather;
            
        });
    });
};

