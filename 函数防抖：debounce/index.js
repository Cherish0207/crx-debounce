// 函数防抖:debounce
// 应用于频繁触发事件的场景：比如搜索框实时发请求， onmousemove, resize, onscroll等等
window.onresize = debounce((e) => {
  console.log("onresize", e);
}, 1000, true);

/**
 * 函数防抖
 * callback，传入需要运行的函数
 * time，多少时间后运行这个函数
 * immediate，首次先触发一下
 */

function debounce(callback, time, immediate) {
  // var timer; // 这里使用函数属性或者局部变量都可以
  return function () {
    console.log("debounc11e", debounce.timer);
    if (immediate) {
      if (!debounce.timer) {
        callback.apply(this, arguments);
      }
    }
    if (debounce.timer) clearTimeout(debounce.timer);
    // 箭头函数没有arguments,所以这个arguments是上面return的匿名函数
    debounce.timer = setTimeout(() => {
      callback.apply(null, arguments);
      debounce.timer = null
    }, time);
  };
}

const fn = debounce(function () {
  console.log(arguments);
}, 1000);

// fn(2);
// fn(2, 3);
// fn(2, 3, 4);
// fn(2, 3, 4, 5);
// fn(2, 3, 4, 5, 6);
// fn(2, 3, 4, 5, 6, 7);
// fn(2, 3, 4, 5, 6, 7, 8);
