require('dotenv').config();

const mongoose = require('mongoose');

const connectionStr = "mongodb+srv://Karla:1234@cluster0.qy0a8hc.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(connectionStr, {useNewUrlparser: true})
.then(() => console.log('connected to mongodb'))
.catch(err => console.log(err))

mongoose.connection.on('error', err => {
  console.log(err)
})



