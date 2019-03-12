const Representative = require('../Models/Representative')
const representativeData = require('./representativeSeed.json')

Representative.remove({})
  .then(() => {
   return Representative.collection.insert(representativeData)
      .then((representative) =>{
        console.log(representative)
        process.exit()
      })
  })
