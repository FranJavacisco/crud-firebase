"use strict";

var _vue = require("vue");

var _App = _interopRequireDefault(require("./App.vue"));

var _store = _interopRequireDefault(require("./store"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// src/main.js
var app = (0, _vue.createApp)(_App["default"]);
app.use(_store["default"]);
app.mount('#app');
//# sourceMappingURL=main.dev.js.map
