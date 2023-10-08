const {prisma} = require('../config/prisma')
const getcontactusControllers = async () => {
    const contactus = await prisma.contactus.findMany()
    return contactus
}
 
module.exports = {getcontactusControllers}