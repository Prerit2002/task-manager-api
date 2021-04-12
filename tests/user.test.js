const request = require('supertest')
const app = require('../src/app')
const User = require('../src/models/user')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')

const useroneid = new mongoose.Types.ObjectId()

const userone = {
    _id: useroneid,
    name:'Mike',
    email:'mike@example.com',
    password:'56what12345',
    tokens: [{
        token: jwt.sign({_id: useroneid}, process.env.JWT_SECRET)
    }]

}

beforeEach( async () => {
    await User.deleteMany()
    await new User(userone).save()

})

// afterEach( () => {
//     console.log('afterEach')
// })

test('should signup a new user', async () => {
    await request(app).post('/users').send({ 
        name: 'andrew',
        email: 'andrewmead@example.com',
        password: 'Mypass777'
    }).expect(201)
}) 

test('should login', async () => {
    await await request(app).post('/users/login').send({
        email: userone.email, 
        password: userone.password
    }).expect(200)
})

test('should not login', async () => {
    await request(app).post('/users/login').send({
        email: userone.email, 
        password: 'abcdegfh1234'
    }).expect(400)
})

test('should get profile ', async () => {
    await request(app)
        .get('/users/me')
        .set('Authorization', `Bearer ${userone.tokens[0].token}`)
        .send()
        .expect(200)
})

test('should get profile ', async () => {
    await request(app)
        .get('/users/me')
        .send()
        .expect(401)
})


test('should delete profile ', async () => {
    await request(app)
        .delete('/users/me')
        .set('Authorization', `Bearer ${userone.tokens[0].token}`)
        .send()
        .expect(200)
})


test('should fail todelete profile ', async () => {
    await request(app)
        .delete('/users/me')
        .send()
        .expect(401)
})

