const express = require('express');
const router = express.Router();


const { Subscriber } = require("../models/Subscriber");

const { auth } = require("../middleware/auth");

//=================================
//             Subscribe
//=================================

router.post("/subscribeNumber", (req, res) => {

    Subscriber.find({ "userTo": req.body.userTo })
    .exec((err, subscribe) => {
        if(err) return res.status(400).send(err)

        res.status(200).json({ success: true, subscribeNumber: subscribe.length  })
    })

});

module.exports = router;