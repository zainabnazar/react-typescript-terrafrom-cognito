const express = require('express')
const app = express()


app.get('/', function (req, res) {
    res.send('Hello World')
})
app.post('/send-form-to-decision-api', function (req, res) {
    console.log(req.body);
    res.json({ "message": "form submitted" })
})
app.listen(5000, () => {
    console.log("Listening to port 5000")
})