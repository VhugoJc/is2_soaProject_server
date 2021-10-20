const express = require('express');
const travelPackageController = require('../controllers/travelPackageController');
const api = express.Router();

api.post('/add-travel-package', travelPackageController.addTravelPackage);
api.get('/get-all-travel-packages',travelPackageController.getAllTravelPackages);
api.get('/get-travel-package',travelPackageController.getTravelPackageByShortcut);

module.exports = api;