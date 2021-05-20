
const { Router } = require('express');
const router = Router();

let sites = require('../sample.json');
console.log(sites);


router.get('/sites', (req,res) =>{
    res.json(sites);
});

router.post('/sites', (req, res) => {
   
     console.log(req.body);
     let id = sites.length + 1;
     let newSite = {...req.body,id};
     console.log(newSite);
     sites.push(newSite);
     console.log(sites);
     res.json(sites);
    
});

router.post('/sites/like/:id', (req,res) =>{
    console.log(req.params.id)
    let id = req.params.id;
    
    sites.forEach(element => {
        if(element.id == id){
            element.likes++;
            console.log(element.likes);
            res.json(sites);
        }
    });
});

router.post('/sites/dislike/:id', (req,res) =>{
    console.log(req.params.id)
    let id = req.params.id;
    
    sites.forEach(element => {
        if(element.id == id){
            element.dislikes++;
            console.log(element.dislikes);
            res.json(sites);
        }
    });
});

module.exports = router;