const n = 123

function foo(n) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof n === "string") {
                resolve(n.toUpperCase())
            } else {
                reject("error")
            }
        },500)
    })
}

foo(n).then((result) => {
    console.log(result)
}).catch((err) => console.log(err))

