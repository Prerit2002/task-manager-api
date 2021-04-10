const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const app = express()
const port = process.env.PORT
const multer = require('multer')
// app.use( (req,res,next) => {
//     if (req.method === 'GET') {
//         res.send('GET requests are disabled')
//     }else{
//         next()
//     }
// })



app.use(express.json())
app.use(userRouter)
app.use(taskRouter)


app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

// const jwt = require('jsonwebtoken')

// const myfunction = async () => {
//     const token = jwt.sign({_id: 'abc123'} , 'thisismynewcourse', {expiresIn:'10 days'})
//     console.log(token)

//     const dataequals = jwt.verify(token, 'thisismynewcourse')
//     console.log(dataequals)
// }

// myfunction()

// const pet = {
//     name:'abcd'
// }
// console.log(JSON.stringify(pet))


// const main = async () => {
//     // const task = await Task.findById('606c056932f7822c221bcd76')
//     // await task.populate('owner').execPopulate()
//     // console.log(task)
//     const user = await User.findById('606c0463cce5ef2c05be87a8')
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks)

// }

// main()

// const upload = multer({
//     dest: 'images'
// })
// app.post('/upload', upload.single('upload'), (req, res) => {
//     res.send()
// })