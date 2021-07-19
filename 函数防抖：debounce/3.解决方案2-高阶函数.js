window.onresize = debounce(() => {
  console.log("onresize");
}, 1000);

function debounce(callback, time) {
  // var timer; // 这里使用函数属性或者局部变量都可以
  return function () {
    console.log("debounce");
    if (debounce.timer) clearTimeout(debounce.timer);
    debounce.timer = setTimeout(callback, time);
  };
}
