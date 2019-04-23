const app = require('express')();
const bodyParser = require('body-parser');
const testRoutes = require('./components/test/testRoutes');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', [
  testRoutes
]);

module.exports = app;