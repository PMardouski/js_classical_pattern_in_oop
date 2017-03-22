var ClassA = (function () {
    function ClassA(opt_param) {
        var o;

        if (!ClassA.prototype.isPrototypeOf(this)) {
            return new ClassA(opt_param);
        }

        o = this;

        if (opt_param) {
            o.p1 = opt_param;
        }
    }

    ClassA.prototype.p1 = 2;
    ClassA.prototype.f1 = function () {
        return 7;
    };

    return ClassA;
})();

// --------------------------------------------------------------------------------------------------
var ClassB = (function () {
    function ClassB() {

    }

    ClassB.prototype.p2 = 'Hello';
    ClassB.prototype.f2 = function (x) {
        return x * x;
    };

    return ClassB;
})();

// --------------------------------------------------------------------------------------------------

var ClassC = (function (_super) {

    inherit(ClassC, _super);

    function ClassC() {        
        _super.call(this);
        //this.p2 = 'Bye';
    }

    ClassC.prototype.p2 = 'Bye';

    return ClassC;
})(ClassB);

// --------------------------------------------------------------------------------------------------

var ClassD = (function (_super) {

    inherit(ClassD, _super);

    function ClassD() {
        _super.call(this);
    }

    ClassD.prototype.p4 = 7 * ClassA.prototype.p1;
    ClassD.prototype.f2 = function (x) {
        return 5 * ClassC.prototype.f2.apply(this, [x]);
    };

    ClassD.prototype.f4 = function(x) {
        return this.f2(x) + ClassA.prototype.f1();
    };

    return ClassD;
})(ClassC);

// --------------------------------------------------------------------------------------------------

function inherit(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.costructor = Child;
}

// --------------------------------------------------------------------------------------------------

var obj1 = new ClassA();
var obj2 = new ClassB();
var obj3 = new ClassC();
var obj4 = new ClassD();

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