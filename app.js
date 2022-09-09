const express = require('express')
const app = express()
const port = 3000
const path = require('path');
const { title } = require('process');
const expressLayouts = require('express-ejs-layouts');

// information using EJS
app.set('view engine','ejs');

app.use(expressLayouts);

// URL Default
app.get('/',(req,res)=>{
    res.render('index',{name:"GILBY",title:"WebServer EJS",status:"home",navTitle:"Home Page"});
});
// URL contact
app.get('/contact',(req,res)=>{
    cont =[
        {
            name:"GILBY",
            email:'gilby5150@gmail.com'
        },
        {
            name:"asep",
            email:'asep@gmail.com'
        },
        {
            name:"asep hernandez",
            email:'hernandez@gmail.com'
        },
    ]
    res.render('contact'
    ,{
        title: 'WebServer EJS',
        cont,
        status:"contact",
        navTitle:"Contact Page"
    });
})
// URL About
app.get('/about',(req,res)=>{
    res.render('about',{title:"about page",status:"about",navTitle:"About Page"});
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