const add = (a,b) =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve(a + b)
        },2000)
    })
}


const dowork = async () => {
    const sum = await add(1,99)
    const sum2 = await add(sum,50)
    const sum3 = await add(sum2, 3)
    return sum3
}

dowork().then((result) => {
    console.log('result',result)
}).catch((err) => {
    console.log('err',err)
})