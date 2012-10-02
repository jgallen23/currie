var assert = require('assert');

var currie = require('../');

suite('currie', function() {

  test('basic use', function(done) {
    var check = false;
    var test = function(arg1, arg2, arg3, arg4) {
      check = true;

      assert.equal(arg1, 1);
      assert.equal(arg2, 2);
      assert.equal(arg3, 3);
      assert.equal(arg4, 4);

      done();
    }

    setTimeout(currie(test, null, 1, 2, 3, 4), 10);
    assert.equal(check, false);
  });

  test('prototypes', function(done) {

    var Test = function() {

      setTimeout(currie(this.method, this, 123), 10);
    }

    Test.prototype.method = function(arg) {
      assert.equal(this instanceof Test, true);
      assert.equal(arg, 123);
      done();
    }

    var test = new Test();
    
  });

  test('pass arguments from callback', function(done) {

    var async = function(fn) {
      setTimeout(function() {
        fn(456);
      }, 10);
    }

    var Test = function() {

      async(currie(this.method, this, 123));
    }

    Test.prototype.method = function(arg1, arg2) {
      assert.equal(this instanceof Test, true);
      assert.equal(arg1, 123);
      assert.equal(arg2, 456);
      done();
    }

    var test = new Test();
    
  });
  
});

