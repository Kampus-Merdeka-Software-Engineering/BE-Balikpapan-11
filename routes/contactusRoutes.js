const express = require('express');
const contactusRoutes = express.Router();
const { prisma } = require('../config/prisma');
const { getcontactusControllers } = require('../controllers/contactus.Controllers');

contactusRoutes.get('/', getcontactusControllers );


contactusRoutes.post('/', async (req, res) =>  {
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

module.exports = { contactusRoutes }