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
        var newArr = arr.filter(function(e) {
            return e !== item;
        });
        return newArr;
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
        arr.push(item);
        return arr;
    },

    truncate : function(arr) {
        arr.pop();
        return arr;
    },

    prepend : function(arr, item) {
        arr.splice(0,0, item);
        return arr;
    },

    curtail : function(arr) {
        arr.splice(0,1);
        return arr;
    },

    concat : function(arr1, arr2) {
        return (arr1.join() + ',' + arr2.join()).split(',');
    },

    insert : function(arr, item, index) {
        arr.splice(index, 0, item);
        return arr;
    },

    count : function(arr, item) {
        var count = 0;
        arr.forEach(function(e) {
            if (e === item) {
                count++;
            }
        });
        return count;
    },

    duplicates : function(arr) {
        var keys = {};
        var duplicates = [];
        arr.forEach(function(e) {
            if (keys[e]) {
                keys[e]++;
            } else {
                keys[e] = 1;
            }
        });
        for (var key in keys) {
            if (keys[key] > 1) {
                duplicates.push(key);
            }
        }
        return duplicates;
    },

    square : function(arr) {

    },

    findAllOccurrences : function(arr, target) {

    }
  };
});
