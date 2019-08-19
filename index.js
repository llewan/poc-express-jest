const express = require('express');
const app = express();
const router = require('./src/router');

app.use(router);
app.listen(3000, () => { console.log('Running') });
