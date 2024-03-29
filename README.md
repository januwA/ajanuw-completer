# ajanuw-completer

模拟dart的 [Completer](https://api.dartlang.org/dev/2.0.0-dev.69.0/dart-async/Completer-class.html)

## install
```
λ npm i ajanuw-completer
```

## browser
```html
<script src="./dist/umd/completer.js"></script>
<script>
  const { Completer } = window.Completer;
  let _data = new Completer();
  _data.promise
    .then((v) => {
      console.log(v); // 233
    })
    .catch((er) => {
      console.log(er);
    });

  setTimeout(() => {
    _data.complete(233);
    console.log(_data.isCompleted); // true
  }, 2000);

  setTimeout(() => {
    _data.complete(233); // error
  }, 3000);
</script>
```

## node
```ts
import { Completer } from "ajanuw-completer";

let _data: Completer<number> = new Completer<number>();
_data.promise
  .then(v => {
    console.log(v); // 233
  })
  .catch(er => {
    console.log(er);
  });

setTimeout(() => {
  _data.complete(233);
  console.log(_data.isCompleted); // true
}, 2000);
```