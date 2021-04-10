require('../src/db/mongoose')
const User = require('../src/models/user')

// 6050d7a07f7c764c0816e506

// User.findByIdAndUpdate('6050d7a07f7c764c0816e506', {age:1}).then((user) => {
//     console.log(user)
//     return User.countDocuments({age:1})
// }).then((result) => {
//     console.log(result)
// }).catch((err) => {
//     console.log(err)
// })

const updateageandcount = async (id,age) => {
    const user = await User.findByIdAndUpdate(id, {age})
    const count =  await User.countDocuments({age})
    return count
}

updateageandcount('6050d7a07f7c764c0816e506', 2 ).then((result) =>{
    console.log(result)
}).catch((err) => {
    console.log(err)
})