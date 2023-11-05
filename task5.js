
//1
Promise.resolve()
.then(() => console.log(1))// 
.catch(() => console.log(3))
.then(() => { console.log(2); throw new Error("brr"); })
.then(() => console.log(4))
.then(() => console.log(4))
//1, 2,
//resolve e katarvum e arajin theny ev tpum e _1_, veradardznum e new promise
//heto ashxtaum e 3-rd theny _2_, throw new Error ev thenery antesvum en


Promise.resolve()
.then(() => console.log(11))
.then(() => { console.log(12); throw new Error(); })
.catch(() => console.log(13))
.catch(() => console.log(14)) 
// 11, 12, 13
// // resolve-i depqum ashxatum e then ev tpum e _11_, return new Promise,
// ashxatum e 2-rd theny - _12_ ev error e throw linum , voric heto ashxatum e 1-in catchy ev tpum e 13


Promise.resolve()
.then(data => {
throw new Error('Api Error');//Api Error
return 1;
})
.then(data => console.log('ok'))
.catch(error => {
console.log(error.message);//Api Error
return "2";
})
.then(data => {
console.log(data);//2
})
// Api Error, 2
// resolve depqum ashxatum e then, vory stexcum e error ` Api Error(throwic heto grvacnery antesvum en),
// arajin consolei depqum tpum e errori.messaje ev stexcum e new promise vory vorpes data linum e 2


console.log(1)
setTimeout(() => {
console.log(2)
}, 20)
Promise.resolve()
.then(() => {
console.log(3)
return 1
})
.catch(e => console.log(e, 4))
.finally(res => console.log(res, 5))
.then((res) => console.log(res))
console.log(6)
//1,6, 3 , undefined 5,1, 2

// skzbum tpum e 1, heto setTimeout hasnelov tasky mtnum e MAcRO TASK QUEUE, heto promisy ` micro task queue, 
//tpum e  6, heto event loopy stugum e micro task queue-n, qani vor resolve then e ashxatum tpum e 3, finally tpum e ankax 
//catch ka te then qani vor value arka che , tpum e undefined, 5, ev ashxatum e then tpelov valuen ` 1
// Micro task-um arka chen tasker, callstack en mtnum 
//micro taskum arka takery ev tpum e setTimeout arka 2-y 


let a = 5;
setTimeout(() => {
console.log(a);// verjum nor katarum e setTimeout functioni callbacky ev tpum e 25
a = 10;
}, 0);
let p = new Promise((resolve, reject) => {
console.log(a);// hamarvum e synchronous code ev katarum e tox ar tox ev tpum e arajiny 5 ev hajord qaylum a = 25
a = 25;
resolve();
});
p.then(res => {
console.log('final result ', res)// value chuni resolve tpum e undefined
});
console.log(a);// 25

// 5, 25, final result undefined, 25