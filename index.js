import express from "express";
import bodyParser from "body-parser";
import ejs from "ejs";
import { dirname } from "path";
import { fileURLToPath  } from "url";
import path from "path";

// const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended:true }));

app.set('view engine', 'ejs');

// const delebut= document.getElementById(del-but);
let Todolistall = [];
let authorized = false;



app.get("/", (req,res) =>{
    
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var today  = new Date();
    let day = today.toLocaleDateString("en-US", options);
    res.render("index", {day : day, Todolistall : Todolistall,authorized:authorized});
});
app.post("/", (req,res) =>{
    
    let newitem = req.body.ToDo
    const result = newitem. replaceAll(' ', ''). length
    if (result> 0 && result <= 40){
        authorized = true
        Todolistall.push(newitem);
        authorized:false;
    }else{};
     if (result === 0){
        res.send('alert("no input")');
    }else{};
    if (result !== 0 && result > 40){
        res.send('alert("not more than 40 letters")');
    }else{};
    
    res.redirect("/");
})
app.post("/sub", (req,res)=>{
    Todolistall = [];
    res.redirect("/");
})

app.listen(port, () =>{
    console.log(`server is running on port ${port}.`);
});