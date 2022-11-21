const router = require("express").Router();
const { getAllAirline, createAirline, updateAirline, deleteAirline, getAirline, airlineByCountry, getAirlineByCompanies } = require('../controller/country-controller');


router.get('/', getAllAirline);
router.post('/create', createAirline);
router.put('/update/:id', updateAirline);
router.delete('/delete/:id', deleteAirline);
router.get('/byId/:id', getAirline);
router.get('/byCountry/:country', airlineByCountry);
router.get('/byCompanies/:Companies', getAirlineByCompanies)


module.exports = router;