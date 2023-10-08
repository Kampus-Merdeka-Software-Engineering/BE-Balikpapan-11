const { createcoursesServices } = require("../services/coursesServices");
const data = [
    {
        name: "Belajar HTML CSS Part 1",
        video: "https://youtube.com/38yhdsji",
        gambar: "https://kampus-merdeka-software-engineering.github.io/FE-Balikpapan-11/design/images/thumb-1.png",
        kategori: 1,
    },
    {
        name: "Belajar HTML CSS Part 2",
        video: "https://youtube.com/38yhdsji",
        gambar: "https://kampus-merdeka-software-engineering.github.io/FE-Balikpapan-11/design/images/thumb-1.png",
        kategori: 1,
    },
    {
        name: "Belajar HTML CSS Part 3",
        video: "https://youtube.com/38yhdsji",
        gambar: "https://kampus-merdeka-software-engineering.github.io/FE-Balikpapan-11/design/images/thumb-1.png",
        kategori: 1,
    },
    {
        name: "Belajar HTML CSS Part 4",
        video: "https://youtube.com/38yhdsji",
        gambar: "https://kampus-merdeka-software-engineering.github.io/FE-Balikpapan-11/design/images/thumb-1.png",
        kategori: 1,
    }
]

// insert data into database
for(let i = 0; i < data.length; i++){
    createcoursesServices(data[i])
}