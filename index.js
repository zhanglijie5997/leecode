function add(v) {
    const a = {
        value: v,
        valueOf: function () {
            return this.value;
        },
        minus(e) {
            this.value *= e;
            return this;
        },
        cut(e) {
            this.value -= e;
            return this;
        },
    };
    return a;
}
add(3).minus(2).cut(2) == 4; // 3 * 2 - 2 = 4
add(3).minus(2).cut(2).minus(2) == 8; // ((3 * 2) - 2) * 2

// 科里化
function cory(v) {
    let _ = v;
    const fn = function () {
        const args = [...arguments].reduce((p, c) => p + c);
        _ += args;
        return _;
    };
    return fn;
}

console.log(cory(2)(3, 3));
// 组合
function compose(params) {
    const args = [...arguments];
    const fn = function () {
        const _ = [...arguments];
        return args.reduce((p, c) => p(..._) + c(..._));
    };
    return fn;
}

var add = function (x) {
    return x + 1;
}; //加法运算
var mul = function (x) {
    return x * 5;
}; //乘法运算
console.log(compose(mul, add)(2)); //合并加法运算和乘法运算，返回15

Function.prototype.call1 = function (ctx = window) {
    let args = [];
    for(let i =0 ;i < arguments.length; i++) {
        if(i > 0) {
            
        }
    }
};

const name = '小王',
    age = 17,
    obj = {
        name: '校长',
        objAge: this.age,
        myFun: function (v) {
            console.log(this.name, this.age, v);
        },
    };

obj.objAge; // 17
obj.myFun.call1(
    {
        name: name,
        age: 15,
    },
    22
); // 小张年龄 undefined
