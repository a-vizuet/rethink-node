const app = require('./app');
const rethink = require('rethinkdb');

(async () => {

  try {
    await rethink.connect({ host: '127.0.0.1', port: 28015 });
    await app.listen(process.env.PORT || 3030);

    console.log('Servidor escuchando!');
  } catch (error) {
    console.log(error);
  }
})();