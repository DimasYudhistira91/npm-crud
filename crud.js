const Joi = require('@hapi/joi');
const express = require('express');
const app = express();

app.use(express.json());

// Hard Data Code :
const siswa = [
  { id: 1, nama: 'Dimas' },
  { id: 2, nama: 'Dul Kempit' },
  { id: 3, nama: 'Karto Tuying' }
];

app.get('/api/siswa', (req, res) => {
  res.send(siswa);
});























// PORT
const port = process.env.port || 3500;
app.listen(port, () => console.log(`Listening on port ${port}...`));