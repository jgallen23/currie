var currie = function(fn, scope) {
  var args = [];
  for (var i=2, len = arguments.length; i < len; ++i) {
    args.push(arguments[i]);
  };
  return function() {
    for (var i = 0, c = arguments.length; i < c; i++) {
      args.push(arguments[i]);
    }
    fn.apply(scope, args);
  };
}

module.exports = currie;
