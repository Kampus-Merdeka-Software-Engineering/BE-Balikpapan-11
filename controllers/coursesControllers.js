const { getcoursesServices } = require('../services/coursesServices')

const getcoursesControllers = async (req, res) => {
    const courses = await getcoursesServices()
    res.status(200).json(courses)
}

module.exports = {
    getcoursesControllers
}