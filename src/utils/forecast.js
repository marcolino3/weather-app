const request = require('postman-request');

const forecast = (longitude, latitude, callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=7b2cc21ef1a98f72e750b132cacea235&query=' + latitude + ',' + longitude + '&units=m';
    
    request({url, json: true }, (error, { body }) => {

        if (error) {
            callback('Unable to connect to server', undefined);
        } else if (body.error) {
            callback('No valid location', undefined);
        } else {
            callback(undefined, {
                weather: body.current.weather_descriptions[0],
                temperature: body.current.temperature,
                rainChance: body.current.precip
            });
        }
    });

};

module.exports = forecast;