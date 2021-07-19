// 函数防抖:debounce
// 应用于频繁触发事件的场景：比如搜索框实时发请求， onmousemove, resize, onscroll等等
window.onresize = debounce(() => {
  console.log("onresize");
}, 1000);

/**
 * 函数防抖
 * callback，传入需要运行的函数
 * time ，多少时间后运行这个函数
 */

function debounce(callback, time) {
  // var timer; // 这里使用函数属性或者局部变量都可以
  return function () {
    console.log("debounce");
    if (debounce.timer) clearTimeout(debounce.timer);
    debounce.timer = setTimeout(callback, time);
  };
}
