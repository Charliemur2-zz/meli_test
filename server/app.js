const express = require('express');
const axios = require('axios');
const cors = require('cors');
let app = express();

app.use(cors());

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

//http://localhost:8081/api/items/MLA918635249
app.get('/api/items/:id', function (req, res) {
	const requestOne = axios.get('https://api.mercadolibre.com/items/' + req.params.id)
	const requestTwo = axios.get('https://api.mercadolibre.com/items/' + req.params.id + '/description')
	axios.all([requestOne, requestTwo])
 	  .then(axios.spread((...responses) => {
      const responseOne = responses[0];
      const responseTwo = responses[1];
      let api = {
        author: {
          name: "Carlos",
          lastname: "Murcia"
        },
			  item: {
		      id: responseOne.data.id,
          title: responseOne.data.title,
          price: {
              currency: responseOne.data.currency_id,
              amount: parseInt(responseOne.data.price, 10),
              decimals: responseOne.data.price - parseInt(responseOne.data.price, 10)
            },
          picture: responseOne.data.thumbnail,
          condition: responseOne.data.condition,
          free_shipping: responseOne.data.shipping.free_shipping,
          sold_quantity: responseOne.data.sold_quantity,
          description: responseTwo.data.plain_text
				}
			};
      res.end(JSON.stringify(api));
	  }))
	  .catch(function (error) {
	   console.log(error);
	  });
});

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})
