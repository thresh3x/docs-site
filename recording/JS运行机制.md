# JavaScript运行机制

JavaScript解释性语言，边编译，边执行。
JavaScript是由浏览器中嵌入的V8引擎来解释。
JavaSctipt解释以后，CPU来执行。执行后渲染至页面。

##### JavaScript引擎
- **V8**(Google)，用C++编写，开放源代码，由Google丹麦开发，是Google Chrome的一部分，也用于Nodejs
- JavaScriptCore(Apple)
- Rhino(Mozilla)
- SpiderMonkey(Mozilla)

###### V8引擎
script text -- parser --> AST抽象语法树 -- Ignition解释器 --> Byte code字节码 -- execution --> 执行后会feedback反馈回去，反作用于解释器(比如对于多次执行的代码和数据类型，反馈发送到优化编译器，产生高度优化的机器代码，内联缓存技术inline cashing)，这叫做Deoptimization(去优化)优化。

###### Compiler
Code代码通过Lexer进行词法分析生成tokens，tokens进行语法分析Parser生成AST，AST进行语义分析SemanticAnalysis生成analyzedAst，接着通过代码生成器CodeGeneration生成New Code。

###### AST
将代码code转化成一个json对象。

###### 执行上下文
堆 Heap（很多种），栈 Stack（先进后出）
所有代码都有一个Global Execution Context全局执行上下文，一个{}一个作用域，遇到一个作用域便把该作用域上下文压栈，执行完便出栈。

在js代码执行过程中，函数，代码需要分配存储空间，这时候会有一个对象来表示当前的执行上下文。一个函数以及{}会产生执行上下文。var声明的变量会储存在上下文中的VariableEnvironment变量环境赋值为undefined，执行前会提前扫描，找到var声明的变量一同放入变量环境（**也就是变量提升**）。let声明的变量会储存在LexicalEnvironment词法环境中的一块区域（也就是**暂时性死区**，声明前读取会报错）。执行到声明代码之前，词法环境不会给其赋值nothing，is not defined。嵌套的作用域会形成嵌套的词法环境中的区域，读取时从内到外。

###### [[事件循环]]

###### 垃圾回收GC(Garbage Collection)
- 引用计数，循坏引用无法清除
- 标记清除
- 标记清除压缩
- Cheney算法，是目前用在V8新生代垃圾回收