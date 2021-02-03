const path = require('path');

module.exports = {
  rootDir: path.resolve(__dirname),
  transform: {
    '^.+\\.jsx?$': 'babel-jest'
  }
};
