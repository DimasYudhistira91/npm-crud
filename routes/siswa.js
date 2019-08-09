const express = require('express')
const router = express.Router();

// Hard Data Code :
const siswa = [
    { id: 1, nama: 'Dimas' },
    { id: 2, nama: 'Dul Kempit' },
    { id: 3, nama: 'Karto Tuying' }
  ];
  
  // GET request
  router.get('/', (req, res) => {
    res.send(siswa);
  });
  
  // POST request
  router.post('/', (req, res) => {
    // handling error 400 bad request :  *ini adalah step 2
    const {error} = validasiSiswa(req.body);
    if (error) return res.status(400).send(error.details[0].message);
  
    // ini adalah step 1 dari POST request
    const dataSiswa = {
      id  : siswa.length + 1,
      nama: req.body.nama
    };
    siswa.push(dataSiswa);
    res.send(dataSiswa);
  });
  
  // PUT request
  router.put('/:id', (req, res) => {
    // handling error 404 not found *step 2
    const dataSiswa = siswa.find(i => i.id === parseInt(req.params.id));
    if (!dataSiswa) return res.status(404).send('Data siswa dengan id ini tidak ditemukan');
  
    // handling error 400 *step 3
    const {error} = validasiSiswa(req.body);
    if (error) return res.status(400).send(error.details[0].message);
  
    // *step 1 PUT request
    dataSiswa.nama = req.body.nama;
    res.send(dataSiswa);
  
  });
  
  // DELETE request
  router.delete('/:id', (req, res) => {
    // handling error 404 not found *step 2
    const dataSiswa = siswa.find(i => i.id === parseInt(req.params.id));
    if (!dataSiswa) return res.status(404).send('Data siswa dengan id ini tidak ditemukan');
  
    const index = siswa.indexOf(dataSiswa);
    siswa.splice(index, 1);
  
    res.send(siswa);
  })
  
  // VALIDASI REQUEST
  function validasiSiswa(dataSiswa) {
    const skema = {
      nama: Joi.string().min(3).required()
    };
    return Joi.validate(dataSiswa, skema);
  }

  module.exports = router;