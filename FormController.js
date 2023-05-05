
const MyMessages = require('./FormModel');

//GET


module.exports.getMessage  =  (req, res) => {
  res.sendFile(__dirname + "/index.html")
     }


//POST

module.exports.saveMessage = (req, res) => {

  let newMessage = new MyMessages({
    name: req.body.name,
    email:req.body.email,
    message:req.body.message
})
newMessage.save()
res.sendFile(__dirname + '/answer.html')

}



