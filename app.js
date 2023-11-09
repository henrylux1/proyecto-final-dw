const express = require('express')
const hbs = require('hbs')
require('dotenv').config();

const app= express()
const port=  process.env.PORT 

app.set('view engine', 'hbs')

hbs.registerPartials(__dirname +'/views/partials')



app.use(express.static('public'))

app.get('/', (req,res)=>{
    res.render('home', {
        nombre: 'Henry Isaias',
        titulo: 'Portafolio'
    })
})

app.get('/proyecto1', (req,res)=>{
    res.render('proyecto1', {
        nombre: 'Henry Isaias',
        titulo: 'Portafolio'
    })
})

app.get('/elements', (req,res)=>{
    res.render('elements', {
        nombre: 'Henry Isaias',
        titulo: 'Portafolio'
    })
})

app.get('/proyecto2', (req,res)=>{
    res.render('proyecto2', {
        nombre: 'Henry Isaias',
        titulo: 'Portafolio'
    })
})

app.get('/proyecto3', (req,res)=>{
    res.render('proyecto3', {
        nombre: 'Henry Isaias',
        titulo: 'Portafolio'
    })
})

app.get('/proyecto4', (req,res)=>{
    res.render('proyecto4', {
        nombre: 'Henry Isaias',
        titulo: 'Portafolio'
    })
})

app.get('/proyecto5', (req,res)=>{
    res.render('proyecto5', {
        nombre: 'Henry Isaias',
        titulo: 'Portafolio'
    })
})

app.get('/proyecto6', (req,res)=>{
    res.render('proyecto6', {
        nombre: 'Henry Isaias',
        titulo: 'Portafolio'
    })
})

app.get('/home', (req,res)=>{
    res.render('home', {
        nombre: 'Henry Isaias',
        titulo: 'Portafolio'
    })
})

app.get('/home', (req,res)=>{
    res.sendFile(__dirname+'/public/home')
})

app.get('/proyecto2', (req,res)=>{
    res.sendFile(__dirname+'/public/proyecto2')
})

app.get('/proyecto3', (req,res)=>{
    res.sendFile(__dirname+'/public/proyecto3')
})

app.get('/proyecto4', (req,res)=>{
    res.sendFile(__dirname+'/public/proyecto4')
})

app.get('/proyecto5', (req,res)=>{
    res.sendFile(__dirname+'/public3/proyecto5')
})

app.get('/proyecto6', (req,res)=>{
    res.sendFile(__dirname+'/public/proyecto6')
})

app.get('/proyecto1', (req,res)=>{
    res.sendFile(__dirname+'/public/proyecto1')
})

app.get('*',(req,res)=>{
    res.sendFile(__dirname + '/public/Template/404.hbs')
})

app.listen(port, ()=>{
    console.log(`Example app listening at http://localhost ${port}`);
})