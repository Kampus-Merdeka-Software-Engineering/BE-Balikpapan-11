require('dotenv').config();
const cors = require('cors');
const express = require('express');
const app = express();


const  contactusRoutes  = require('./routes/contactusRoutes');
const  coursesRoutes  = require('./routes/coursesRoutes');

app.use(cors()); // untuk mengaktifkan cors, agar API bisa diakses dari luar atau dari frontend
app.use(express.json()) // parse request body dari JSON ke Object
app.use(express.urlencoded({ extended: true })) // parse request body dari x-www-form-urlencoded ke Object


app.get('/', (req, res) => {
    res.send('Hello Word');
});

app.use("/courses", coursesRoutes);
app.use("/contactus", contactusRoutes);
//routes contactus

const PORT = process.env.PORT || 5500;

app.listen(PORT, () => {
    console.log('Berjalan Di Port '+ PORT);
});
