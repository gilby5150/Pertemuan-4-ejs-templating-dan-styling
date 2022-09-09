const express = require('express')
const app = express()
const port = 3000
const path = require('path');

// information using EJS
app.set('view engine','ejs');

// URL Default
app.get('/',(req,res)=>{
    res.render('index',{name:"GILBY"});
});
// URL contact
app.get('/contact',(req,res)=>{
    res.render('contact');
})
// URL About
app.get('/about',(req,res)=>{
    res.render('about');
})
// URL Product/:id
app.get('/product/:id',(req,res)=>{
    res.send(`product id: ${req.params.id}<br>kategori: ${req.query.category}`);
})
//default jika memasukan url yang tidak ada
app.use('/',(req,res)=>{
    res.status(404)
    res.send('<h1>PAGE NOT FOUND : 404</h1>');
})

// listen port
app.listen(port,() =>{
    console.log(`Example app listening on port${port}`);
})