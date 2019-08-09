const Joi = require('@hapi/joi');
const siswa = require('./routes/siswa');
const express = require('express');
const app = express();

app.use(express.json());
app.use('/api/siswa', siswa);

// PORT
const port = process.env.port || 3500;
app.listen(port, () => console.log(`Listening on port ${port}...`));