const express = require('express'),
app = express(), //APP type
port = process.env.PORT || 3000; //The port that the application will listen on.
Ship = require('./api/models/SpaceShipModels')

app.use(express.urlencoded({ extended: true }))
app.use(express.json());

const routes = require('./api/routes/SpaceShipRoutes'); //importing route
routes(app); //register the route

app.get('*', (req, res)=>{
res.status(404).send({url: req.originalUrl + ' not found'})
})

app.listen(port);
console.log('book list RESTful API server started on: ' + port);