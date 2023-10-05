//                     Пакетный менеджер 
// let num = 5
// console.log(`Variable: ${num}`);

// const CC = require('currency-converter-lt')
// let currencyConverter = new CC({from:"USD", to:"JPY", amount:100})

// currencyConverter.convert().then((response) => {
//     console.log(`Resualt: ${response}`) 
// })
  
//                       Работа с модулями:

// const os = require('os') 
// let res = os.platform()
// console.log(res)

// const my_math = require('./my_math')
// let res1 = my_math.add(4, 5)
// let res2 = my_math.minus(5, 3)

// console.log(`Res1: ${res1}, Res2: ${res2}`)

//                      Работа с файлами:

// const fs = require('fs')

// fs.readFile('some.txt', 'utf-8', (err, data) => {
//     fs.writeFile('some.txt', data + '\nSome text', (err, data) => {
//             console.log('Всё сработало!')
//     })
// }) 

//                       Работа с папками (создание папки с файлом внутри, и удаление папки)

// const fs = require('fs')    

// fs.mkdirSync('text-files')

// fs.mkdir('text-files', () => {
//     fs.writeFile(',/text-files/some.txt', 'Helloe World!', () => {})
// })

// fs.unlink('./text-files/some.txt', () => {
//     fs.rmdir('./text-files', () => {})
// })

//                           Создание сервера

// const http= require('http')  

// let server = http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' })
//     res.end('Hello World!') 
// })

// const PORT = 3000
// const HOST = 'localhost'

// server.listen(PORT, HOST, () => {
//     console.log(`Сервер запущен: htpp://${HOST}: ${PORT}`)
// })




//            Работа с сервером №2 (отслеживание URL, шаблоны хтмл)

// const http = require('http')  
// const fs = require('fs')
// let server = http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
   
//     if (req.url == '/')
//         fs.createReadStream('./templates/index.html').pipe(res)
//     else if (req.url == '/about')
//         fs.createReadStream('./templates/about.html').pipe(res)
//     else
//         fs.createReadStream('./templates/error.html').pipe(res)
// }) 

// const PORT = 3000
// const HOST = 'localhost'

// server.listen(PORT, HOST, () => {
//     console.log(`Сервер запущен: htpp://${HOST}: ${PORT}`)
// })


//                      Express js (шаблонизаторы и ejs)

// const express = require('express')

// const app = express()

// app.set('view engine', 'ejs')


// app.get('/', (req, res) => {
//     res.render('index')
// })

// app.get('/about', (req, res) => {
//     res.render('about')
// })

// app.get('/user/:username', (req, res) => {
//     let data = {username: req.params.username, hobbies: ['Football', 'Skate', 'Basketball']}
//     res.render('user', data)
// })

// const PORT = 3000

// app.listen(PORT, () => {http://localhost:3000/about/user
//     console.log(`Server started: http://localhost:${PORT}`)

// })


// Подключение файлов. Статические файлы

// const express = require('express')

// const app = express()

// app.set('view engine', 'ejs')
// app.use(express.static('public'))

// app.get('/', (req, res) => {
//     res.render('index')
// })

// app.get('/about', (req, res) => {
//     res.render('about')
// })

// app.get('/user/:username', (req, res) => {
//     let data = {username: req.params.username, hobbies: ['Football', 'Skate', 'Basketball']}
//     res.render('user', data)
// })

// app.post('/check-user', (req, res) => {
//     console.log(req.body)
// })

// const PORT = 3000

// app.listen(PORT, () => {
//     console.log(`Server started: http://localhost:${PORT}`)

// })

// Получение информации от пользователя

const express = require('express')

const app = express()

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/user/:username', (req, res) => {
    let data = {username: req.params.username, hobbies: ['Football', 'Skate', 'Basketball']}
    res.render('user', data)
})

app.post('/check-user', (req, res) => {
    console.log(req.body)
})

const PORT = 3000

app.listen(PORT, () => {
    console.log(`Server started: http://localhost:${PORT}`)

})
