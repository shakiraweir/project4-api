const express = require('express')
const parser = require('body-parser')
// const Representative = require('./Models/Representative')
// const Senator = require('./Models/Senator')

const cors = require('cors')
const app = express()

app.use(cors())

// app.use(parser.json({ useNewUrlParser: true }));

app.use(parser.json())
app.use(cors());
app.use(require('./Routes/indexRoutes'))
app.use(cors());

// app.get("/representative", (req, res) => {
//         Representative.find()
//           .then((representative) => {
//             res.json(representative)
//           })
//           .catch((err) => {
//             console.log(err)
//           })

//    } )


  //  app.get("/senator", (req, res) => {
   
  //   Senator.find()
  //         .then((senator) => {
  //           res.json(senator)
  //         })
  //         .catch((err) => {
  //           console.log(err)
  //         })

  //  } )

  app.set('port', process.env.PORT || 3001)

  app.listen(app.get('port'), () => {
    console.log(`PORT: ${app.get('port')}`)
  })


