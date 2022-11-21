const express = require('express');
const cors = require('cors');
const app = express();
const port = 3002;
const routerTravels = require('./Router/travel-route');
const routerAirline = require('./Router/country-route');
const routerFly = require('./Router/fly-route');

app.use(express.json({extended:true}));
app.use(express.urlencoded({extended:true}));
app.use(cors())
app.use('/Travels',routerTravels);
app.use('/Airline',routerAirline);
app.use('/fly',routerFly);

app.get('/',(req,res)=>{
    res.send("hello world");
});





app.listen(port,()=>{
    console.log(`hello from port : ${port}`);
});