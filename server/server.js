const express = require('express');
const path = require('path');

let app = express();

const publicPath = path.join(__dirname, '../public');
app.use(express.static(publicPath));

app.listen(3000, ()=>{
    console.log(`Started up at port 3000`);

});