require('dotenv').config()
const mongoose = require('mongoose')

if(process.argv.length < 3){
  console.log('give password as argument')
  process.exit(1)
}

const url = process.env.MONGODB_URI

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

const personSchema = new mongoose.Schema({
  name: String,
  number: String
})

const Person = mongoose.model('Person', personSchema)

if(process.argv[2] && process.argv[3]){
  const person = new Person({
    name: process.argv[2],
    number: process.argv[3]
  })

  person.save().then(() => {
    console.log(`added ${process.argv[2]} number ${process.argv[3]} to phonebook`)
    mongoose.connection.close()
  })
}else{
  Person.find({}).then(result => {
    console.log('phonebook:')
    result.forEach(person => {
      console.log(person)
    })
    mongoose.connection.close()
  })
}
