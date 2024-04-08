# Vue3

###### Vue3为什么要有组合式API？
1. 更好的逻辑复用。Vue composition API，包含状态（生命周期）的函数复用，自定义hooks。
2. 提供更好的ts类型推导，提供更加灵活的代码。
3. 组合式API不需要依赖this-->代码压缩更优化，提供更小的生产环境的体积。
4. react hooks不能在条件判断、循环中使用，vue不用考虑这个。

###### 渲染流程
1. compile：template{{ }} --> 渲染函数
2. mount挂载：VDOM --> 真实DOM
3. 更新：deps --> effect rerun，new VDOM diff

###### Vue3编译器提升VDOM运行时的性能
1. 静态提升PatchFlag。将静态代码提升到模板的渲染函数之外，在更新时直接复用。
2. 更新类型标记。使用位运算标记更新类型。

###### h渲染函数hyperscript 生成HTML的JS
