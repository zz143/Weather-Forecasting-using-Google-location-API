/*const request = require('request');

const yargs = require('yargs');
const argv = yargs.argv;

var encodedAddress = encodeURIComponent(argv.address);

request({
	url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
	json: true
}, (error, response, body) => {
	if(error){
		console.log('Unable To Connect To Google Servers..!!')
	}
	else if(body.status === 'ZERO_RESULTS'){
		console.log('please enter valid Address');
	}
	console.log(`Address: ${body.results[0].formatted_address}`);
	console.log(`Lat: ${body.results[0].geometry.location.lat}`);
	console.log(`Lng: ${body.results[0].geometry.location.lng}`);
});*/

///8a4e37bd06ff42d9ff12adc442b90995
const request = require('request');
request({
	url: "https://api.darksky.net/forecast/8a4e37bd06ff42d9ff12adc442b90995/28.5355161,77.3910265",
	json: true
}, (error, response, body) => {
	if(error){
		console.log('Unable To Connect To Google Servers..!!')
	}
	console.log(`Temp: ${body.currently.temperature}`);
});