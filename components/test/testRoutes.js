const api = require('express').Router();
const testController = require('./testController');

api.get('/GetTest/:testId', testController.getTest);
api.get('/GetTests', testController.getTests);
api.post('/AddTest', testController.addTest);
api.put('/UpdateTest/:testId', testController.updateTest);
api.delete('/RemoveTest/:testId', testController.removeTest);

module.exports = api;