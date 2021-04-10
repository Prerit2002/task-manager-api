const mongoose = require('mongoose')



mongoose.connect( process.env.MONGO_URL ,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})


// const me = new User({
//     name: 'John',
//     email:'mike@gmail.com',
//     passwords:'abcdefghijk'
// })
// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     copnsole.log('error',error)
// })


// const task1 = new Task({
//     description: 'do homework',
//     status: false

// })
// task1.save().then(() => {
//     console.log(task1)
// }).catch((error) => {
//     console.log('error')
// })