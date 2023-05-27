const bodyParser = require('body-parser');
const express = require('express');


const app = express();

app.use(bodyParser.urlencoded({extended:true}))

app.get('/', (req, res)=>{
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post('/bmicalculator', (req, res)=>{
    let weight = parseFloat(req.body.weight);
    let height = parseFloat(req.body.height);

    let bmiResult = weight / (height *height);
    res.send('Your BMI is ' + bmiResult);
    //console.log('hii');
});

app.listen(3000, ()=>{
    console.log("Listening on port 3000...");
});