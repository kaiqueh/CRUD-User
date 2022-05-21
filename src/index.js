const express = require('express');
const cors = require('cors');
const routes = require('./router');

const app = express();

app.use(express.json());

app.use(cors());

app.use(routes);

app.listen(3000, () => console.log('server esta na porta 3000 http://localhost:3000'));
