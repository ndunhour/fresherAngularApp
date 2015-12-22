'use strict';

/* Filters */

angular.module('fresherFilters', []).filter('checkmark', function() {
  return function(input) {
    return input ? '\u2713' : '\u2718';
  };
});
