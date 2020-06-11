require('dotenv').config();
const { PORT } = require('./config/constant');
const { app } = require('./app');

app.listen(PORT, () => console.log(`server is up on ${JSON.parse(process.env.SSL) ? 'https' : 'http'}://localhost:${PORT}`));
