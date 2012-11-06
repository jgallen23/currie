/*!
 * currie - a simple proxy/curry function
 * v0.0.4
 * https://github.com/jgallen23/currie
 * copyright JGA 2012
 * MIT License
*/

var currie = function(fn, scope) {
  var args = [];
  for (var i=2, len = arguments.length; i < len; ++i) {
    args.push(arguments[i]);
  }
  return function() {
    var fnArgs = args.slice(0);
    for (var i = 0, c = arguments.length; i < c; i++) {
      fnArgs.push(arguments[i]);
    }
    fn.apply(scope, fnArgs);
  };
};

if (typeof module !== 'undefined') {
  module.exports = currie;
}
