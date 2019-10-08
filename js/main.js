!function(e){var n={};function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=e,c.c=n,c.d=function(e,n,t){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)c.d(t,r,function(n){return e[n]}.bind(null,r));return t},c.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="",c(c.s=0)}([function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n\n// CONCATENATED MODULE: ./src/js/camera.js\nclass Camera{};\r\nlet camera = new Camera;\r\ncamera = { audio: false, video: { facingMode: { exact: "environment" } } }; \r\n\r\nnavigator.mediaDevices.getUserMedia(camera)\r\n.then(function(mediaStream) {\r\n  let video = document.querySelector(\'#app-video\');\r\n  video.srcObject = mediaStream;\r\n  video.onloadedmetadata = function(e) {\r\n    video.play();\r\n  };\r\n})\r\n.catch(function(err) { console.log(err.name + ": " + err.message); }); // always check for errors at the end\r\n\r\n\n// CONCATENATED MODULE: ./src/js/main.js\n// init camera\n\n\nnew Camera().facingMode;\n\n  navigator.mediaDevices.enumerateDevices()\n  .then(function(devices) {\n    devices.forEach(function(device) {\n        if (device.kind === "videoinput"){\n      console.log(device.kind + ": " + device.label +\n                  " id = " + device.deviceId);\n        }\n    });\n  })\n  .catch(function(err) {\n    console.log(err.name + ": " + err.message);\n  });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY2FtZXJhLmpzPzAzMWYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21haW4uanM/OTI5MSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBTztBQUNQO0FBQ0EsVUFBVSx1QkFBdUIsY0FBYyx1QkFBdUIsRUFBRSxHOztBQUV4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxzQkFBc0IsNENBQTRDLEVBQUUsRUFBRTs7OztBQ1p0RTtBQUNtQzs7QUFFbkMsSUFBSSxNQUFNOztBQUVWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRyIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIENhbWVyYXt9O1xyXG5sZXQgY2FtZXJhID0gbmV3IENhbWVyYTtcclxuY2FtZXJhID0geyBhdWRpbzogZmFsc2UsIHZpZGVvOiB7IGZhY2luZ01vZGU6IHsgZXhhY3Q6IFwiZW52aXJvbm1lbnRcIiB9IH0gfTsgXHJcblxyXG5uYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYShjYW1lcmEpXHJcbi50aGVuKGZ1bmN0aW9uKG1lZGlhU3RyZWFtKSB7XHJcbiAgbGV0IHZpZGVvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FwcC12aWRlbycpO1xyXG4gIHZpZGVvLnNyY09iamVjdCA9IG1lZGlhU3RyZWFtO1xyXG4gIHZpZGVvLm9ubG9hZGVkbWV0YWRhdGEgPSBmdW5jdGlvbihlKSB7XHJcbiAgICB2aWRlby5wbGF5KCk7XHJcbiAgfTtcclxufSlcclxuLmNhdGNoKGZ1bmN0aW9uKGVycikgeyBjb25zb2xlLmxvZyhlcnIubmFtZSArIFwiOiBcIiArIGVyci5tZXNzYWdlKTsgfSk7IC8vIGFsd2F5cyBjaGVjayBmb3IgZXJyb3JzIGF0IHRoZSBlbmRcclxuXHJcbiIsIi8vIGluaXQgY2FtZXJhXG5pbXBvcnQge0NhbWVyYX0gZnJvbSBcIi4vY2FtZXJhLmpzXCI7XG5cbm5ldyBDYW1lcmEoKS5mYWNpbmdNb2RlO1xuXG4gIG5hdmlnYXRvci5tZWRpYURldmljZXMuZW51bWVyYXRlRGV2aWNlcygpXG4gIC50aGVuKGZ1bmN0aW9uKGRldmljZXMpIHtcbiAgICBkZXZpY2VzLmZvckVhY2goZnVuY3Rpb24oZGV2aWNlKSB7XG4gICAgICAgIGlmIChkZXZpY2Uua2luZCA9PT0gXCJ2aWRlb2lucHV0XCIpe1xuICAgICAgY29uc29sZS5sb2coZGV2aWNlLmtpbmQgKyBcIjogXCIgKyBkZXZpY2UubGFiZWwgK1xuICAgICAgICAgICAgICAgICAgXCIgaWQgPSBcIiArIGRldmljZS5kZXZpY2VJZCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgfSlcbiAgLmNhdGNoKGZ1bmN0aW9uKGVycikge1xuICAgIGNvbnNvbGUubG9nKGVyci5uYW1lICsgXCI6IFwiICsgZXJyLm1lc3NhZ2UpO1xuICB9KTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n')}]);