const config = require('./Config.jsx');

server.listen(config.port, () => {
  console.log(`WebSocket server is running on port ${config.port}`);
});
