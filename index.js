//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"))
var items=["Cooding","Ben 10","Library"]
var works=[];

var option={
    weekday:"long",
    day:"numeric",
    month:"long"
}
var today = new Date();


app.get('/', (req, res) => {
    var day = today.toLocaleDateString("en-US",option);
    res.render('index', {day: day,newListItems: items});
});

app.get('/work',(req,res)=>{
    res.render('index',{day:"Work",newListItems:works})
})

app.post('/',(req,res)=>{
    console.log(req.body);
    var item = req.body.newItem;
    if(req.body.button==="Work"){
        works.push(item);
        res.redirect('/work')
    }
    else{
        items.push(item)
        res.redirect('/')
    }
   
})



app.listen(4000, () => console.log('Example app listening on port 4000!'));