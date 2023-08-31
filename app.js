const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const blogRoutes = require('./routes/blogRoutes')
require('dotenv').config()

// connect to mongo
const dbURI = process.env.DB_URI
mongoose.connect(dbURI)
  .then((res) => app.listen(3000))
  .catch((err) => console.log(err))

// express app
const app = express()

// register  view engine
app.set('view engine', 'ejs')

// middleware & listening static files
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true })) // to accept form data
app.use(morgan('dev'))

// Routes

app.get('/', (req, res, next) => {
  res.render('index', { title: 'Home'})
})

app.get('/about', (req, res) => {
  res.render('about', { title: 'About'})
})

// Blog Routes
app.use('/blogs', blogRoutes) // /blogs'tan sonraki route'lar

// Redirects
app.get('/about-us', (req, res) => {
  res.redirect('/about')
})

// 404 Page
app.use((req, res) => {
  res.status(404).render('404', { title: '404'})
})