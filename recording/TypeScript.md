# TypeScript

###### any、never、unknown、null、undefined、void
- any：动态类型变量，失去了类型检查的作用，可以用作用户输入、第三方库等不清楚类型。
- never：永远不会存在的值的类型，例如抛出异常、限制函数无输入值never、switch/if分支使用never、限制类型不能传入该属性propname?:never。
- unknown：任何类型都可以赋值给unknown，unknown只能赋值给unknow和any。
- null&undefined：默认是所有类型子类型。strictNullChecks标记后只能赋值给void或它们自己。
- void：没有任何类型，函数没返回值可以定义为void