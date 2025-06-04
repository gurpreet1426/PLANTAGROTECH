const express= require('express');
const app = express();
app.get('/api/get', (req,res)=>{
    res.send({message:'Node JS api deployement'})
})
app.get('/api/get/user', (req,res)=>{
    res.send({name:'Dev', email:"gurpreet", 'role':'admin'})
})
app.listen(9000,(req,res)=>{
    console.log('server running on port 9000')
})