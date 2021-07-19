window.onresize = throttle((e) => {
  console.log(e);
}, 1000);

function throttle(callback, time) {
  let timer;
  return function () {
    console.log("throttle");
    // 马上触发一次，下一下等一秒，利用时间戳
    if (!timer || Date.now() - timer > time) {
      callback.apply(null, arguments);
      timer = Date.now();
    }
  };
}
