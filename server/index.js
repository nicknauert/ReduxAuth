const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser')
const mognoose = require('mongoose');
const app = express();

const router = require('./router.js')

// App setup
app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/*' }));
router(app);



//Server setup

const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on:', port);
