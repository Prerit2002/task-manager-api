// const doworkpromise = new Promise((resolve, reject) => {
// setTimeout(() =>{
//     //resolve([7,4,1])
//     reject('things went wrong')
//     },2000)
// })

// doworkpromise.then((result) =>{
//     console.log('success', result)
// }).catch((error) =>{
//     console.log('error', error)
// } )

const add = (a,b) =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve(a + b)
        },2000)
    })
}

// add(1,2).then((sum) =>{
//     console.log(sum)

//     add(sum, 5).then((sum2) =>{
//         console.log(sum2)
//     }).catch((error) =>{
//         console.log(e)
//     })


// }).catch((error) =>{
//     console.log(e)
// })

add(1,2).then((sum) =>{
    console.log(sum)
    return add(sum, 5)
}).then((sum2) => {
    console.log(sum2)
}).catch((error) => {
    console.log(error)
})