// generates a quasi-periodic string of chars.

(function() {
  var fib_gen = function (level, a, b, stop_level, sequence) {
    if (level >= stop_level) {
      return sequence;
    }
    else {
      sequence += a;
      a += b;
      b =
      return fib_gen(0, a, b, levels, "");
    }
  };
  module.fib_string = function (a, b, levels) {
    return fib_gen(0, a, b, levels, "");
  };
  
}())
