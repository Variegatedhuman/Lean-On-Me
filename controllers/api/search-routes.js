const router = require('express').Router();

// route to get api/search
router.post('/search', async (req, res) => {
    console.log(req.body);
  

    let markerList = [];
    if(req.body.category === "healthcare"){
        markerList = [{
            "name": "Northwestern Memorial Hospital",
            "lat": 41.8939,
            "lng": -87.6244,
        }]
    }

    try {     
        res.json({data:markerList });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/search', async (req, res) => {
    console.log(req.body);

    let markerList = [];
    if(req.body.category === "healthcare"){
        markerList = [{
            "name": "Northwestern Memorial Hospital",
            "lat": 41.8939,
            "lng": -87.6244,
        }]
    }


    try {     
        res.json({data:markerList});
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;