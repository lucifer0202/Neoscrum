const mongoose = require("mongoose")

mongoose.connect(
    'mongodb+srv://admin:admin@cluster0.rtnuv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    {useUnifiedTopology: true},
     () => {
    console.log("Connected to MongoDB !!")
  })
  