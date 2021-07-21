const { Completer } = require("./dist/ajanuw-completer");

let _data = new Completer();
_data.promise
  .then((v) => {
    console.log(v); // 233
  })
  .catch((er) => {
    console.log(er);
  });

setTimeout(() => {
  if (!_data.isCompleted) {
    _data.complete(233);
  }
}, 2000);
