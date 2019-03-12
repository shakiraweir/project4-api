const Senator = require('../Models/Senator')
const senatorData = require('./senatorSeed.json')

Senator.remove({})
  .then(() => {
   return Senator.collection.insert(senatorData)
      .then((senator) =>{
        console.log(senator)
        process.exit()
      })
  })