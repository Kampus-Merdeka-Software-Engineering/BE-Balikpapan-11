require('dotenv').config();
const cors = require('cors');
const express = require('express');
const app = express();



app.use(cors()); // untuk mengaktifkan cors, agar API bisa diakses dari luar atau dari frontend
app.use(express.json()) // parse request body dari JSON ke Object
app.use(express.urlencoded({ extended: true })) // parse request body dari x-www-form-urlencoded ke Object


app.get('/', (req, res) => {
    res.send('Hello Word');
});

app.listen(3000, () => {
    console.log('Berjalan Di Port 3000!');
});