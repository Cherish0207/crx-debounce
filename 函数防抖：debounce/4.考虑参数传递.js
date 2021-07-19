window.onresize = debounce((e) => {
  console.log("onresize", e);
}, 1000);

function debounce(callback, time) {
  // var timer; // 这里使用函数属性或者局部变量都可以
  return function () {
    console.log("debounce");
    if (debounce.timer) clearTimeout(debounce.timer);
    // 箭头函数没有arguments,所以这个arguments是上面return的匿名函数
    debounce.timer = setTimeout(() => {
      callback.apply(null, arguments);
    }, time);
  };
}

const fn = debounce(function () {
  console.log(arguments);
}, 1000);

fn(2);
fn(2, 3);
fn(2, 3, 4);
fn(2, 3, 4, 5);
fn(2, 3, 4, 5, 6);
fn(2, 3, 4, 5, 6, 7);
fn(2, 3, 4, 5, 6, 7, 8);
