'use strict';

require('dotenv').config();

/** Requirement of PORT from .env */
require('./lib/server.js').start(process.env.PORT);

