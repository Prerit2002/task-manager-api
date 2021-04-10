// CRUD create read update delete

// const mongodb  = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const mongoID =  mongodb.mongoID

const {MongoClient , ObjectId} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databasename = 'task-manager'

// const id = new ObjectId()
// console.log(id)
// console.log(id.toHexString())
// console.log(id.toString())
// console.log(id.getTimestamp())

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error , client) => {
    if (error) {
        return console.log('unable to connect to database')
    }
    const db = client.db(databasename)
    // db.collection('users').insertMany([
    //     {
    //         name: 'prerit',
    //         age:19
    //     },{
    //         name:'abcdefg',
    //         age:19
    //     }
    // ], (error,result) => {
    //     if (error) {
    //         return console.log('unable to insert user')
    //     }

    //     console.log(result.ops)
    // })
    // db.collection('users').findOne({ _id: new ObjectId("604f5c412f57c73cabe838b6"), age:1}, (error,user) => {
    //     if (error){
    //         return console.log('error')
    //     }
    //     console.log(user)
    // })

    // db.collection('users').find({age:19}).toArray((error , users) =>{
    //     console.log(users)
    // })
    // db.collection('users').find({age:19}).count((error , users) =>{
    //     console.log(users)
    // })

    // db.collection('tasks').findOne({ _id: new ObjectId("604f5d3abaf3223cd2bb1bb8")}, (error,task) =>{
    //     if (error) {
    //         return console.log(1)
    //     }
    //     console.log(task)
    // })


    // db.collection('tasks').find({completed:false}).toArray((error , users) =>{
    //     if (error) {
    //         return console.log(2)
    //     }
    //     console.log(users)
    // })

    // db.collection('users').updateOne({ 
    //     _id: new ObjectId("604f59c53442973c592ef295")
    // },{
    //     $inc:{
    //         age:1
    //     }
    // // $set: {
    // //     name:"qwert"
    // // }

    // }).then((result) =>{
    //     console.log(result)
    // }).catch((error) =>{
    //     console.log(error)
    // })

    // db.collection('tasks').updateMany({
    //     completed:true
    // },{
    //     $set: {
    //         completed:false
    //     }
    // }).then((result) =>{
    //     console.log(result)
    // }).catch((error) =>{
    //     console.log(error)
    // })


    db.collection('users').deleteMany({
        age:19
    }).then((result) =>{
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })

})
