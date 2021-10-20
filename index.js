const mongoose = require('mongoose');
const app = require('./app');
const port= process.env.PORT || 4000;
const {DB_MONGO} = require('./config');

mongoose.connect(DB_MONGO,{
    
},(err,res) =>{
    if(err){
        console.log(err);

    }else{
        console.log("Conexion DB Correcta");
        app.listen(port, ()=>{
            console.log("################");
            console.log("####API REST####");
            console.log("################");
            console.log(DB_MONGO);
        });
    }
});