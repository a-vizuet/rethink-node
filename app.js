const app = require('express')();
const rethink = require('rethinkdb');

app.all('/', async (req, res) => {
  try {
    const allData = await rethink.table('test').getAll().run(require('./index')());
    
    res.send({allData});
  } catch (error) {
    res.send({error: error.msg});
  }
});

module.exports = app;