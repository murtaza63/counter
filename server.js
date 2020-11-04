let express = require('express')
let path = require('path')
let app = express()
let port = process.env.PORT || 3000
app.use(express.static('public'))


app.get("/",  function(req, res){
 res.sendFile(path.join(__dirname + '/index.html'))
})



app.listen(port, function(){
    console.log("App is listening on port: " + port)
})