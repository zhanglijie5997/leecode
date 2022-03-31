function LazyMan(v) {
    /**
     * 实例化LazyMan
     */
    class _LazyMan {
        constructor(props) {
            this.task = [];
            const fn = () => {
                this.next();
            };
            this.task.push(fn);
            // 队列延迟操作，防止添加未成功就执行
            Promise.resolve().then((v) => {
                this.next();
            });
        }
        next() {
            const fn = this.task.shift();
            fn && fn();
        }
        eat(v) {
            this.task.push(() => {
                console.log(v);
                this.next();
            });
            return this;
        }
        sleep(v) {
            this.task.push(() => {
                setTimeout(() => {
                    console.log(v);
                    this.next();
                }, v * 1000);
            });
            return this;
        }

        sleepFirst(v) {
            this.task.unshift(() => {
                setTimeout(() => {
                    console.log(v);
                    this.next();
                }, v * 1000);
            });
            return this;
        }
    }
    return new _LazyMan(v);
}

console.log(LazyMan('Tony').eat('lunch').sleepFirst('ttt').eat('dinner').sleep(1));
