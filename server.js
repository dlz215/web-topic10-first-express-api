let express = require('express')
let routes = require('./routes/routes')
let path = require('path')

let app = express()

// Vue app files are called static files - do not change, are same for every user who visits site
// Different data may be served based on how user interacts with site
// Joining hello-vue directory with dist directory
app.use(express.static(path.join(__dirname, 'hello-vue', 'dist')))

app.use('/api', routes)
// all paths will be relative to /api

let server = app.listen(process.env.PORT || 3000, function() {
    console.log('Express server running on port', server.address().port)
})
// Express server will listen first on port specified by device
// If no port specified, will use port 3000