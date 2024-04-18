const express = require('express')
const app = express()
const PORT = 3000
const fs = require('fs');

app.set('view engine', 'ejs')
app.use(express.static('static'))


app.get('/', (req, res) => {
    res.render('test_template_background');
})






/*
app.get('/main', (req, res) => {
    res.render('main_page')
})

app.get('/components', (req, res) => {
    res.render('components_page')
})

app.get('/configurator', (req, res) => {
    res.render('configurations_page')
})

app.get('/reports', (req, res) => {
    res.render('reports_page')
})
app.get('/settings', (req, res) => {
    res.render('settings_page')
})

*/


app.listen(PORT, () =>{
    console.log(`Server started: http://localhost:${PORT}`)
})