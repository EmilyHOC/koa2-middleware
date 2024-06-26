const tools = {
  normalizePort(val) {
    const port = parseInt(val, 10);
    if (Number.isNaN(port)) {
      // named pipe
      return val;
    }
    if (port >= 0) {
      // port number
      return port;
    }
    return false;
  },

};

module.exports = tools;
