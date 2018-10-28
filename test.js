const assert = require('assert');
Object.freeze(assert);
const make = require('./make');
const sumOfOther = require('./sumOfOther');

describe('Реализуйте функцию make:', function () {

    function sum(a, b) {
        return a + b;
    }

    it('Результат:', function () {
        assert.equal(make(15)(34, 21, 666)(41)(sum), 777);
    });
});

describe(' sumOfOther. В результирующем массиве каждый элемент по индексу i - это сумма остальных элементов оригинального массива.', function () {
    it('Результат:', function () {
        assert.deepEqual(sumOfOther([2, 3, 4, 1]), [8, 7, 6, 9]);
    });
});