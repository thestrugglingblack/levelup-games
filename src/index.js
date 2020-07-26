const Hapi = require('@hapi/hapi');
import IndexRoutes from './routes';

const config = {
  port: 1234,
  host: 'localhost',
};
const server = Hapi.server(config);

server.route([...IndexRoutes]);

// Initiate the server
const init = async () => {
  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();

module.exports = server;




