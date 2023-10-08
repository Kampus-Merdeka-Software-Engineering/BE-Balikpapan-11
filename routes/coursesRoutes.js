const express = require('express');
const coursesRoutes = express.Router();
const { prisma } = require('../config/prisma');
const { getcoursesControllers } = require('../controllers/coursesControllers');

coursesRoutes.get('/', getcoursesControllers );


coursesRoutes.post('/', async (req, res) =>  {
    const { name, email, number, message } = req.body;
    console.log(req.body);
    const createdcontactus = await prisma.contactus.create({
        data: {
            name,
            email,
            number,
            message
        }
    })
    res.status(201).json({
        message: "pesan telah di tambahkan",
        data: createdcontactus
    })
});

module.exports =  coursesRoutes 