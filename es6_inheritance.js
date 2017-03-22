/*jshint esversion: 6 */

class ClassA {
    constructor(opt_param) {
        this._p1 = opt_param || 2;
    }

    f1() {
        return 7;
    }

    get p1() {
        return this._p1;
    }
}

class ClassB {
    constructor() {
        this._p2 = 'Hello';
    }

    f2(x) {
        return x*x;
    }

    get p2() {
        return this._p2;
    }
}

class ClassC extends ClassB {
    constructor() {
        super();
        this._p2 = 'By';
    }

    get p2() {
        return this._p2;
    }
}

class ClassD extends ClassC {
    constructor() {
        super();
        this.classA = new ClassA();
    }

    get p4() {
        return 7 * this.classA.p1;
    }

    f2(value) {
        return 5 * super.f2(value);
    }

    f4(value) {
        return this.classA.f1() + this.f2(value);
    }
}

let obj1 = new ClassA();
let obj2 = new ClassB();
let obj3 = new ClassC();
let obj4 = new ClassD();

console.log(obj1);
console.log(obj2);
console.log(obj3);
console.log(obj4);