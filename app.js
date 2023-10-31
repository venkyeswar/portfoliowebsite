const express=require('express');
const path=require('path');

const userRoutes=require('./routes/user.routes');

const app=express();

app.use(express.static('public'));
app.use(express.static('photos'));
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use(userRoutes);

let port=3001;

if(process.env.PORT){
    port=process.env.PORT;
}
app.listen(port);