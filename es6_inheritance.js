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
console.log('ClassA p1: ' + obj1.p1);
console.log('ClassA f1: ' + obj1.f1());
console.log(obj2);
console.log('ClassB p2: ' + obj2.p2);
console.log('ClassB f2: ' + obj2.f2(2));
console.log(obj3);
console.log('ClassC p2: ' + obj3.p2);
console.log('ClassC f2: ' + obj3.f2(2));
console.log(obj4);
console.log('ClassD p2: ' + obj4.p2);
console.log('ClassD p4: ' + obj4.p4);
console.log('ClassD f2: ' + obj4.f2(2));
console.log('ClassD f4: ' + obj4.f4(2));