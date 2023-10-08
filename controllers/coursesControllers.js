const { getcoursesServices, getcoursesServicesbyid } = require('../services/coursesServices')

const getcoursesControllers = async (req, res) => {
    const courses = await getcoursesServices()
    res.status(200).json(courses)
}

const getcoursesbykategori = async (req, res) => {
    const courses = await getcoursesServicesbyid(req.params.id)
    res.status(200).json(courses)
} 

module.exports = {
    getcoursesControllers, getcoursesbykategori
}