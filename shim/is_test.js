/**
 * Check if the env is test
 * @function isTest
 * @returns {boolean} - Test or not
 */
'use strict';

var _require = require('./constants'),
    TEST = _require.TEST;

var getEnv = require('./get_env');
/** @lends isTest */


function isTest() {
  return getEnv() === TEST;
}

module.exports = isTest;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlzX3Rlc3QuanMiXSwibmFtZXMiOlsicmVxdWlyZSIsIlRFU1QiLCJnZXRFbnYiLCJpc1Rlc3QiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUFLQTs7ZUFFaUJBLE9BQU8sQ0FBQyxhQUFELEM7SUFBaEJDLEksWUFBQUEsSTs7QUFDUixJQUFNQyxNQUFNLEdBQUdGLE9BQU8sQ0FBQyxXQUFELENBQXRCO0FBRUE7OztBQUNBLFNBQVNHLE1BQVQsR0FBbUI7QUFDakIsU0FBT0QsTUFBTSxPQUFPRCxJQUFwQjtBQUNEOztBQUVERyxNQUFNLENBQUNDLE9BQVAsR0FBaUJGLE1BQWpCIiwic291cmNlUm9vdCI6Ii4uL2xpYiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ2hlY2sgaWYgdGhlIGVudiBpcyB0ZXN0XG4gKiBAZnVuY3Rpb24gaXNUZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gLSBUZXN0IG9yIG5vdFxuICovXG4ndXNlIHN0cmljdCdcblxuY29uc3QgeyBURVNUIH0gPSByZXF1aXJlKCcuL2NvbnN0YW50cycpXG5jb25zdCBnZXRFbnYgPSByZXF1aXJlKCcuL2dldF9lbnYnKVxuXG4vKiogQGxlbmRzIGlzVGVzdCAqL1xuZnVuY3Rpb24gaXNUZXN0ICgpIHtcbiAgcmV0dXJuIGdldEVudigpID09PSBURVNUXG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNUZXN0XG4iXX0=