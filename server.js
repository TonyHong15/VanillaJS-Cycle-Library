/* Express server */
'use strict';
const log = console.log
log('Express server')

const express = require('express')
const app = express();

const path = require('path');

//static directory for files in /pub
app.use(express.static(path.join(__dirname, '/pub')))

//root route directs to html file with examples of my js library
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname + '/pub/examples.html'))
})
//Listening at port 5000 or specific enviornment port after deployment
const port = process.env.PORT || 5000
app.listen(port, () => {
	log(`Listening on port ${port}...`)
})  

