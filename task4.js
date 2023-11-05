function mapPromise(promise, transfer){
    return new Promise((resolve, reject) => {
      promise
      .then(value => {
         resolve(transfer(value))
    })
      .catch((err) => reject(err))
    })
   }
  
  let promise = new Promise((resolve,reject) => {
          resolve(2)
  })
  //let transfer = (val) => val * 2;

  let transfer = function (val) {
    throw new Error("Luso");
  };
  
  
  let a = mapPromise(promise, transfer)
 a.then(res=> console.log(res)).catch(err => console.log(err))