const {prisma} = require('../config/prisma')
const getcoursesServices = async () => {
    const courses = await prisma.courses.findMany()
    return courses
}
const createcoursesServices = async (data) => {
    const {name,video,gambar,kategori} = data;

    const createdcourses = await prisma.courses.create({
        data: {
            name,
            video,
            gambar,
            kategori
        }
    })

    return createdcourses
} 

module.exports = {getcoursesServices}