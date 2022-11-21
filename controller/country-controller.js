const AirlineModel = require('../model/country-model');

const getAllAirline = (req, res) => {
    if (AirlineModel && AirlineModel != []) {
        return res.send({ massage: "success", AirlineModel });
    };
    if (AirlineModel == []) {
        return res.send({ massage: "Airline is empty" });
    };
    return res.send({ massage: "Airline not found" });
};

const createAirline = (req, res) => {
    if (AirlineModel) {
        AirlineModel.push(req.body);
        return res.send({ massage: "success", AirlineModel });
    };
    return res.send({ massage: "Airline not available" });
};

const updateAirline = (req, res) => {
    const airlineById = AirlineModel.find(airlineId => airlineId.id == req.params.id);
    const airlineIndex = AirlineModel.indexOf(airlineById);
    if (airlineIndex > -1) {
        AirlineModel[airlineIndex] = req.body;
        return res.send({ massage: "success", AirlineModel });
    };
    return res.send({ massage: "airline is not available" });
};

const deleteAirline = (req, res) => {
    const airlineById = AirlineModel.find(airlineId => airlineId.id == req.params.id);
    const airlineIndex = AirlineModel.indexOf(airlineById);
    if (airlineIndex > -1) {
        AirlineModel.splice(airlineIndex, 1);
        return res.send({ massage: "success", AirlineModel });
    };
    return res.send({ massage: "airline not found" });
};

const getAirline = (req, res) => {
    const airlineById = AirlineModel.find(airlineId => airlineId.id == req.params.id);
    if (airlineById) {
        return res.send({ massage: "success", airlineById });
    };
    return res.send({ massage: "airline not found" });
};

const airlineByCountry = (req, res) => {
    const airlineByCountry = AirlineModel.filter(airlineCountry => airlineCountry.country == req.params.country);
    if (airlineByCountry) {
        return res.send({ massage: "success", airlineByCountry });
    };
    return res.send({ massage: "companies not found" });
};

const getAirlineByCompanies = (req, res) => {
    const companies = req.params.Companies;
    const airlineByCompanies = AirlineModel.filter(airlineCompanies => airlineCompanies.AirlineCompanies == companies.toUpperCase());
    if (airlineByCompanies) {
        return res.send({ massage: "success", airlineByCompanies });
    };
    return res.send({ massage: "AirlineCompanies not found" });
};

module.exports = {
    getAllAirline,
    createAirline,
    updateAirline,
    deleteAirline,
    getAirline,
    airlineByCountry,
    getAirlineByCompanies
};