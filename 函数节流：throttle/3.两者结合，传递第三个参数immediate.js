const handler = throttle((e) => {
  console.log(e);
}, 1000);
window.onresize = handler;

function throttle(callback, time, immediate) {
  let timer, timer1;
  return function () {
    console.log("throttle");
    if (immediate) {
      // 马上触发一次，下一下等一秒，利用时间戳
      if (!timer || Date.now() - timer > time) {
        callback.apply(null, arguments);
        timer = Date.now();
      }
    } else {
      // 等时间到了执行第一次
      if (timer1) return;
      timer1 = setTimeout(() => {
        callback.apply(null, arguments);
        timer1 = null;
      }, time);
    }
  };
}
