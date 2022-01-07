#### 防抖截流

> - 实现简单版的防抖截流
>
> - lodash 的 debounce 函数

- 简单版
  - 防抖实现
    - 直接定义 timer-污染了全局变量
    - timer 放在函数属性上
    - 使用高阶函数
    - 传递第三个参数 immediate
  - 截流实现
    - 1.时间到了执行第一次
    - 2.立即执行一次(后面的利用时间戳)
    - 3.两者结合，传递第三个参数 immediate
- 复杂截流
  - 最后的点击可能没有生效 ---> trailing
  - 第一次不执行 ---> leading:false
- lodash 合并 debounce 和 throttle：
  - 无需 clearTimeout 的 debounce 方法
  - 用 debounce 实现 throttle--改造 shouldInvoke 实现 maxWait
