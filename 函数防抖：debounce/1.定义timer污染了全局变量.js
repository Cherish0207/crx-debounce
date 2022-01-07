// 函数防抖:debounce
// 应用于 频繁触发事件 的场景：比如搜索框实时发请求， onmousemove, resize, onscroll等等
// 消除  多次频繁触发 的影响, 连续触发, 在某个时间段内只会给出一个返回结果
window.onresize = function () {
  debounce(() => {
    console.log("onresize");
  }, 1000);
};

/**
 * 函数防抖
 * callback，传入需要运行的函数
 * time ，多少时间后运行这个函数
 */
var timer;
function debounce(callback, time) {
  console.log("debounce");
  clearTimeout(timer);
  timer = setTimeout(callback, time);
}
// —— 定义timer污染了全局变量
