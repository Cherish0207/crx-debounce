/**
 * 函数节流:throttle
 * 保证函数在一个时间段内只执行一次,有2种做法
 * 1.等时间到了执行第一次
 * 2.立即执行一次再说
 */

window.onresize = throttle((e) => {
  console.log(e);
}, 1000);

/**
 * 实现:
 * 如果发现当前已经有计时了，啥都不做
 * 执行一次后timer必须清空，不然永远不会执行下一次了
 */
function throttle(callback, time) {
  let timer;
  return function () {
    console.log("throttle");
    // 等时间到了执行第一次
    if (timer) return;
    timer = setTimeout(() => {
      callback.apply(null, arguments);
      timer = null;
    }, time);
  };
}

for (let i = 0; i < 1000; i++) {
  handler(i); // 连续调用handle函数，在1000毫秒内也只会执行一次。
}
