function LazyMan(v) {
    console.log(v);
    const _this = {};
    _this.eat = function (e) {
        console.log(e);
        return _this;
    };
    _this.sleepFirst = function (v) {
        console.log(v);
        return _this;
    };
    _this.sleep = function (v) {
        console.log(v);
        return _this;
    };
    return _this;
}
// LazyMan('Tony').eat("lunch").eat('dinner')
console.log(LazyMan('Tony').eat('lunch').eat('dinner').sleepFirst(5).sleep(10));
