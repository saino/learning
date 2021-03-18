#浏览器
*浏览器并发请求数量限制一般为6个
浏览器&nbsp;&nbsp;&nbsp;&nbsp;HTTP / 1.1&nbsp;&nbsp;&nbsp;&nbsp;HTTP / 1.0

IE 11&nbsp;&nbsp;&nbsp;&nbsp;6&nbsp;&nbsp;&nbsp;&nbsp;6

IE 10&nbsp;&nbsp;&nbsp;&nbsp;6&nbsp;&nbsp;&nbsp;&nbsp;6

IE 9&nbsp;&nbsp;&nbsp;&nbsp;10&nbsp;&nbsp;&nbsp;&nbsp;10

IE 8&nbsp;&nbsp;&nbsp;&nbsp;6&nbsp;&nbsp;&nbsp;&nbsp;6

IE 6,7&nbsp;&nbsp;&nbsp;&nbsp;2&nbsp;&nbsp;&nbsp;&nbsp;4

火狐&nbsp;&nbsp;&nbsp;&nbsp;6&nbsp;&nbsp;&nbsp;&nbsp;6

Safari 3,4&nbsp;&nbsp;&nbsp;&nbsp;4&nbsp;&nbsp;&nbsp;&nbsp;4

Chrome 4+&nbsp;&nbsp;&nbsp;&nbsp;6&nbsp;&nbsp;&nbsp;&nbsp;6


# JS原型与原型链
1.所有内置对象（Array,Object,Function,Date,RegExp等）的隐式原型链（\_\_proto\_\_）都指向Function的原型（Function.prototype）
2.所有内置对象（Array,Object,Function,Date,RegExp等）的原型（如：Array.prototype,Function.prototype）由js内部实现提供，其隐式原型链（如：Array.prototype.\_\_proto\_\_等等）均指向Object的原型（Object.prototype）。Object的原型的隐式原型链指向null（Object.prototype.\_\_proto\_\_ === null）
3.所有实例的隐式原型（xobj.\_\_proto\_\_）指向其构造函数的原型
4.内置对象可以作为构造函数使用，可以new一个实例。
5.new的时候做的步骤 （1.创建一个空对象2.将空对象的隐式原型链指向构造函数的原型3.将构造函数的this指向空对象4执行构造函数，获取返回结果，若该结果类型为obj值返回该结果，否则返回之前的
``newFunction(constuctorFun, arg){
        var o = new Object();
        o.__proto__ = constructorFun.prototype;
        var res = constructorFun.call(o,arg);
        return res instanceof Object ? res : o;
    }
``
6.instanceof 的工作原理是：在表达式 x instanceof Foo 中，如果 Foo 的原型（即 Foo.prototype）出现在 x 的原型链中，则返回 true，不然，返回 false。