const express = require('express');
// import {PORT} from "./config.js"
const mongoose = require('mongoose')
// const { Book } = require('./models/bookModel')
const cors=require('cors')
const booksRoute=require('./routes/booksRoute')

const app=express();
app.use(express.json());


app.use(cors())
//or
// app.use(
//     cors({
//         origin:'http://localhost:3000',
//         methods:['Get','Post','Put','Delete'],
//         allowedHeaders:['Content-type'],
//     })
// )

app.get('/',(req,res)=>{
    console.log(req)
    return res.status(234).send('welcome')
});

app.use('/books',booksRoute)

mongoose.connect("mongodb+srv://user:EQ8W19863ZPkKK2L@cluster.fecqgpc.mongodb.net/mern")
.then(() =>{
    console.log('Connected to the database')
    app.listen(5555,()=>{
        console.log(`App is listening in port: 5555`);
    });
})

.catch(err => console.log("Failed" + err))