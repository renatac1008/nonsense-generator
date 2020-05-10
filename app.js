//include packages and define server related variables
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const generateNonsense = require('./generate_nonsense')
const app = express()
const port = 3000

const hb = exphbs.create({
  defaultLayout: 'main',
  helpers: {
    keep: function (v1, v2) { return (v1 === v2) }
  }
})

//set template engine
app.engine('handlebars', hb.engine)
app.set('view engine', 'handlebars')

//set static files
app.use(express.static('public'))

//set body-parser
app.use(bodyParser.urlencoded({ extended: true }))

//set routes
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const occupation = req.body.occupation
  const nonsense = generateNonsense(occupation)
  console.log(occupation)
  console.log(nonsense)
  res.render('index', { occupation: occupation, nonsense: nonsense })
})

//start the express server and listen for connections
app.listen(port, () => {
  console.log(`Express server is listening on ${port}`)
}) 