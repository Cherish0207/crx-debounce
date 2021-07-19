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

function debounce(callback, time) {
  console.log("debounce");
  if (debounce.timer) clearTimeout(debounce.timer);
  debounce.timer = setTimeout(callback, time);
}
