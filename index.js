// console.log("hello world");

const express = require('express')
const mongoose = require('mongoose');
const app = express()

app.listen(3000, ()=>{
    console.log('server is running on port 3000');
});


app.get('/', (req, res)=> {
    res.send("Hello from node API Server");
});

mongoose.connect("mongodb+srv://aghp81:DAHHNyAufi9OWwLv@backenddb.qogzrsv.mongodb.net/node-crud-API?retryWrites=true&w=majority&appName=backendDB").then(() => {
    console.log("به دیتابیس وصل شدید Success")
})
.catch(() => {
    console.log("خطا در اتصال به دیتابیس failed")

})