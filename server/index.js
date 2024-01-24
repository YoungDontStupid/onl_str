require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const path = require('path')

const PORT = process.env.PORT || 5000

const app = express()

app.use(cors()) // cors - библиотека для заспросов с браузера

app.use(express.json()) // приложение сможет парсить json формат

// явно указываем серверу, что файлы из папки статик будем раздавать как статик
// можем обращаться ко всем файлам из папки static и получать их
app.use(express.static(path.resolve(__dirname,'static')))
app.use(fileUpload({}))// пакет для работы с файлами

app.use('/api',router)

app.use(errorHandler)// Обработка ошибок, последний middleware 

// Функция для подключения к БД (все функции при работе с БД являются ассинхронными)
const start = async () => {
    try {
        await sequelize.authenticate() // установка подключения к БД
        await sequelize.sync() // сверяет состояние БД со схемой данных
        app.listen(PORT, () => console.log(`Сервер запущен на порту: ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()
