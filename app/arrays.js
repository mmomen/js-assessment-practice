if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        var x = -1;
        arr.forEach(function(e,i) {
            if (e === item) {
                x = i;
            }
        });
        return x;
    },

    sum : function(arr) {
        var x = 0;
        arr.forEach(function(e) {
            x += e;
        });
        return x;
    },

    remove : function(arr, item) {
        var idx = arr.indexOf(item);
        while (idx !== -1) {
            arr.splice(idx, 1);
            idx = arr.indexOf(item);
        }
        return arr;
    },

    removeWithoutCopy : function(arr, item) {
        var idx = arr.indexOf(item);
        while (idx !== -1) {
            arr.splice(idx, 1);
            idx = arr.indexOf(item);
        }
        return arr;
    },

    append : function(arr, item) {

    },

    truncate : function(arr) {

    },

    prepend : function(arr, item) {

    },

    curtail : function(arr) {

    },

    concat : function(arr1, arr2) {

    },

    insert : function(arr, item, index) {

    },

    count : function(arr, item) {

    },

    duplicates : function(arr) {

    },

    square : function(arr) {

    },

    findAllOccurrences : function(arr, target) {

    }
  };
});
