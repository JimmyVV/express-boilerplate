
var router = require('express').Router();
var passport = require('./controller/passport');

// /passport/index.html

router.get(['/', '/index.html'], passport.index);
router.get('/test',(req,res,next)=>{
    res.json({
        message:"test"
    })
})



module.exports = router;