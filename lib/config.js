/* jshint node: true */

'use strict';

var env = process.env,
  prefix = 'MICROPUB_';

prefix = env[prefix + 'PREFIX'] || prefix;

if (!env[prefix + 'GITHUB_TOKEN']) {
  require('dotenv').load();
}

var config = {
  version : require('../package.json').version,
  // db : env.DATABASE_URL,
  // env : env.NODE_ENV || 'production',
  // port : env.PORT || 8080,
  github : {
    token : env[prefix + 'GITHUB_TOKEN'],
    client_id : env[prefix + 'GITHUB_ID'],
    client_secret :  env[prefix + 'GITHUB_SECRET'],
  }
};

// if (config.env === 'test') {
//   config.db = process.env.DATABASE_TEST_URL || "postgres://postgres@localhost/micropub_test";
// }

// if (config.https === undefined) {
//   config.https = (config.env === 'production');
// }

// config.userAgent = 'Micropub-For-GitHub/' + config.version + ' (https://github.com/voxpelli/webpage-micropub-github)';

module.exports = config;