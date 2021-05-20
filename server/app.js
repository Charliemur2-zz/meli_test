const express = require('express');
const bodyParser = require('body-parser');
const url = require('url');
const querystring = require('querystring');
const axios = require('axios');
let app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
let query;

//http://localhost:8081/api/items?q=silla

app.get('/api/items/', function (req, res) {
        let query = req.query.q;
	axios.get('https://api.mercadolibre.com/sites/MLA/search?limit=4&q=' + query)
 	 .then(function (response) {
 	       let items = response.data.results.map((item) => ({
		        id: item.id,
			title: item.title,
			price: {
			   currency: item.currency_id,
			   amount: parseInt(item.price, 10),
			   decimals: item.price - parseInt(item.price, 10)
			},
			picture: item.thumbnail,
			condition: item.condition,
			free_shipping: item.shipping.free_shipping
			}));		
		api = {
		author: {
		name: "Carlos",
		lastname: "Murcia"
		},
		categories: ['Hogar', 'Muebles', 'Jardín'],
		items: items
		};
          res.end(JSON.stringify(api));
	  })
	  .catch(function (error) {
	   console.log(error);
	  })	
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})
