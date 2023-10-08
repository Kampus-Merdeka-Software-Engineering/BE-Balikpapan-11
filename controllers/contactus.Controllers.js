const { getcontatcsusServices } = require('../services/contactusServices')

const getcontactusControllers = async (req, res) => {
    const contactus = await getcontatcsusServices()
    res.status(200).json(contactus)
}

module.exports = {
    getcontactusControllers
}