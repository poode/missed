const path = require('path');
const fs = require('fs');
const https = require('https');

require('dotenv').config();
const { PORT } = require('./config/constant');
const { app } = require('./app');


const credentials = {
  key: fs.readFileSync(path.resolve(`${__dirname}/config/ssl/ropsystem.com.key`), 'utf8'),
  cert: fs.readFileSync(path.resolve(`${__dirname}/config/ssl/ropsystem.com.crt`), 'utf8'),
};

const secureServer = https.createServer(credentials, app);

secureServer.listen(PORT, () => console.log(`server is up on ${JSON.parse(process.env.SSL) ? 'https' : 'http'}://localhost:${PORT}`));
