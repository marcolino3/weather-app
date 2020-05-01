const request = require('postman-request');

const geocode = (address, callback) => {

    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) +'.json?access_token=pk.eyJ1IjoibW1hcnJhbmNoZWxsaSIsImEiOiJjazlja2IxcmUwMDU5M2Rxa3o3eHNlbjllIn0.JJI6GuRn-lLx4Pe3ZCERSQ&limit=1';

    request({url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect', undefined);
        } else if (body.features.length === 0) {
            callback('Unable to find location', undefined);
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            });
        }
    });
};

module.exports = geocode;