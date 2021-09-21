var path = require('path');

var BUILD_DIR = path.resolve(__dirname, './dist');
var APP_DIR = path.resolve(__dirname, './src');

const configDirs = {
  BUILD_DIR: BUILD_DIR,
  APP_DIR: APP_DIR
}

function buildConfig(env,options) {
  if (options.mode === 'development' || options.mode === 'production') {
    return require('./config/' + options.mode + '.js')(configDirs);
  } else {
    console.log("Wrong webpack build parameter. Possible choices: 'dev' or 'prod'.")
  }
}

module.exports = buildConfig;