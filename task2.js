
let value = "12ACB";
let val = new Promise((resolve, reject) => {
  setTimeout(() => resolve(value), 1000);
});
function squarePromise(val) {
  return new Promise((resolve, reject) => {
    val
      .then((res) => {
        if (typeof res === "number" || !isNaN(res) ) {
          resolve((+res) ** 2);
        }
        if (typeof res === "string") {
          reject(`Cannot convert ${res} to a number!`);
        }
      })
      .catch((res) => {
        reject(res);
      });
  });
}
squarePromise(val)
  .then((res) => console.log(res))
  .catch((er) => console.log(er));











