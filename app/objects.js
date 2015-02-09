if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    alterContext : function(fn, obj) {
      return fn.call(obj);
    },

    alterObjects : function(constructor, greeting) {
      constructor.prototype.greeting = greeting;
    },

    iterate : function(obj) {
      var ret = [];
      Object.getOwnPropertyNames(obj).forEach(function(e) {
        ret.push(e + ': ' + obj[e]);
      });
      return ret;
    }
  };
});
