// 函数防抖:debounce
// 应用于频繁触发事件的场景：比如搜索框实时发请求， onmousemove, resize, onscroll等等
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
