let express = require('express')
// require the Express library

let router = express.Router()
// Create Router object. Will use object to match different requests to different paths.

router.get('/', function(req,
                         res, next) {
    res.json( {'message': 'hello!'} )
})

module.exports = router
// Another file will be able to include or require this file routes.js and be able to access router object

