/*
const fs = require('fs');

if (fs.existsSync('./package2.json')){
	console.log('Yes');
}else{
	console.log('No');
}
*/

const http = require('http');
const welcomeController = require('./controllers/welcome');
const profileController = require('./controllers/profile');
const pageNotFound404Controller = require('./controllers/pageNotFound404');
const assetsController = require('./controllers/assets');
const imageController = require('./controllers/image');


http.createServer((req, res)=>{
	//console.log(req.url);
	//console.log(req.method);
	//console.log(req.headers);
	//res.writeHead(200);
	//res.end('Hello, World');

	console.log(/\/welcome/.test(req.url));
	console.log(/\/img/.test(req.url));
	switch(true){
		case /^\/$/.test(req.url):
			welcomeController(req, res);
			break;
		
		case /\/welcome/.test(req.url):
			welcomeController(req, res);
			break;
		
		case /\/profile/.test(req.url):
			profileController(req, res);
			break;
			// /assets/image231x218px.jpg
		
		case /\/img/.test(req.url):
			imageController(req, res);
			break;

		case /\/assets\/.+/.test(req.url):
			assetsController(req, res);
			break;
		
		default:
			pageNotFound404Controller(req, res);
	}

}).listen(3030, () => console.log('Server working on port 3030...'));

