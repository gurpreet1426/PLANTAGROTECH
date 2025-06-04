const express= require('express');
const app = express();
app.get('/api/get', (req,res)=>{
    res.send({message:'Node JS api deployement'})
})
app.get('/api/get/user', (req,res)=>{
    res.send({name:'Dev', email:"gurpreet", 'role':'admin'})
})
const router = require('./app/routes/router');
app.use('/', router);
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});