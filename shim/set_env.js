/**
 * Set NODE_ENV value
 * @function setEnv()
 * @param {string} env - Env value
 */
'use strict';
/** @lends setEnv */

var _Object$assign = require("@babel/runtime/core-js/object/assign");

function setEnv(env) {
  _Object$assign(process.env, {
    NODE_ENV: env && String(env).trim() || env
  });
}

module.exports = setEnv;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldF9lbnYuanMiXSwibmFtZXMiOlsic2V0RW52IiwiZW52IiwicHJvY2VzcyIsIk5PREVfRU5WIiwiU3RyaW5nIiwidHJpbSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUtBO0FBRUE7Ozs7QUFDQSxTQUFTQSxNQUFULENBQWlCQyxHQUFqQixFQUFzQjtBQUNwQixpQkFBY0MsUUFBUUQsR0FBdEIsRUFBMkI7QUFDekJFLGNBQVVGLE9BQU9HLE9BQU9ILEdBQVAsRUFBWUksSUFBWixFQUFQLElBQTZCSjtBQURkLEdBQTNCO0FBR0Q7O0FBRURLLE9BQU9DLE9BQVAsR0FBaUJQLE1BQWpCIiwiZmlsZSI6InNldF9lbnYuanMiLCJzb3VyY2VSb290IjoiLi4vbGliIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTZXQgTk9ERV9FTlYgdmFsdWVcbiAqIEBmdW5jdGlvbiBzZXRFbnYoKVxuICogQHBhcmFtIHtzdHJpbmd9IGVudiAtIEVudiB2YWx1ZVxuICovXG4ndXNlIHN0cmljdCdcblxuLyoqIEBsZW5kcyBzZXRFbnYgKi9cbmZ1bmN0aW9uIHNldEVudiAoZW52KSB7XG4gIE9iamVjdC5hc3NpZ24ocHJvY2Vzcy5lbnYsIHtcbiAgICBOT0RFX0VOVjogZW52ICYmIFN0cmluZyhlbnYpLnRyaW0oKSB8fCBlbnZcbiAgfSlcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRFbnZcbiJdfQ==