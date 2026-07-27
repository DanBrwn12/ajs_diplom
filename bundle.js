/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/app */ \"./src/js/app.js\");\n\n\n\n// Точка входа webpack\n// Не пишите код в данном файле\n\n//# sourceURL=webpack://ajs_diplom/./src/index.js?\n}");

/***/ },

/***/ "./src/js/GameController.js"
/*!**********************************!*\
  !*** ./src/js/GameController.js ***!
  \**********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GameController)\n/* harmony export */ });\n/* harmony import */ var _generators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generators */ \"./src/js/generators.js\");\n/* harmony import */ var _PositionedCharacter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PositionedCharacter */ \"./src/js/PositionedCharacter.js\");\n/* harmony import */ var _themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./themes */ \"./src/js/themes.js\");\n/* harmony import */ var _characters_Bowman__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./characters/Bowman */ \"./src/js/characters/Bowman.js\");\n/* harmony import */ var _characters_Magician__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./characters/Magician */ \"./src/js/characters/Magician.js\");\n/* harmony import */ var _characters_Swordsman__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./characters/Swordsman */ \"./src/js/characters/Swordsman.js\");\n/* harmony import */ var _characters_Daemon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./characters/Daemon */ \"./src/js/characters/Daemon.js\");\n/* harmony import */ var _characters_Undead__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./characters/Undead */ \"./src/js/characters/Undead.js\");\n/* harmony import */ var _characters_Vampire__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./characters/Vampire */ \"./src/js/characters/Vampire.js\");\n/* harmony import */ var _GamePlay__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./GamePlay */ \"./src/js/GamePlay.js\");\n/* harmony import */ var _GameState__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./GameState */ \"./src/js/GameState.js\");\n/* harmony import */ var _cursors__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./cursors */ \"./src/js/cursors.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _createForOfIteratorHelper(r, e) { var t = \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && \"number\" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t[\"return\"] || t[\"return\"](); } finally { if (u) throw o; } } }; }\nfunction _unsupportedIterableToArray(r, a) { if (r) { if (\"string\" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return \"Object\" === t && r.constructor && (t = r.constructor.name), \"Map\" === t || \"Set\" === t ? Array.from(r) : \"Arguments\" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }\nfunction _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }\nfunction _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = \"function\" == typeof Symbol ? Symbol : {}, n = r.iterator || \"@@iterator\", o = r.toStringTag || \"@@toStringTag\"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, \"_invoke\", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError(\"Generator is already running\"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = \"next\"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError(\"iterator result is not an object\"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i[\"return\"]) && t.call(i), c < 2 && (u = TypeError(\"The iterator does not provide a '\" + o + \"' method\"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, \"GeneratorFunction\")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, \"constructor\", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, \"constructor\", GeneratorFunction), GeneratorFunction.displayName = \"GeneratorFunction\", _regeneratorDefine2(GeneratorFunctionPrototype, o, \"GeneratorFunction\"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, \"Generator\"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, \"toString\", function () { return \"[object Generator]\"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }\nfunction _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, \"\", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o(\"next\", 0), o(\"throw\", 1), o(\"return\", 2)); }, _regeneratorDefine2(e, r, n, t); }\nfunction asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }\nfunction _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, \"next\", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, \"throw\", n); } _next(void 0); }); }; }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n\n\n\n\n\n\n\n\n\n\n\n\nvar GameController = /*#__PURE__*/function () {\n  function GameController(gamePlay, stateService) {\n    _classCallCheck(this, GameController);\n    this.gamePlay = gamePlay;\n    this.stateService = stateService;\n    this.currentTheme = 'prairie';\n    this.characterPossitionList = [];\n    this.selectedCell = null;\n    this.state = new _GameState__WEBPACK_IMPORTED_MODULE_10__[\"default\"]();\n    this.cursor = _cursors__WEBPACK_IMPORTED_MODULE_11__[\"default\"];\n    this.playerCharacrersType = ['bowman', 'magician', 'swordsman'];\n    this.enemyCharactersType = ['daemon', 'undead', 'vampire'];\n    this.isGameOver = false;\n  }\n  return _createClass(GameController, [{\n    key: \"init\",\n    value: function init() {\n      this.gamePlay.drawUi(_themes__WEBPACK_IMPORTED_MODULE_2__[\"default\"][this.currentTheme]);\n      var loaded = this.loadState();\n      if (!loaded) {\n        this.initGame();\n      }\n      this.gamePlay.addCellEnterListener(this.onCellEnter.bind(this));\n      this.gamePlay.addCellLeaveListener(this.onCellLeave.bind(this));\n      this.gamePlay.addCellClickListener(this.onCellClick.bind(this));\n      this.gamePlay.addNewGameListener(this.onNewGame.bind(this));\n    }\n  }, {\n    key: \"onCellClick\",\n    value: function () {\n      var _onCellClick = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(index) {\n        var _this = this;\n        var positionedChar, character, attacker, distance, damage, movingChar, _distance;\n        return _regenerator().w(function (_context) {\n          while (1) switch (_context.n) {\n            case 0:\n              if (!this.isGameOver) {\n                _context.n = 1;\n                break;\n              }\n              return _context.a(2);\n            case 1:\n              positionedChar = this.characterPossitionList.find(function (p) {\n                return p.position === index;\n              });\n              if (!positionedChar) {\n                _context.n = 9;\n                break;\n              }\n              character = positionedChar.character;\n              if (!this.enemyCharactersType.includes(character.type)) {\n                _context.n = 7;\n                break;\n              }\n              if (!(this.selectedCell === null)) {\n                _context.n = 2;\n                break;\n              }\n              _GamePlay__WEBPACK_IMPORTED_MODULE_9__[\"default\"].showError('Вы не можете ходить персонажем соперника');\n              return _context.a(2);\n            case 2:\n              attacker = this.getSelectedCharacter();\n              distance = this.getDistance(this.selectedCell, index);\n              if (!(distance > attacker.attackDistance)) {\n                _context.n = 3;\n                break;\n              }\n              _GamePlay__WEBPACK_IMPORTED_MODULE_9__[\"default\"].showError('Слишком далеко');\n              return _context.a(2);\n            case 3:\n              damage = Math.max(attacker.attack - character.defence, attacker.attack * 0.1);\n              character.health -= damage;\n              _context.n = 4;\n              return this.gamePlay.showDamage(index, damage);\n            case 4:\n              if (character.health <= 0) {\n                this.characterPossitionList = this.characterPossitionList.filter(function (p) {\n                  return p.position !== index;\n                });\n              }\n              this.gamePlay.deselectCell(this.selectedCell);\n              this.gamePlay.deselectCell(index);\n              this.selectedCell = null;\n              this.gamePlay.redrawPositions(this.characterPossitionList);\n              this.gamePlay.setCursor(this.cursor.auto);\n              this.state.currentTurn = 'enemy';\n              if (!this.checkRoundEnd()) {\n                _context.n = 5;\n                break;\n              }\n              return _context.a(2);\n            case 5:\n              this.saveState();\n              _context.n = 6;\n              return this.computerTurn();\n            case 6:\n              _context.n = 8;\n              break;\n            case 7:\n              if (this.playerCharacrersType.includes(character.type)) {\n                if (this.selectedCell !== null) {\n                  if (this.selectedCell !== index) {\n                    this.gamePlay.deselectCell(this.selectedCell);\n                    this.gamePlay.selectCell(index);\n                    this.selectedCell = index;\n                  } else {\n                    this.gamePlay.deselectCell(index);\n                    this.selectedCell = null;\n                  }\n                } else {\n                  this.gamePlay.selectCell(index);\n                  this.selectedCell = index;\n                }\n              }\n            case 8:\n              _context.n = 13;\n              break;\n            case 9:\n              if (!(this.selectedCell !== null)) {\n                _context.n = 12;\n                break;\n              }\n              movingChar = this.characterPossitionList.find(function (p) {\n                return p.position === _this.selectedCell;\n              });\n              _distance = this.getDistance(this.selectedCell, index);\n              if (!(_distance > movingChar.character.moveDistance)) {\n                _context.n = 10;\n                break;\n              }\n              _GamePlay__WEBPACK_IMPORTED_MODULE_9__[\"default\"].showError('Слишком далеко');\n              return _context.a(2);\n            case 10:\n              movingChar.position = index;\n              this.gamePlay.deselectCell(this.selectedCell);\n              this.gamePlay.deselectCell(index);\n              this.selectedCell = null;\n              this.gamePlay.redrawPositions(this.characterPossitionList);\n              this.gamePlay.setCursor(this.cursor.auto);\n              this.state.currentTurn = 'enemy';\n              this.saveState();\n              _context.n = 11;\n              return this.computerTurn();\n            case 11:\n              _context.n = 13;\n              break;\n            case 12:\n              _GamePlay__WEBPACK_IMPORTED_MODULE_9__[\"default\"].showError('Выберите персонажа');\n            case 13:\n              return _context.a(2);\n          }\n        }, _callee, this);\n      }));\n      function onCellClick(_x) {\n        return _onCellClick.apply(this, arguments);\n      }\n      return onCellClick;\n    }()\n  }, {\n    key: \"onCellEnter\",\n    value: function onCellEnter(index) {\n      if (this.isGameOver) return;\n      var positionedChar = this.characterPossitionList.find(function (p) {\n        return p.position === index;\n      });\n      if (this.selectedCell !== null) {\n        var selectedChar = this.getSelectedCharacter();\n        if (!selectedChar) return;\n        var distance = this.getDistance(this.selectedCell, index);\n        if (positionedChar) {\n          var character = positionedChar.character;\n          this.gamePlay.showCellTooltip(GameController.getCharacterInfo(character), index);\n          if (this.playerCharacrersType.includes(character.type)) {\n            this.gamePlay.setCursor(this.cursor.pointer);\n          } else if (this.enemyCharactersType.includes(character.type) && distance <= selectedChar.attackDistance) {\n            this.gamePlay.setCursor(this.cursor.crosshair);\n            this.gamePlay.selectCell(index, 'red');\n          } else {\n            this.gamePlay.setCursor(this.cursor.notallowed);\n          }\n        } else {\n          if (distance <= selectedChar.moveDistance) {\n            this.gamePlay.setCursor(this.cursor.pointer);\n            this.gamePlay.selectCell(index, 'green');\n          } else {\n            this.gamePlay.setCursor(this.cursor.notallowed);\n          }\n        }\n      } else {\n        if (positionedChar) {\n          var _character = positionedChar.character;\n          this.gamePlay.showCellTooltip(GameController.getCharacterInfo(_character), index);\n          this.gamePlay.setCursor(this.playerCharacrersType.includes(_character.type) ? this.cursor.pointer : this.cursor.notallowed);\n        } else {\n          this.gamePlay.setCursor(this.cursor.auto);\n        }\n      }\n    }\n  }, {\n    key: \"getDistance\",\n    value: function getDistance(fromIndex, toIndex) {\n      var rowCharacter = Math.floor(fromIndex / this.gamePlay.boardSize);\n      var columnCharacter = fromIndex % this.gamePlay.boardSize;\n      var rowPoint = Math.floor(toIndex / this.gamePlay.boardSize);\n      var columnPoint = toIndex % this.gamePlay.boardSize;\n      var rowDiff = Math.abs(rowCharacter - rowPoint);\n      var columnDiff = Math.abs(columnCharacter - columnPoint);\n      return Math.max(rowDiff, columnDiff);\n    }\n  }, {\n    key: \"getSelectedCharacter\",\n    value: function getSelectedCharacter() {\n      var _this2 = this;\n      var positionCharacter = this.characterPossitionList.find(function (p) {\n        return p.position === _this2.selectedCell;\n      });\n      if (positionCharacter) {\n        return positionCharacter.character;\n      } else {\n        return null;\n      }\n    }\n  }, {\n    key: \"onCellLeave\",\n    value: function onCellLeave(index) {\n      if (this.isGameOver) return;\n      this.gamePlay.hideCellTooltip(index);\n      if (index !== this.selectedCell) {\n        this.gamePlay.deselectCell(index);\n      }\n    }\n  }, {\n    key: \"computerTurn\",\n    value: function () {\n      var _computerTurn = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {\n        var _this3 = this;\n        var enemies, players, _iterator, _step, enemy, target, randomEnemy, _t;\n        return _regenerator().w(function (_context2) {\n          while (1) switch (_context2.p = _context2.n) {\n            case 0:\n              enemies = this.characterPossitionList.filter(function (p) {\n                return _this3.enemyCharactersType.includes(p.character.type);\n              });\n              players = this.characterPossitionList.filter(function (p) {\n                return _this3.playerCharacrersType.includes(p.character.type);\n              });\n              if (!(players.length === 0 || enemies.length === 0)) {\n                _context2.n = 1;\n                break;\n              }\n              return _context2.a(2);\n            case 1:\n              _iterator = _createForOfIteratorHelper(enemies);\n              _context2.p = 2;\n              _iterator.s();\n            case 3:\n              if ((_step = _iterator.n()).done) {\n                _context2.n = 7;\n                break;\n              }\n              enemy = _step.value;\n              target = this.findBestTarget(enemy, players);\n              if (!target) {\n                _context2.n = 6;\n                break;\n              }\n              _context2.n = 4;\n              return this.performAttack(enemy, target);\n            case 4:\n              if (!this.checkRoundEnd()) {\n                _context2.n = 5;\n                break;\n              }\n              return _context2.a(2);\n            case 5:\n              return _context2.a(2);\n            case 6:\n              _context2.n = 3;\n              break;\n            case 7:\n              _context2.n = 9;\n              break;\n            case 8:\n              _context2.p = 8;\n              _t = _context2.v;\n              _iterator.e(_t);\n            case 9:\n              _context2.p = 9;\n              _iterator.f();\n              return _context2.f(9);\n            case 10:\n              randomEnemy = enemies[Math.floor(Math.random() * enemies.length)];\n              this.moveRandomly(randomEnemy);\n              if (!this.checkRoundEnd()) {\n                _context2.n = 11;\n                break;\n              }\n              return _context2.a(2);\n            case 11:\n              this.saveState();\n              this.state.currentTurn = 'player';\n            case 12:\n              return _context2.a(2);\n          }\n        }, _callee2, this, [[2, 8, 9, 10]]);\n      }));\n      function computerTurn() {\n        return _computerTurn.apply(this, arguments);\n      }\n      return computerTurn;\n    }()\n  }, {\n    key: \"findBestTarget\",\n    value: function findBestTarget(enemy, players) {\n      var bestTarget = null;\n      var lowestHealth = Infinity;\n      var _iterator2 = _createForOfIteratorHelper(players),\n        _step2;\n      try {\n        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n          var player = _step2.value;\n          var distance = this.getDistance(enemy.position, player.position);\n          if (distance <= enemy.character.attackDistance && player.character.health < lowestHealth) {\n            lowestHealth = player.character.health;\n            bestTarget = player;\n          }\n        }\n      } catch (err) {\n        _iterator2.e(err);\n      } finally {\n        _iterator2.f();\n      }\n      return bestTarget;\n    }\n  }, {\n    key: \"performAttack\",\n    value: function () {\n      var _performAttack = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(attacker, target) {\n        var damage;\n        return _regenerator().w(function (_context3) {\n          while (1) switch (_context3.n) {\n            case 0:\n              damage = Math.max(attacker.character.attack - target.character.defence, attacker.character.attack * 0.1);\n              target.character.health -= damage;\n              _context3.n = 1;\n              return this.gamePlay.showDamage(target.position, damage);\n            case 1:\n              if (target.character.health <= 0) {\n                this.characterPossitionList = this.characterPossitionList.filter(function (p) {\n                  return p.position !== target.position;\n                });\n              }\n              this.gamePlay.redrawPositions(this.characterPossitionList);\n              this.state.currentTurn = 'player';\n            case 2:\n              return _context3.a(2);\n          }\n        }, _callee3, this);\n      }));\n      function performAttack(_x2, _x3) {\n        return _performAttack.apply(this, arguments);\n      }\n      return performAttack;\n    }()\n  }, {\n    key: \"moveRandomly\",\n    value: function moveRandomly(enemy) {\n      var _this4 = this;\n      var players = this.characterPossitionList.filter(function (p) {\n        return _this4.playerCharacrersType.includes(p.character.type);\n      });\n      if (players.length === 0) return;\n      var closestPlayer = players[0];\n      var closestDistance = this.getDistance(enemy.position, closestPlayer.position);\n      var _iterator3 = _createForOfIteratorHelper(players),\n        _step3;\n      try {\n        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {\n          var player = _step3.value;\n          var dist = this.getDistance(enemy.position, player.position);\n          if (dist < closestDistance) {\n            closestDistance = dist;\n            closestPlayer = player;\n          }\n        }\n      } catch (err) {\n        _iterator3.e(err);\n      } finally {\n        _iterator3.f();\n      }\n      var possibleMoves = [];\n      var _loop = function _loop(i) {\n        var isOccupied = _this4.characterPossitionList.some(function (p) {\n          return p.position === i;\n        });\n        if (!isOccupied) {\n          var _dist = _this4.getDistance(enemy.position, i);\n          if (_dist <= enemy.character.moveDistance) {\n            possibleMoves.push(i);\n          }\n        }\n      };\n      for (var i = 0; i < Math.pow(this.gamePlay.boardSize, 2); i++) {\n        _loop(i);\n      }\n      var bestMove = null;\n      var bestNewDistance = Infinity;\n      for (var _i = 0, _possibleMoves = possibleMoves; _i < _possibleMoves.length; _i++) {\n        var move = _possibleMoves[_i];\n        var newDist = this.getDistance(move, closestPlayer.position);\n        if (newDist < bestNewDistance) {\n          bestNewDistance = newDist;\n          bestMove = move;\n        }\n      }\n      if (bestMove != null) {\n        enemy.position = bestMove;\n        this.gamePlay.redrawPositions(this.characterPossitionList);\n      }\n    }\n  }, {\n    key: \"checkRoundEnd\",\n    value: function checkRoundEnd() {\n      var _this5 = this;\n      var enemies = this.characterPossitionList.filter(function (p) {\n        return _this5.enemyCharactersType.includes(p.character.type);\n      });\n      var players = this.characterPossitionList.filter(function (p) {\n        return _this5.playerCharacrersType.includes(p.character.type);\n      });\n      if (players.length === 0) {\n        var enemiesRemaning = this.characterPossitionList.filter(function (p) {\n          return _this5.enemyCharactersType.includes(p.character.type);\n        });\n        var score = enemiesRemaning.reduce(function (sum, e) {\n          return sum + e.character.health;\n        }, 0);\n        if (score > this.state.maxScore) {\n          this.state.maxScore = score;\n        }\n        _GamePlay__WEBPACK_IMPORTED_MODULE_9__[\"default\"].showMessage(\"\\u0412\\u044B \\u043F\\u0440\\u043E\\u0438\\u0433\\u0440\\u0430\\u043B\\u0438! \\u0420\\u0435\\u043A\\u043E\\u0440\\u0434 - \".concat(this.state.maxScore));\n        this.blockBoard();\n        return true;\n      } else if (enemies.length === 0) {\n        this.nextLevel();\n        return true;\n      } else {\n        return false;\n      }\n    }\n  }, {\n    key: \"nextLevel\",\n    value: function nextLevel() {\n      var _this6 = this;\n      var players = this.characterPossitionList.filter(function (p) {\n        return _this6.playerCharacrersType.includes(p.character.type);\n      });\n      var _iterator4 = _createForOfIteratorHelper(players),\n        _step4;\n      try {\n        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {\n          var player = _step4.value;\n          this.levelUpCharacter(player.character);\n        }\n      } catch (err) {\n        _iterator4.e(err);\n      } finally {\n        _iterator4.f();\n      }\n      var themesList = Object.keys(_themes__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n      var currentIndex = themesList.indexOf(this.currentTheme);\n      if (currentIndex < themesList.length - 1) {\n        this.currentTheme = themesList[currentIndex + 1];\n        this.gamePlay.drawUi(_themes__WEBPACK_IMPORTED_MODULE_2__[\"default\"][this.currentTheme]);\n      } else {\n        var score = players.reduce(function (sum, p) {\n          return sum + p.character.health;\n        }, 0);\n        if (score > this.state.maxScore) {\n          this.state.maxScore = score;\n        }\n        _GamePlay__WEBPACK_IMPORTED_MODULE_9__[\"default\"].showMessage(\"\\u0412\\u044B \\u043F\\u043E\\u0431\\u0435\\u0434\\u0438\\u043B\\u0438! \\u0420\\u0435\\u043A\\u043E\\u0440\\u0434 - \".concat(this.state.maxScore));\n        this.blockBoard();\n        return;\n      }\n      this.initGame();\n    }\n  }, {\n    key: \"levelUpCharacter\",\n    value: function levelUpCharacter(character) {\n      character.health = Math.min(character.health + 80, 100);\n      var lifePercent = character.health;\n      character.attack = Math.max(character.attack, Math.floor(character.attack * (80 + lifePercent) / 100));\n      character.defence = Math.max(character.defence, Math.floor(character.defence * (80 + lifePercent) / 100));\n      character.level += 1;\n    }\n  }, {\n    key: \"initGame\",\n    value: function initGame() {\n      var playerTeam = (0,_generators__WEBPACK_IMPORTED_MODULE_0__.generateTeam)([_characters_Bowman__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _characters_Magician__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _characters_Swordsman__WEBPACK_IMPORTED_MODULE_5__[\"default\"]], 5, 4);\n      var enemyTeam = (0,_generators__WEBPACK_IMPORTED_MODULE_0__.generateTeam)([_characters_Daemon__WEBPACK_IMPORTED_MODULE_6__[\"default\"], _characters_Undead__WEBPACK_IMPORTED_MODULE_7__[\"default\"], _characters_Vampire__WEBPACK_IMPORTED_MODULE_8__[\"default\"]], 5, 4);\n      this.characterPossitionList = [];\n      var setPositions = new Set();\n      for (var index = 0; index < playerTeam.characters.length; index++) {\n        var character = playerTeam.characters[index];\n        var position = void 0;\n        do {\n          var randomRow = Math.floor(Math.random() * this.gamePlay.boardSize);\n          var randomColumn = Math.floor(Math.random() * 2);\n          position = randomRow * this.gamePlay.boardSize + randomColumn;\n        } while (setPositions.has(position));\n        setPositions.add(position);\n        this.characterPossitionList.push(new _PositionedCharacter__WEBPACK_IMPORTED_MODULE_1__[\"default\"](character, position));\n      }\n      for (var _index = 0; _index < enemyTeam.characters.length; _index++) {\n        var _character2 = enemyTeam.characters[_index];\n        var _position = void 0;\n        do {\n          var _randomRow = Math.floor(Math.random() * this.gamePlay.boardSize);\n          var _randomColumn = 6 + Math.floor(Math.random() * 2);\n          _position = _randomRow * this.gamePlay.boardSize + _randomColumn;\n        } while (setPositions.has(_position));\n        setPositions.add(_position);\n        this.characterPossitionList.push(new _PositionedCharacter__WEBPACK_IMPORTED_MODULE_1__[\"default\"](_character2, _position));\n      }\n      this.gamePlay.redrawPositions(this.characterPossitionList);\n    }\n  }, {\n    key: \"blockBoard\",\n    value: function blockBoard() {\n      this.isGameOver = true;\n      this.gamePlay.setCursor(_cursors__WEBPACK_IMPORTED_MODULE_11__[\"default\"].auto);\n    }\n  }, {\n    key: \"unblockBoard\",\n    value: function unblockBoard() {\n      this.isGameOver = false;\n    }\n  }, {\n    key: \"onNewGame\",\n    value: function onNewGame() {\n      this.unblockBoard();\n      this.currentTheme = 'prairie';\n      this.state.currentTurn = 'player';\n      this.selectedCell = null;\n      this.gamePlay.drawUi(_themes__WEBPACK_IMPORTED_MODULE_2__[\"default\"][this.currentTheme]);\n      this.initGame();\n    }\n  }, {\n    key: \"saveState\",\n    value: function saveState() {\n      this.state.currentTheme = this.currentTheme;\n      this.state.characterPositions = this.characterPossitionList;\n      this.state.selectedCell = this.selectedCell;\n      this.stateService.save(this.state);\n    }\n  }, {\n    key: \"loadState\",\n    value: function loadState() {\n      try {\n        var loadedState = this.stateService.load();\n        if (!loadedState) return false;\n        this.state = _GameState__WEBPACK_IMPORTED_MODULE_10__[\"default\"].from(loadedState);\n        this.currentTheme = this.state.currentTheme;\n        this.characterPossitionList = this.state.characterPositions;\n        this.selectedCell = this.state.selectedCell;\n        this.gamePlay.drawUi(_themes__WEBPACK_IMPORTED_MODULE_2__[\"default\"][this.currentTheme]);\n        this.gamePlay.redrawPositions(this.characterPossitionList);\n        if (this.selectedCell !== null) {\n          this.gamePlay.selectCell(this.selectedCell);\n        }\n        return true;\n      } catch (e) {\n        _GamePlay__WEBPACK_IMPORTED_MODULE_9__[\"default\"].showError('Не удалось загрузить сохранение');\n        return false;\n      }\n    }\n  }], [{\n    key: \"getCharacterInfo\",\n    value: function getCharacterInfo(character) {\n      return \"\\uD83C\\uDF96 \".concat(character.level, \" \\u2694 \").concat(character.attack, \" \\uD83D\\uDEE1 \").concat(character.defence, \" \\u2764 \").concat(character.health);\n    }\n  }]);\n}();\n\n\n//# sourceURL=webpack://ajs_diplom/./src/js/GameController.js?\n}");

/***/ },

/***/ "./src/js/GamePlay.js"
/*!****************************!*\
  !*** ./src/js/GamePlay.js ***!
  \****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GamePlay)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/js/utils.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _iterableToArray(r) { if (\"undefined\" != typeof Symbol && null != r[Symbol.iterator] || null != r[\"@@iterator\"]) return Array.from(r); }\nfunction _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }\nfunction _createForOfIteratorHelper(r, e) { var t = \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && \"number\" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t[\"return\"] || t[\"return\"](); } finally { if (u) throw o; } } }; }\nfunction _unsupportedIterableToArray(r, a) { if (r) { if (\"string\" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return \"Object\" === t && r.constructor && (t = r.constructor.name), \"Map\" === t || \"Set\" === t ? Array.from(r) : \"Arguments\" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }\nfunction _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n\nvar GamePlay = /*#__PURE__*/function () {\n  function GamePlay() {\n    _classCallCheck(this, GamePlay);\n    this.boardSize = 8;\n    this.container = null;\n    this.boardEl = null;\n    this.cells = [];\n    this.cellClickListeners = [];\n    this.cellEnterListeners = [];\n    this.cellLeaveListeners = [];\n    this.newGameListeners = [];\n    this.saveGameListeners = [];\n    this.loadGameListeners = [];\n  }\n  return _createClass(GamePlay, [{\n    key: \"bindToDOM\",\n    value: function bindToDOM(container) {\n      if (!(container instanceof HTMLElement)) {\n        throw new Error('container is not HTMLElement');\n      }\n      this.container = container;\n    }\n\n    /**\r\n     * Draws boardEl with specific theme\r\n     *\r\n     * @param theme\r\n     */\n  }, {\n    key: \"drawUi\",\n    value: function drawUi(theme) {\n      var _this = this;\n      this.checkBinding();\n      this.container.innerHTML = \"\\n      <div class=\\\"controls\\\">\\n        <button data-id=\\\"action-restart\\\" class=\\\"btn\\\">New Game</button>\\n        <button data-id=\\\"action-save\\\" class=\\\"btn\\\">Save Game</button>\\n        <button data-id=\\\"action-load\\\" class=\\\"btn\\\">Load Game</button>\\n      </div>\\n      <div class=\\\"board-container\\\">\\n        <div data-id=\\\"board\\\" class=\\\"board\\\"></div>\\n      </div>\\n    \";\n      this.newGameEl = this.container.querySelector('[data-id=action-restart]');\n      this.saveGameEl = this.container.querySelector('[data-id=action-save]');\n      this.loadGameEl = this.container.querySelector('[data-id=action-load]');\n      this.newGameEl.addEventListener('click', function (event) {\n        return _this.onNewGameClick(event);\n      });\n      this.saveGameEl.addEventListener('click', function (event) {\n        return _this.onSaveGameClick(event);\n      });\n      this.loadGameEl.addEventListener('click', function (event) {\n        return _this.onLoadGameClick(event);\n      });\n      this.boardEl = this.container.querySelector('[data-id=board]');\n      this.boardEl.classList.add(theme);\n      for (var i = 0; i < Math.pow(this.boardSize, 2); i += 1) {\n        var cellEl = document.createElement('div');\n        cellEl.classList.add('cell', 'map-tile', \"map-tile-\".concat((0,_utils__WEBPACK_IMPORTED_MODULE_0__.calcTileType)(i, this.boardSize)));\n        cellEl.addEventListener('mouseenter', function (event) {\n          return _this.onCellEnter(event);\n        });\n        cellEl.addEventListener('mouseleave', function (event) {\n          return _this.onCellLeave(event);\n        });\n        cellEl.addEventListener('click', function (event) {\n          return _this.onCellClick(event);\n        });\n        this.boardEl.appendChild(cellEl);\n      }\n      this.cells = Array.from(this.boardEl.children);\n    }\n\n    /**\r\n     * Draws positions (with chars) on boardEl\r\n     *\r\n     * @param positions array of PositionedCharacter objects\r\n     */\n  }, {\n    key: \"redrawPositions\",\n    value: function redrawPositions(positions) {\n      var _iterator = _createForOfIteratorHelper(this.cells),\n        _step;\n      try {\n        for (_iterator.s(); !(_step = _iterator.n()).done;) {\n          var cell = _step.value;\n          cell.innerHTML = '';\n        }\n      } catch (err) {\n        _iterator.e(err);\n      } finally {\n        _iterator.f();\n      }\n      var _iterator2 = _createForOfIteratorHelper(positions),\n        _step2;\n      try {\n        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n          var position = _step2.value;\n          var cellEl = this.boardEl.children[position.position];\n          var charEl = document.createElement('div');\n          charEl.classList.add('character', position.character.type);\n          var healthEl = document.createElement('div');\n          healthEl.classList.add('health-level');\n          var healthIndicatorEl = document.createElement('div');\n          healthIndicatorEl.classList.add('health-level-indicator', \"health-level-indicator-\".concat((0,_utils__WEBPACK_IMPORTED_MODULE_0__.calcHealthLevel)(position.character.health)));\n          healthIndicatorEl.style.width = \"\".concat(position.character.health, \"%\");\n          healthEl.appendChild(healthIndicatorEl);\n          charEl.appendChild(healthEl);\n          cellEl.appendChild(charEl);\n        }\n      } catch (err) {\n        _iterator2.e(err);\n      } finally {\n        _iterator2.f();\n      }\n    }\n\n    /**\r\n     * Add listener to mouse enter for cell\r\n     *\r\n     * @param callback\r\n     */\n  }, {\n    key: \"addCellEnterListener\",\n    value: function addCellEnterListener(callback) {\n      this.cellEnterListeners.push(callback);\n    }\n\n    /**\r\n     * Add listener to mouse leave for cell\r\n     *\r\n     * @param callback\r\n     */\n  }, {\n    key: \"addCellLeaveListener\",\n    value: function addCellLeaveListener(callback) {\n      this.cellLeaveListeners.push(callback);\n    }\n\n    /**\r\n     * Add listener to mouse click for cell\r\n     *\r\n     * @param callback\r\n     */\n  }, {\n    key: \"addCellClickListener\",\n    value: function addCellClickListener(callback) {\n      this.cellClickListeners.push(callback);\n    }\n\n    /**\r\n     * Add listener to \"New Game\" button click\r\n     *\r\n     * @param callback\r\n     */\n  }, {\n    key: \"addNewGameListener\",\n    value: function addNewGameListener(callback) {\n      this.newGameListeners.push(callback);\n    }\n\n    /**\r\n     * Add listener to \"Save Game\" button click\r\n     *\r\n     * @param callback\r\n     */\n  }, {\n    key: \"addSaveGameListener\",\n    value: function addSaveGameListener(callback) {\n      this.saveGameListeners.push(callback);\n    }\n\n    /**\r\n     * Add listener to \"Load Game\" button click\r\n     *\r\n     * @param callback\r\n     */\n  }, {\n    key: \"addLoadGameListener\",\n    value: function addLoadGameListener(callback) {\n      this.loadGameListeners.push(callback);\n    }\n  }, {\n    key: \"onCellEnter\",\n    value: function onCellEnter(event) {\n      event.preventDefault();\n      var index = this.cells.indexOf(event.currentTarget);\n      this.cellEnterListeners.forEach(function (o) {\n        return o.call(null, index);\n      });\n    }\n  }, {\n    key: \"onCellLeave\",\n    value: function onCellLeave(event) {\n      event.preventDefault();\n      var index = this.cells.indexOf(event.currentTarget);\n      this.cellLeaveListeners.forEach(function (o) {\n        return o.call(null, index);\n      });\n    }\n  }, {\n    key: \"onCellClick\",\n    value: function onCellClick(event) {\n      var index = this.cells.indexOf(event.currentTarget);\n      this.cellClickListeners.forEach(function (o) {\n        return o.call(null, index);\n      });\n    }\n  }, {\n    key: \"onNewGameClick\",\n    value: function onNewGameClick(event) {\n      event.preventDefault();\n      this.newGameListeners.forEach(function (o) {\n        return o.call(null);\n      });\n    }\n  }, {\n    key: \"onSaveGameClick\",\n    value: function onSaveGameClick(event) {\n      event.preventDefault();\n      this.saveGameListeners.forEach(function (o) {\n        return o.call(null);\n      });\n    }\n  }, {\n    key: \"onLoadGameClick\",\n    value: function onLoadGameClick(event) {\n      event.preventDefault();\n      this.loadGameListeners.forEach(function (o) {\n        return o.call(null);\n      });\n    }\n  }, {\n    key: \"selectCell\",\n    value: function selectCell(index) {\n      var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'yellow';\n      this.deselectCell(index);\n      this.cells[index].classList.add('selected', \"selected-\".concat(color));\n    }\n  }, {\n    key: \"deselectCell\",\n    value: function deselectCell(index) {\n      var _cell$classList;\n      var cell = this.cells[index];\n      (_cell$classList = cell.classList).remove.apply(_cell$classList, _toConsumableArray(Array.from(cell.classList).filter(function (o) {\n        return o.startsWith('selected');\n      })));\n    }\n  }, {\n    key: \"showCellTooltip\",\n    value: function showCellTooltip(message, index) {\n      this.cells[index].title = message;\n    }\n  }, {\n    key: \"hideCellTooltip\",\n    value: function hideCellTooltip(index) {\n      this.cells[index].title = '';\n    }\n  }, {\n    key: \"showDamage\",\n    value: function showDamage(index, damage) {\n      var _this2 = this;\n      return new Promise(function (resolve) {\n        var cell = _this2.cells[index];\n        var damageEl = document.createElement('span');\n        damageEl.textContent = damage;\n        damageEl.classList.add('damage');\n        cell.appendChild(damageEl);\n        damageEl.addEventListener('animationend', function () {\n          cell.removeChild(damageEl);\n          resolve();\n        });\n      });\n    }\n  }, {\n    key: \"setCursor\",\n    value: function setCursor(cursor) {\n      this.boardEl.style.cursor = cursor;\n    }\n  }, {\n    key: \"checkBinding\",\n    value: function checkBinding() {\n      if (this.container === null) {\n        throw new Error('GamePlay not bind to DOM');\n      }\n    }\n  }], [{\n    key: \"showError\",\n    value: function showError(message) {\n      alert(message);\n    }\n  }, {\n    key: \"showMessage\",\n    value: function showMessage(message) {\n      alert(message);\n    }\n  }]);\n}();\n\n\n//# sourceURL=webpack://ajs_diplom/./src/js/GamePlay.js?\n}");

/***/ },

/***/ "./src/js/GameState.js"
/*!*****************************!*\
  !*** ./src/js/GameState.js ***!
  \*****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GameState)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nvar GameState = /*#__PURE__*/function () {\n  function GameState() {\n    _classCallCheck(this, GameState);\n    this.currentTurn = 'player';\n    this.currentTheme = 'prairie';\n    this.maxScore = 0;\n    this.characterPositions = [];\n    this.selectedCell = null;\n  }\n  return _createClass(GameState, null, [{\n    key: \"from\",\n    value: function from(object) {\n      var state = new GameState();\n      state.currentTurn = object.currentTurn;\n      state.currentTheme = object.currentTheme;\n      state.maxScore = object.maxScore;\n      state.characterPositions = object.characterPositions;\n      state.selectedCell = object.selectedCell;\n      return state;\n    }\n  }]);\n}();\n\n\n//# sourceURL=webpack://ajs_diplom/./src/js/GameState.js?\n}");

/***/ },

/***/ "./src/js/GameStateService.js"
/*!************************************!*\
  !*** ./src/js/GameStateService.js ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GameStateService)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nvar GameStateService = /*#__PURE__*/function () {\n  function GameStateService(storage) {\n    _classCallCheck(this, GameStateService);\n    this.storage = storage;\n  }\n  return _createClass(GameStateService, [{\n    key: \"save\",\n    value: function save(state) {\n      this.storage.setItem('state', JSON.stringify(state));\n    }\n  }, {\n    key: \"load\",\n    value: function load() {\n      try {\n        return JSON.parse(this.storage.getItem('state'));\n      } catch (_unused) {\n        throw new Error('Invalid state');\n      }\n    }\n  }]);\n}();\n\n\n//# sourceURL=webpack://ajs_diplom/./src/js/GameStateService.js?\n}");

/***/ },

/***/ "./src/js/PositionedCharacter.js"
/*!***************************************!*\
  !*** ./src/js/PositionedCharacter.js ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PositionedCharacter)\n/* harmony export */ });\n/* harmony import */ var _characters_Character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./characters/Character */ \"./src/js/characters/Character.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\n\nvar PositionedCharacter = /*#__PURE__*/_createClass(function PositionedCharacter(character, position) {\n  _classCallCheck(this, PositionedCharacter);\n  if (!(character instanceof _characters_Character__WEBPACK_IMPORTED_MODULE_0__[\"default\"])) {\n    throw new Error('character must be instance of Character or its children');\n  }\n  if (typeof position !== 'number') {\n    throw new Error('position must be a number');\n  }\n  this.character = character;\n  this.position = position;\n});\n\n\n//# sourceURL=webpack://ajs_diplom/./src/js/PositionedCharacter.js?\n}");

/***/ },

/***/ "./src/js/Team.js"
/*!************************!*\
  !*** ./src/js/Team.js ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Team)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\n/**\r\n * Класс, представляющий персонажей команды\r\n *\r\n * @todo Самостоятельно продумайте хранение персонажей в классе\r\n * Например\r\n * @example\r\n * ```js\r\n * const characters = [new Swordsman(2), new Bowman(1)]\r\n * const team = new Team(characters);\r\n *\r\n * team.characters // [swordsman, bowman]\r\n * ```\r\n * */\nvar Team = /*#__PURE__*/_createClass(function Team(characters) {\n  _classCallCheck(this, Team);\n  this.characters = characters;\n});\n\n\n//# sourceURL=webpack://ajs_diplom/./src/js/Team.js?\n}");

/***/ },

/***/ "./src/js/app.js"
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _GamePlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GamePlay */ \"./src/js/GamePlay.js\");\n/* harmony import */ var _GameController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GameController */ \"./src/js/GameController.js\");\n/* harmony import */ var _GameStateService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GameStateService */ \"./src/js/GameStateService.js\");\n/**\r\n * Entry point of app: don't change this\r\n */\n\n\n\nvar gamePlay = new _GamePlay__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\ngamePlay.bindToDOM(document.querySelector('#game-container'));\nvar stateService = new _GameStateService__WEBPACK_IMPORTED_MODULE_2__[\"default\"](localStorage);\nvar gameCtrl = new _GameController__WEBPACK_IMPORTED_MODULE_1__[\"default\"](gamePlay, stateService);\ngameCtrl.init();\n\n// don't write your code here\n\n//# sourceURL=webpack://ajs_diplom/./src/js/app.js?\n}");

/***/ },

/***/ "./src/js/characters/Bowman.js"
/*!*************************************!*\
  !*** ./src/js/characters/Bowman.js ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Bowman)\n/* harmony export */ });\n/* harmony import */ var _Character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Character */ \"./src/js/characters/Character.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }\nfunction _possibleConstructorReturn(t, e) { if (e && (\"object\" == _typeof(e) || \"function\" == typeof e)) return e; if (void 0 !== e) throw new TypeError(\"Derived constructors may only return object or undefined\"); return _assertThisInitialized(t); }\nfunction _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); return e; }\nfunction _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }\nfunction _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }\nfunction _inherits(t, e) { if (\"function\" != typeof e && null !== e) throw new TypeError(\"Super expression must either be null or a function\"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, \"prototype\", { writable: !1 }), e && _setPrototypeOf(t, e); }\nfunction _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }\n\nvar Bowman = /*#__PURE__*/function (_Character) {\n  function Bowman(level) {\n    var _this;\n    _classCallCheck(this, Bowman);\n    _this = _callSuper(this, Bowman, [level]);\n    _this.attack = 25;\n    _this.defence = 25;\n    _this.type = 'bowman';\n    _this.moveDistance = 2;\n    _this.attackDistance = 2;\n    return _this;\n  }\n  _inherits(Bowman, _Character);\n  return _createClass(Bowman);\n}(_Character__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\n//# sourceURL=webpack://ajs_diplom/./src/js/characters/Bowman.js?\n}");

/***/ },

/***/ "./src/js/characters/Character.js"
/*!****************************************!*\
  !*** ./src/js/characters/Character.js ***!
  \****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Character)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nvar Character = /*#__PURE__*/_createClass(function Character(level) {\n  _classCallCheck(this, Character);\n  if ((this instanceof Character ? this.constructor : void 0) === Character) {\n    throw new Error('Нельзя создать объект класса Character');\n  }\n  this.level = level;\n  this.attack = 0;\n  this.defence = 0;\n  this.health = 100;\n  this.type = '';\n});\n\n\n//# sourceURL=webpack://ajs_diplom/./src/js/characters/Character.js?\n}");

/***/ },

/***/ "./src/js/characters/Daemon.js"
/*!*************************************!*\
  !*** ./src/js/characters/Daemon.js ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Daemon)\n/* harmony export */ });\n/* harmony import */ var _Character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Character */ \"./src/js/characters/Character.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }\nfunction _possibleConstructorReturn(t, e) { if (e && (\"object\" == _typeof(e) || \"function\" == typeof e)) return e; if (void 0 !== e) throw new TypeError(\"Derived constructors may only return object or undefined\"); return _assertThisInitialized(t); }\nfunction _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); return e; }\nfunction _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }\nfunction _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }\nfunction _inherits(t, e) { if (\"function\" != typeof e && null !== e) throw new TypeError(\"Super expression must either be null or a function\"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, \"prototype\", { writable: !1 }), e && _setPrototypeOf(t, e); }\nfunction _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }\n\nvar Daemon = /*#__PURE__*/function (_Character) {\n  function Daemon(level) {\n    var _this;\n    _classCallCheck(this, Daemon);\n    _this = _callSuper(this, Daemon, [level]);\n    _this.attack = 10;\n    _this.defence = 10;\n    _this.type = 'daemon';\n    _this.moveDistance = 1;\n    _this.attackDistance = 4;\n    return _this;\n  }\n  _inherits(Daemon, _Character);\n  return _createClass(Daemon);\n}(_Character__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\n//# sourceURL=webpack://ajs_diplom/./src/js/characters/Daemon.js?\n}");

/***/ },

/***/ "./src/js/characters/Magician.js"
/*!***************************************!*\
  !*** ./src/js/characters/Magician.js ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Magician)\n/* harmony export */ });\n/* harmony import */ var _Character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Character */ \"./src/js/characters/Character.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }\nfunction _possibleConstructorReturn(t, e) { if (e && (\"object\" == _typeof(e) || \"function\" == typeof e)) return e; if (void 0 !== e) throw new TypeError(\"Derived constructors may only return object or undefined\"); return _assertThisInitialized(t); }\nfunction _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); return e; }\nfunction _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }\nfunction _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }\nfunction _inherits(t, e) { if (\"function\" != typeof e && null !== e) throw new TypeError(\"Super expression must either be null or a function\"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, \"prototype\", { writable: !1 }), e && _setPrototypeOf(t, e); }\nfunction _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }\n\nvar Magician = /*#__PURE__*/function (_Character) {\n  function Magician(level) {\n    var _this;\n    _classCallCheck(this, Magician);\n    _this = _callSuper(this, Magician, [level]);\n    _this.attack = 10;\n    _this.defence = 40;\n    _this.type = 'magician';\n    _this.moveDistance = 1;\n    _this.attackDistance = 4;\n    return _this;\n  }\n  _inherits(Magician, _Character);\n  return _createClass(Magician);\n}(_Character__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\n//# sourceURL=webpack://ajs_diplom/./src/js/characters/Magician.js?\n}");

/***/ },

/***/ "./src/js/characters/Swordsman.js"
/*!****************************************!*\
  !*** ./src/js/characters/Swordsman.js ***!
  \****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Swordsman)\n/* harmony export */ });\n/* harmony import */ var _Character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Character */ \"./src/js/characters/Character.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }\nfunction _possibleConstructorReturn(t, e) { if (e && (\"object\" == _typeof(e) || \"function\" == typeof e)) return e; if (void 0 !== e) throw new TypeError(\"Derived constructors may only return object or undefined\"); return _assertThisInitialized(t); }\nfunction _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); return e; }\nfunction _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }\nfunction _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }\nfunction _inherits(t, e) { if (\"function\" != typeof e && null !== e) throw new TypeError(\"Super expression must either be null or a function\"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, \"prototype\", { writable: !1 }), e && _setPrototypeOf(t, e); }\nfunction _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }\n\nvar Swordsman = /*#__PURE__*/function (_Character) {\n  function Swordsman(level) {\n    var _this;\n    _classCallCheck(this, Swordsman);\n    _this = _callSuper(this, Swordsman, [level]);\n    _this.attack = 40;\n    _this.defence = 10;\n    _this.type = 'swordsman';\n    _this.moveDistance = 4;\n    _this.attackDistance = 1;\n    return _this;\n  }\n  _inherits(Swordsman, _Character);\n  return _createClass(Swordsman);\n}(_Character__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\n//# sourceURL=webpack://ajs_diplom/./src/js/characters/Swordsman.js?\n}");

/***/ },

/***/ "./src/js/characters/Undead.js"
/*!*************************************!*\
  !*** ./src/js/characters/Undead.js ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Undead)\n/* harmony export */ });\n/* harmony import */ var _Character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Character */ \"./src/js/characters/Character.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }\nfunction _possibleConstructorReturn(t, e) { if (e && (\"object\" == _typeof(e) || \"function\" == typeof e)) return e; if (void 0 !== e) throw new TypeError(\"Derived constructors may only return object or undefined\"); return _assertThisInitialized(t); }\nfunction _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); return e; }\nfunction _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }\nfunction _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }\nfunction _inherits(t, e) { if (\"function\" != typeof e && null !== e) throw new TypeError(\"Super expression must either be null or a function\"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, \"prototype\", { writable: !1 }), e && _setPrototypeOf(t, e); }\nfunction _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }\n\nvar Undead = /*#__PURE__*/function (_Character) {\n  function Undead(level) {\n    var _this;\n    _classCallCheck(this, Undead);\n    _this = _callSuper(this, Undead, [level]);\n    _this.attack = 40;\n    _this.defence = 10;\n    _this.type = 'undead';\n    _this.moveDistance = 4;\n    _this.attackDistance = 1;\n    return _this;\n  }\n  _inherits(Undead, _Character);\n  return _createClass(Undead);\n}(_Character__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\n//# sourceURL=webpack://ajs_diplom/./src/js/characters/Undead.js?\n}");

/***/ },

/***/ "./src/js/characters/Vampire.js"
/*!**************************************!*\
  !*** ./src/js/characters/Vampire.js ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Vampire)\n/* harmony export */ });\n/* harmony import */ var _Character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Character */ \"./src/js/characters/Character.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }\nfunction _possibleConstructorReturn(t, e) { if (e && (\"object\" == _typeof(e) || \"function\" == typeof e)) return e; if (void 0 !== e) throw new TypeError(\"Derived constructors may only return object or undefined\"); return _assertThisInitialized(t); }\nfunction _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); return e; }\nfunction _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }\nfunction _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }\nfunction _inherits(t, e) { if (\"function\" != typeof e && null !== e) throw new TypeError(\"Super expression must either be null or a function\"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, \"prototype\", { writable: !1 }), e && _setPrototypeOf(t, e); }\nfunction _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }\n\nvar Vampire = /*#__PURE__*/function (_Character) {\n  function Vampire(level) {\n    var _this;\n    _classCallCheck(this, Vampire);\n    _this = _callSuper(this, Vampire, [level]);\n    _this.attack = 25;\n    _this.defence = 25;\n    _this.type = 'vampire';\n    _this.moveDistance = 2;\n    _this.attackDistance = 2;\n    return _this;\n  }\n  _inherits(Vampire, _Character);\n  return _createClass(Vampire);\n}(_Character__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\n//# sourceURL=webpack://ajs_diplom/./src/js/characters/Vampire.js?\n}");

/***/ },

/***/ "./src/js/cursors.js"
/*!***************************!*\
  !*** ./src/js/cursors.js ***!
  \***************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar cursors = {\n  auto: 'auto',\n  pointer: 'pointer',\n  crosshair: 'crosshair',\n  notallowed: 'not-allowed'\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cursors);\n\n//# sourceURL=webpack://ajs_diplom/./src/js/cursors.js?\n}");

/***/ },

/***/ "./src/js/generators.js"
/*!******************************!*\
  !*** ./src/js/generators.js ***!
  \******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   characterGenerator: () => (/* binding */ characterGenerator),\n/* harmony export */   generateTeam: () => (/* binding */ generateTeam)\n/* harmony export */ });\n/* harmony import */ var _Team__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Team */ \"./src/js/Team.js\");\nfunction _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = \"function\" == typeof Symbol ? Symbol : {}, n = r.iterator || \"@@iterator\", o = r.toStringTag || \"@@toStringTag\"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, \"_invoke\", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError(\"Generator is already running\"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = \"next\"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError(\"iterator result is not an object\"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i[\"return\"]) && t.call(i), c < 2 && (u = TypeError(\"The iterator does not provide a '\" + o + \"' method\"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, \"GeneratorFunction\")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, \"constructor\", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, \"constructor\", GeneratorFunction), GeneratorFunction.displayName = \"GeneratorFunction\", _regeneratorDefine2(GeneratorFunctionPrototype, o, \"GeneratorFunction\"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, \"Generator\"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, \"toString\", function () { return \"[object Generator]\"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }\nfunction _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, \"\", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o(\"next\", 0), o(\"throw\", 1), o(\"return\", 2)); }, _regeneratorDefine2(e, r, n, t); }\nvar _marked = /*#__PURE__*/_regenerator().m(characterGenerator);\n\n\n/**\r\n * Формирует экземпляр персонажа из массива allowedTypes со\r\n * случайным уровнем от 1 до maxLevel\r\n *\r\n * @param allowedTypes массив классов\r\n * @param maxLevel максимальный возможный уровень персонажа\r\n * @returns генератор, который при каждом вызове\r\n * возвращает новый экземпляр класса персонажа\r\n *\r\n */\nfunction characterGenerator(allowedTypes, maxLevel) {\n  var randomIndex, generatedClass, level;\n  return _regenerator().w(function (_context) {\n    while (1) switch (_context.n) {\n      case 0:\n        if (false) // removed by dead control flow\n{}\n        randomIndex = Math.floor(Math.random() * allowedTypes.length);\n        generatedClass = allowedTypes[randomIndex];\n        level = Math.floor(Math.random() * maxLevel) + 1;\n        _context.n = 1;\n        return new generatedClass(level);\n      case 1:\n        _context.n = 0;\n        break;\n      case 2:\n        return _context.a(2);\n    }\n  }, _marked);\n}\n\n/**\r\n * Формирует массив персонажей на основе characterGenerator\r\n * @param allowedTypes массив классов\r\n * @param maxLevel максимальный возможный уровень персонажа\r\n * @param characterCount количество персонажей, которое нужно сформировать\r\n * @returns экземпляр Team, хранящий экземпляры персонажей. Количество персонажей в команде - characterCount\r\n * */\nfunction generateTeam(allowedTypes, maxLevel, characterCount) {\n  var generator = characterGenerator(allowedTypes, maxLevel);\n  var team = [];\n  for (var index = 0; index < characterCount; index++) {\n    team.push(generator.next().value);\n  }\n  return new _Team__WEBPACK_IMPORTED_MODULE_0__[\"default\"](team);\n}\n\n//# sourceURL=webpack://ajs_diplom/./src/js/generators.js?\n}");

/***/ },

/***/ "./src/js/themes.js"
/*!**************************!*\
  !*** ./src/js/themes.js ***!
  \**************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar themes = {\n  prairie: 'prairie',\n  desert: 'desert',\n  arctic: 'arctic',\n  mountain: 'mountain'\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (themes);\n\n//# sourceURL=webpack://ajs_diplom/./src/js/themes.js?\n}");

/***/ },

/***/ "./src/js/utils.js"
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   calcHealthLevel: () => (/* binding */ calcHealthLevel),\n/* harmony export */   calcTileType: () => (/* binding */ calcTileType)\n/* harmony export */ });\n/**\r\n * @todo\r\n * @param index - индекс поля\r\n * @param boardSize - размер квадратного поля (в длину или ширину)\r\n * @returns строка - тип ячейки на поле:\r\n *\r\n * top-left\r\n * top-right\r\n * top\r\n * bottom-left\r\n * bottom-right\r\n * bottom\r\n * right\r\n * left\r\n * center\r\n *\r\n * @example\r\n * ```js\r\n * calcTileType(0, 8); // 'top-left'\r\n * calcTileType(1, 8); // 'top'\r\n * calcTileType(63, 8); // 'bottom-right'\r\n * calcTileType(7, 7); // 'left'\r\n * ```\r\n * */\nfunction calcTileType(index, boardSize) {\n  var row = Math.floor(index / boardSize);\n  var col = index % boardSize;\n  if (row === 0 && col === 0) {\n    return 'top-left';\n  } else if (row === 0 && col === boardSize - 1) {\n    return 'top-right';\n  } else if (row === boardSize - 1 && col === 0) {\n    return 'bottom-left';\n  } else if (row === boardSize - 1 && col === boardSize - 1) {\n    return 'bottom-right';\n  } else if (row === 0 && col < boardSize - 1 && col > 0) {\n    return 'top';\n  } else if (row === boardSize - 1 && col > 0 && col < boardSize - 1) {\n    return 'bottom';\n  } else if (row > 0 && row < boardSize - 1 && col === 0) {\n    return 'left';\n  } else if (row > 0 && row < boardSize - 1 && col === boardSize - 1) {\n    return 'right';\n  }\n  return 'center';\n}\nfunction calcHealthLevel(health) {\n  if (health < 15) {\n    return 'critical';\n  }\n  if (health < 50) {\n    return 'normal';\n  }\n  return 'high';\n}\n\n//# sourceURL=webpack://ajs_diplom/./src/js/utils.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css"
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../img/prairie/map-tile-top-left.png */ \"./src/img/prairie/map-tile-top-left.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../img/prairie/map-tile-top.png */ \"./src/img/prairie/map-tile-top.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../img/prairie/map-tile-top-right.png */ \"./src/img/prairie/map-tile-top-right.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../img/prairie/map-tile-bottom-left.png */ \"./src/img/prairie/map-tile-bottom-left.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../img/prairie/map-tile-bottom.png */ \"./src/img/prairie/map-tile-bottom.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../img/prairie/map-tile-bottom-right.png */ \"./src/img/prairie/map-tile-bottom-right.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../img/prairie/map-tile-left.png */ \"./src/img/prairie/map-tile-left.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../img/prairie/map-tile-right.png */ \"./src/img/prairie/map-tile-right.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ../img/prairie/map-tile-center.png */ \"./src/img/prairie/map-tile-center.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ../img/desert/map-tile-top-left.png */ \"./src/img/desert/map-tile-top-left.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ../img/desert/map-tile-top.png */ \"./src/img/desert/map-tile-top.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ../img/desert/map-tile-top-right.png */ \"./src/img/desert/map-tile-top-right.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ../img/desert/map-tile-bottom-left.png */ \"./src/img/desert/map-tile-bottom-left.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! ../img/desert/map-tile-bottom.png */ \"./src/img/desert/map-tile-bottom.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(/*! ../img/desert/map-tile-bottom-right.png */ \"./src/img/desert/map-tile-bottom-right.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_15___ = new URL(/* asset import */ __webpack_require__(/*! ../img/desert/map-tile-left.png */ \"./src/img/desert/map-tile-left.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_16___ = new URL(/* asset import */ __webpack_require__(/*! ../img/desert/map-tile-right.png */ \"./src/img/desert/map-tile-right.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_17___ = new URL(/* asset import */ __webpack_require__(/*! ../img/desert/map-tile-center.png */ \"./src/img/desert/map-tile-center.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_18___ = new URL(/* asset import */ __webpack_require__(/*! ../img/arctic/map-tile-top-left.png */ \"./src/img/arctic/map-tile-top-left.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_19___ = new URL(/* asset import */ __webpack_require__(/*! ../img/arctic/map-tile-top.png */ \"./src/img/arctic/map-tile-top.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_20___ = new URL(/* asset import */ __webpack_require__(/*! ../img/arctic/map-tile-top-right.png */ \"./src/img/arctic/map-tile-top-right.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_21___ = new URL(/* asset import */ __webpack_require__(/*! ../img/arctic/map-tile-bottom-left.png */ \"./src/img/arctic/map-tile-bottom-left.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_22___ = new URL(/* asset import */ __webpack_require__(/*! ../img/arctic/map-tile-bottom.png */ \"./src/img/arctic/map-tile-bottom.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_23___ = new URL(/* asset import */ __webpack_require__(/*! ../img/arctic/map-tile-bottom-right.png */ \"./src/img/arctic/map-tile-bottom-right.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_24___ = new URL(/* asset import */ __webpack_require__(/*! ../img/arctic/map-tile-left.png */ \"./src/img/arctic/map-tile-left.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_25___ = new URL(/* asset import */ __webpack_require__(/*! ../img/arctic/map-tile-right.png */ \"./src/img/arctic/map-tile-right.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_26___ = new URL(/* asset import */ __webpack_require__(/*! ../img/arctic/map-tile-center.png */ \"./src/img/arctic/map-tile-center.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_27___ = new URL(/* asset import */ __webpack_require__(/*! ../img/mountain/map-tile-top-left.png */ \"./src/img/mountain/map-tile-top-left.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_28___ = new URL(/* asset import */ __webpack_require__(/*! ../img/mountain/map-tile-top.png */ \"./src/img/mountain/map-tile-top.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_29___ = new URL(/* asset import */ __webpack_require__(/*! ../img/mountain/map-tile-top-right.png */ \"./src/img/mountain/map-tile-top-right.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_30___ = new URL(/* asset import */ __webpack_require__(/*! ../img/mountain/map-tile-bottom-left.png */ \"./src/img/mountain/map-tile-bottom-left.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_31___ = new URL(/* asset import */ __webpack_require__(/*! ../img/mountain/map-tile-bottom.png */ \"./src/img/mountain/map-tile-bottom.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_32___ = new URL(/* asset import */ __webpack_require__(/*! ../img/mountain/map-tile-bottom-right.png */ \"./src/img/mountain/map-tile-bottom-right.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_33___ = new URL(/* asset import */ __webpack_require__(/*! ../img/mountain/map-tile-left.png */ \"./src/img/mountain/map-tile-left.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_34___ = new URL(/* asset import */ __webpack_require__(/*! ../img/mountain/map-tile-right.png */ \"./src/img/mountain/map-tile-right.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_35___ = new URL(/* asset import */ __webpack_require__(/*! ../img/mountain/map-tile-center.png */ \"./src/img/mountain/map-tile-center.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_36___ = new URL(/* asset import */ __webpack_require__(/*! ../img/characters/generic.png */ \"./src/img/characters/generic.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_37___ = new URL(/* asset import */ __webpack_require__(/*! ../img/characters/bowman.png */ \"./src/img/characters/bowman.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_38___ = new URL(/* asset import */ __webpack_require__(/*! ../img/characters/daemon.png */ \"./src/img/characters/daemon.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_39___ = new URL(/* asset import */ __webpack_require__(/*! ../img/characters/magician.png */ \"./src/img/characters/magician.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_40___ = new URL(/* asset import */ __webpack_require__(/*! ../img/characters/swordsman.png */ \"./src/img/characters/swordsman.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_41___ = new URL(/* asset import */ __webpack_require__(/*! ../img/characters/undead.png */ \"./src/img/characters/undead.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_42___ = new URL(/* asset import */ __webpack_require__(/*! ../img/characters/vampire.png */ \"./src/img/characters/vampire.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_43___ = new URL(/* asset import */ __webpack_require__(/*! ../img/characters/zombie.png */ \"./src/img/characters/zombie.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);\nvar ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);\nvar ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);\nvar ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);\nvar ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);\nvar ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_8___);\nvar ___CSS_LOADER_URL_REPLACEMENT_9___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_9___);\nvar ___CSS_LOADER_URL_REPLACEMENT_10___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_10___);\nvar ___CSS_LOADER_URL_REPLACEMENT_11___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_11___);\nvar ___CSS_LOADER_URL_REPLACEMENT_12___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_12___);\nvar ___CSS_LOADER_URL_REPLACEMENT_13___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_13___);\nvar ___CSS_LOADER_URL_REPLACEMENT_14___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_14___);\nvar ___CSS_LOADER_URL_REPLACEMENT_15___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_15___);\nvar ___CSS_LOADER_URL_REPLACEMENT_16___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_16___);\nvar ___CSS_LOADER_URL_REPLACEMENT_17___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_17___);\nvar ___CSS_LOADER_URL_REPLACEMENT_18___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_18___);\nvar ___CSS_LOADER_URL_REPLACEMENT_19___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_19___);\nvar ___CSS_LOADER_URL_REPLACEMENT_20___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_20___);\nvar ___CSS_LOADER_URL_REPLACEMENT_21___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_21___);\nvar ___CSS_LOADER_URL_REPLACEMENT_22___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_22___);\nvar ___CSS_LOADER_URL_REPLACEMENT_23___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_23___);\nvar ___CSS_LOADER_URL_REPLACEMENT_24___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_24___);\nvar ___CSS_LOADER_URL_REPLACEMENT_25___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_25___);\nvar ___CSS_LOADER_URL_REPLACEMENT_26___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_26___);\nvar ___CSS_LOADER_URL_REPLACEMENT_27___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_27___);\nvar ___CSS_LOADER_URL_REPLACEMENT_28___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_28___);\nvar ___CSS_LOADER_URL_REPLACEMENT_29___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_29___);\nvar ___CSS_LOADER_URL_REPLACEMENT_30___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_30___);\nvar ___CSS_LOADER_URL_REPLACEMENT_31___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_31___);\nvar ___CSS_LOADER_URL_REPLACEMENT_32___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_32___);\nvar ___CSS_LOADER_URL_REPLACEMENT_33___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_33___);\nvar ___CSS_LOADER_URL_REPLACEMENT_34___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_34___);\nvar ___CSS_LOADER_URL_REPLACEMENT_35___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_35___);\nvar ___CSS_LOADER_URL_REPLACEMENT_36___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_36___);\nvar ___CSS_LOADER_URL_REPLACEMENT_37___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_37___);\nvar ___CSS_LOADER_URL_REPLACEMENT_38___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_38___);\nvar ___CSS_LOADER_URL_REPLACEMENT_39___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_39___);\nvar ___CSS_LOADER_URL_REPLACEMENT_40___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_40___);\nvar ___CSS_LOADER_URL_REPLACEMENT_41___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_41___);\nvar ___CSS_LOADER_URL_REPLACEMENT_42___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_42___);\nvar ___CSS_LOADER_URL_REPLACEMENT_43___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_43___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\r\n  --cell-size: 64px;\r\n}\r\n\r\nhtml, body {\r\n  height: 100%;\r\n  margin: 0;\r\n}\r\n\r\nbody {\r\n  background: #000;\r\n  font-size: 16px;\r\n}\r\n\r\n.btn {\r\n  display: inline-block;\r\n  font-weight: 400;\r\n  color: #212529;\r\n  background-color: #f8f9fa;\r\n  text-align: center;\r\n  vertical-align: middle;\r\n  padding: .375rem .75rem;\r\n  font-size: 1rem;\r\n  line-height: 1.5;\r\n  border-radius: .25rem;\r\n  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;\r\n  border: none;\r\n}\r\n\r\n.controls {\r\n  text-align: center;\r\n  margin: 50px 0;\r\n}\r\n\r\n.board-container {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.board {\r\n  display: grid;\r\n  grid-template-columns: repeat(8, 1fr);\r\n  grid-column-gap: 2px;\r\n  grid-row-gap: 2px;\r\n}\r\n\r\n.cell {\r\n  position: relative;\r\n}\r\n\r\n.cell.selected::before {\r\n  content: '';\r\n  display: block;\r\n  border: 4px;\r\n  border-radius: 32px;\r\n  box-sizing: border-box;\r\n  width: var(--cell-size);\r\n  height: var(--cell-size);\r\n  opacity: 0.9;\r\n  position: absolute;\r\n}\r\n\r\n.cell.selected-yellow::before {\r\n  border-color: #ff0;\r\n  border-style: solid;\r\n}\r\n\r\n.cell.selected-green::before {\r\n  border-color: #0f0;\r\n  border-style: dashed;\r\n}\r\n\r\n.cell.selected-red::before {\r\n  border-color: #f00;\r\n  border-style: dashed;\r\n}\r\n\r\n.board.prairie {\r\n  --map-tile-top-left-url: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\r\n  --map-tile-top-url: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\r\n  --map-tile-top-right-url: url(${___CSS_LOADER_URL_REPLACEMENT_2___});\r\n  --map-tile-bottom-left-url: url(${___CSS_LOADER_URL_REPLACEMENT_3___});\r\n  --map-tile-bottom-url: url(${___CSS_LOADER_URL_REPLACEMENT_4___});\r\n  --map-tile-bottom-right-url: url(${___CSS_LOADER_URL_REPLACEMENT_5___});\r\n  --map-tile-left-url: url(${___CSS_LOADER_URL_REPLACEMENT_6___});\r\n  --map-tile-right-url: url(${___CSS_LOADER_URL_REPLACEMENT_7___});\r\n  --map-tile-center-url: url(${___CSS_LOADER_URL_REPLACEMENT_8___});\r\n}\r\n\r\n.board.desert {\r\n  --map-tile-top-left-url: url(${___CSS_LOADER_URL_REPLACEMENT_9___});\r\n  --map-tile-top-url: url(${___CSS_LOADER_URL_REPLACEMENT_10___});\r\n  --map-tile-top-right-url: url(${___CSS_LOADER_URL_REPLACEMENT_11___});\r\n  --map-tile-bottom-left-url: url(${___CSS_LOADER_URL_REPLACEMENT_12___});\r\n  --map-tile-bottom-url: url(${___CSS_LOADER_URL_REPLACEMENT_13___});\r\n  --map-tile-bottom-right-url: url(${___CSS_LOADER_URL_REPLACEMENT_14___});\r\n  --map-tile-left-url: url(${___CSS_LOADER_URL_REPLACEMENT_15___});\r\n  --map-tile-right-url: url(${___CSS_LOADER_URL_REPLACEMENT_16___});\r\n  --map-tile-center-url: url(${___CSS_LOADER_URL_REPLACEMENT_17___});\r\n}\r\n\r\n.board.arctic {\r\n  --map-tile-top-left-url: url(${___CSS_LOADER_URL_REPLACEMENT_18___});\r\n  --map-tile-top-url: url(${___CSS_LOADER_URL_REPLACEMENT_19___});\r\n  --map-tile-top-right-url: url(${___CSS_LOADER_URL_REPLACEMENT_20___});\r\n  --map-tile-bottom-left-url: url(${___CSS_LOADER_URL_REPLACEMENT_21___});\r\n  --map-tile-bottom-url: url(${___CSS_LOADER_URL_REPLACEMENT_22___});\r\n  --map-tile-bottom-right-url: url(${___CSS_LOADER_URL_REPLACEMENT_23___});\r\n  --map-tile-left-url: url(${___CSS_LOADER_URL_REPLACEMENT_24___});\r\n  --map-tile-right-url: url(${___CSS_LOADER_URL_REPLACEMENT_25___});\r\n  --map-tile-center-url: url(${___CSS_LOADER_URL_REPLACEMENT_26___});\r\n}\r\n\r\n.board.mountain {\r\n  --map-tile-top-left-url: url(${___CSS_LOADER_URL_REPLACEMENT_27___});\r\n  --map-tile-top-url: url(${___CSS_LOADER_URL_REPLACEMENT_28___});\r\n  --map-tile-top-right-url: url(${___CSS_LOADER_URL_REPLACEMENT_29___});\r\n  --map-tile-bottom-left-url: url(${___CSS_LOADER_URL_REPLACEMENT_30___});\r\n  --map-tile-bottom-url: url(${___CSS_LOADER_URL_REPLACEMENT_31___});\r\n  --map-tile-bottom-right-url: url(${___CSS_LOADER_URL_REPLACEMENT_32___});\r\n  --map-tile-left-url: url(${___CSS_LOADER_URL_REPLACEMENT_33___});\r\n  --map-tile-right-url: url(${___CSS_LOADER_URL_REPLACEMENT_34___});\r\n  --map-tile-center-url: url(${___CSS_LOADER_URL_REPLACEMENT_35___});\r\n}\r\n\r\n.map-tile {\r\n  width: var(--cell-size);\r\n  height: var(--cell-size);\r\n}\r\n\r\n.map-tile-top-left {\r\n  background: var(--map-tile-top-left-url);\r\n}\r\n\r\n.map-tile-top {\r\n  background: var(--map-tile-top-url);\r\n}\r\n\r\n.map-tile-top-right {\r\n  background: var(--map-tile-top-right-url);\r\n}\r\n\r\n.map-tile-bottom-left {\r\n  background: var(--map-tile-bottom-left-url);\r\n}\r\n\r\n.map-tile-bottom {\r\n  background: var(--map-tile-bottom-url);\r\n}\r\n\r\n.map-tile-bottom-right {\r\n  background: var(--map-tile-bottom-right-url);\r\n}\r\n\r\n.map-tile-left {\r\n  background: var(--map-tile-left-url);\r\n}\r\n\r\n.map-tile-right {\r\n  background: var(--map-tile-right-url);\r\n}\r\n\r\n.map-tile-center {\r\n  background: var(--map-tile-center-url);\r\n}\r\n\r\n.character {\r\n  width: var(--cell-size);\r\n  height: var(--cell-size);\r\n  position: absolute;\r\n  z-index: 99;\r\n}\r\n\r\n.character.generic {\r\n  background: url(${___CSS_LOADER_URL_REPLACEMENT_36___});\r\n}\r\n\r\n.character.bowman {\r\n  background: url(${___CSS_LOADER_URL_REPLACEMENT_37___});\r\n}\r\n\r\n.character.daemon {\r\n  background: url(${___CSS_LOADER_URL_REPLACEMENT_38___});\r\n}\r\n\r\n.character.magician {\r\n  background: url(${___CSS_LOADER_URL_REPLACEMENT_39___});\r\n}\r\n\r\n.character.swordsman {\r\n  background: url(${___CSS_LOADER_URL_REPLACEMENT_40___});\r\n}\r\n\r\n.character.undead {\r\n  background: url(${___CSS_LOADER_URL_REPLACEMENT_41___});\r\n}\r\n\r\n.character.vampire {\r\n  background: url(${___CSS_LOADER_URL_REPLACEMENT_42___});\r\n}\r\n\r\n.character.zombie {\r\n  background: url(${___CSS_LOADER_URL_REPLACEMENT_43___});\r\n}\r\n\r\n.health-level {\r\n  top: 2px;\r\n  left: 7px;\r\n  position: absolute;\r\n  width: 50px;\r\n  height: 4px;\r\n  background: #000;\r\n}\r\n\r\n.health-level-indicator {\r\n  height: 4px;\r\n}\r\n\r\n.health-level-indicator-high {\r\n  background: #0f0;\r\n}\r\n\r\n.health-level-indicator-normal {\r\n  background: #ff0;\r\n}\r\n\r\n.health-level-indicator-critical {\r\n  background: #f00;\r\n}\r\n\r\n.damage {\r\n  position: absolute;\r\n  width: var(--cell-size);\r\n  text-align: center;\r\n  z-index: 999;\r\n  color: #f00;\r\n  font-weight: bold;\r\n  animation: 500ms fade ease-out;\r\n}\r\n\r\n@keyframes fade {\r\n  from {\r\n    opacity: 0;\r\n    top: calc(var(--cell-size) * 0.5);\r\n    font-size: 1rem;\r\n  }\r\n  to {\r\n    opacity: 1;\r\n    top: -20px;\r\n    font-size: 1.5rem;\r\n  }\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://ajs_diplom/./src/css/style.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://ajs_diplom/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js"
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
(module) {

eval("{\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://ajs_diplom/./node_modules/css-loader/dist/runtime/getUrl.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
(module) {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://ajs_diplom/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./src/css/style.css"
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://ajs_diplom/./src/css/style.css?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://ajs_diplom/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://ajs_diplom/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://ajs_diplom/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://ajs_diplom/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://ajs_diplom/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://ajs_diplom/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ },

/***/ "./src/img/arctic/map-tile-bottom-left.png"
/*!*************************************************!*\
  !*** ./src/img/arctic/map-tile-bottom-left.png ***!
  \*************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"b27323cf850ed820855c.png\";\n\n//# sourceURL=webpack://ajs_diplom/./src/img/arctic/map-tile-bottom-left.png?\n}");

/***/ },

/***/ "./src/img/arctic/map-tile-bottom-right.png"
/*!**************************************************!*\
  !*** ./src/img/arctic/map-tile-bottom-right.png ***!
  \**************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"ac9d74f57639792774bc.png\";\n\n//# sourceURL=webpack://ajs_diplom/./src/img/arctic/map-tile-bottom-right.png?\n}");

/***/ },

/***/ "./src/img/arctic/map-tile-bottom.png"
/*!********************************************!*\
  !*** ./src/img/arctic/map-tile-bottom.png ***!
  \********************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"63aae58e4690953a3857.png\";\n\n//# sourceURL=webpack://ajs_diplom/./src/img/arctic/map-tile-bottom.png?\n}");

/***/ },

/***/ "./src/img/arctic/map-tile-center.png"
/*!********************************************!*\
  !*** ./src/img/arctic/map-tile-center.png ***!
  \********************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"246277b8ca590816b3e8.png\";\n\n//# sourceURL=webpack://ajs_diplom/./src/img/arctic/map-tile-center.png?\n}");

/***/ },

/***/ "./src/img/arctic/map-tile-left.png"
/*!******************************************!*\
  !*** ./src/img/arctic/map-tile-left.png ***!
  \******************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"3d9503e0a850fda86f82.png\";\n\n//# sourceURL=webpack://ajs_diplom/./src/img/arctic/map-tile-left.png?\n}");

/***/ },

/***/ "./src/img/arctic/map-tile-right.png"
/*!*******************************************!*\
  !*** ./src/img/arctic/map-tile-right.png ***!
  \*******************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"22e7c5ede3f747cbe27a.png\";\n\n//# sourceURL=webpack://ajs_diplom/./src/img/arctic/map-tile-right.png?\n}");

/***/ },

/***/ "./src/img/arctic/map-tile-top-left.png"
/*!**********************************************!*\
  !*** ./src/img/arctic/map-tile-top-left.png ***!
  \**********************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"eab6a2cc5e89a4dd8e3f.png\";\n\n//# sourceURL=webpack://ajs_diplom/./src/img/arctic/map-tile-top-left.png?\n}");

/***/ },

/***/ "./src/img/arctic/map-tile-top-right.png"
/*!***********************************************!*\
  !*** ./src/img/arctic/map-tile-top-right.png ***!
  \***********************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"d31d84c693f649766aee.png\";\n\n//# sourceURL=webpack://ajs_diplom/./src/img/arctic/map-tile-top-right.png?\n}");

/***/ },

/***/ "./src/img/arctic/map-tile-top.png"
/*!*****************************************!*\
  !*** ./src/img/arctic/map-tile-top.png ***!
  \*****************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"e0aa3daf6d08c62c96d9.png\";\n\n//# sourceURL=webpack://ajs_diplom/./src/img/arctic/map-tile-top.png?\n}");

/***/ },

/***/ "./src/img/characters/bowman.png"
/*!***************************************!*\
  !*** ./src/img/characters/bowman.png ***!
  \***************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"cec542854b228e61547a.png\";\n\n//# sourceURL=webpack://ajs_diplom/./src/img/characters/bowman.png?\n}");

/***/ },

/***/ "./src/img/characters/daemon.png"
/*!***************************************!*\
  !*** ./src/img/characters/daemon.png ***!
  \***************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"cf170a9fea1051b7424a.png\";\n\n//# sourceURL=webpack://ajs_diplom/./src/img/characters/daemon.png?\n}");

/***/ },

/***/ "./src/img/characters/generic.png"
/*!****************************************!*\
  !*** ./src/img/characters/generic.png ***!
  \****************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"0a77fc47d727eab6fd39.png\";\n\n//# sourceURL=webpack://ajs_diplom/./src/img/characters/generic.png?\n}");

/***/ },

/***/ "./src/img/characters/magician.png"
/*!*****************************************!*\
  !*** ./src/img/characters/magician.png ***!
  \*****************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"c0fa2b75539f94144dc4.png\";\n\n//# sourceURL=webpack://ajs_diplom/./src/img/characters/magician.png?\n}");

/***/ },

/***/ "./src/img/characters/swordsman.png"
/*!******************************************!*\
  !*** ./src/img/characters/swordsman.png ***!
  \******************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"2007ec00c1d9f997e704.png\";\n\n//# sourceURL=webpack://ajs_diplom/./src/img/characters/swordsman.png?\n}");

/***/ },

/***/ "./src/img/characters/undead.png"
/*!***************************************!*\
  !*** ./src/img/characters/undead.png ***!
  \***************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"f5c75398bcb5931f9f3c.png\";\n\n//# sourceURL=webpack://ajs_diplom/./src/img/characters/undead.png?\n}");

/***/ },

/***/ "./src/img/characters/vampire.png"
/*!****************************************!*\
  !*** ./src/img/characters/vampire.png ***!
  \****************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"bf0ed0dca1d1e6091d42.png\";\n\n//# sourceURL=webpack://ajs_diplom/./src/img/characters/vampire.png?\n}");

/***/ },

/***/ "./src/img/characters/zombie.png"
/*!***************************************!*\
  !*** ./src/img/characters/zombie.png ***!
  \***************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"296dfeac15e2377fc1dc.png\";\n\n//# sourceURL=webpack://ajs_diplom/./src/img/characters/zombie.png?\n}");

/***/ },

/***/ "./src/img/desert/map-tile-bottom-left.png"
/*!*************************************************!*\
  !*** ./src/img/desert/map-tile-bottom-left.png ***!
  \*************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"13edb269e39172ddd74f.png\";\n\n//# sourceURL=webpack://ajs_diplom/./src/img/desert/map-tile-bottom-left.png?\n}");

/***/ },

/***/ "./src/img/desert/map-tile-bottom-right.png"
/*!**************************************************!*\
  !*** ./src/img/desert/map-tile-bottom-right.png ***!
  \**************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"5cf9c17d6a1ea7106a6c.png\";\n\n//# sourceURL=webpack://ajs_diplom/./src/img/desert/map-tile-bottom-right.png?\n}");

/***/ },

/***/ "./src/img/desert/map-tile-bottom.png"
/*!********************************************!*\
  !*** ./src/img/desert/map-tile-bottom.png ***!
  \********************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"f1703771380a9959d979.png\";\n\n//# sourceURL=webpack://ajs_diplom/./src/img/desert/map-tile-bottom.png?\n}");

/***/ },

/***/ "./src/img/desert/map-tile-center.png"
/*!********************************************!*\
  !*** ./src/img/desert/map-tile-center.png ***!
  \********************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"51e2a5de56bd631452fe.png\";\n\n//# sourceURL=webpack://ajs_diplom/./src/img/desert/map-tile-center.png?\n}");

/***/ },

/***/ "./src/img/desert/map-tile-left.png"
/*!******************************************!*\
  !*** ./src/img/desert/map-tile-left.png ***!
  \******************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"eb1f6e4f87b977012684.png\";\n\n//# sourceURL=webpack://ajs_diplom/./src/img/desert/map-tile-left.png?\n}");

/***/ },

/***/ "./src/img/desert/map-tile-right.png"
/*!*******************************************!*\
  !*** ./src/img/desert/map-tile-right.png ***!
  \*******************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"2c19971f327b288278bb.png\";\n\n//# sourceURL=webpack://ajs_diplom/./src/img/desert/map-tile-right.png?\n}");

/***/ },

/***/ "./src/img/desert/map-tile-top-left.png"
/*!**********************************************!*\
  !*** ./src/img/desert/map-tile-top-left.png ***!
  \**********************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"258d884122fabfc2f312.png\";\n\n//# sourceURL=webpack://ajs_diplom/./src/img/desert/map-tile-top-left.png?\n}");

/***/ },

/***/ "./src/img/desert/map-tile-top-right.png"
/*!***********************************************!*\
  !*** ./src/img/desert/map-tile-top-right.png ***!
  \***********************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"2f1e1970c2c20cf3a8d5.png\";\n\n//# sourceURL=webpack://ajs_diplom/./src/img/desert/map-tile-top-right.png?\n}");

/***/ },

/***/ "./src/img/desert/map-tile-top.png"
/*!*****************************************!*\
  !*** ./src/img/desert/map-tile-top.png ***!
  \*****************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"dc3f97e7bbcd5ea1ded9.png\";\n\n//# sourceURL=webpack://ajs_diplom/./src/img/desert/map-tile-top.png?\n}");

/***/ },

/***/ "./src/img/mountain/map-tile-bottom-left.png"
/*!***************************************************!*\
  !*** ./src/img/mountain/map-tile-bottom-left.png ***!
  \***************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"1d70f1dab2dd418c3612.png\";\n\n//# sourceURL=webpack://ajs_diplom/./src/img/mountain/map-tile-bottom-left.png?\n}");

/***/ },

/***/ "./src/img/mountain/map-tile-bottom-right.png"
/*!****************************************************!*\
  !*** ./src/img/mountain/map-tile-bottom-right.png ***!
  \****************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"6bacb8e25ed9ecf726bf.png\";\n\n//# sourceURL=webpack://ajs_diplom/./src/img/mountain/map-tile-bottom-right.png?\n}");

/***/ },

/***/ "./src/img/mountain/map-tile-bottom.png"
/*!**********************************************!*\
  !*** ./src/img/mountain/map-tile-bottom.png ***!
  \**********************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"f462d2ed6eedca1e4fd9.png\";\n\n//# sourceURL=webpack://ajs_diplom/./src/img/mountain/map-tile-bottom.png?\n}");

/***/ },

/***/ "./src/img/mountain/map-tile-center.png"
/*!**********************************************!*\
  !*** ./src/img/mountain/map-tile-center.png ***!
  \**********************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"6f6f7c09bde970b2e41b.png\";\n\n//# sourceURL=webpack://ajs_diplom/./src/img/mountain/map-tile-center.png?\n}");

/***/ },

/***/ "./src/img/mountain/map-tile-left.png"
/*!********************************************!*\
  !*** ./src/img/mountain/map-tile-left.png ***!
  \********************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"c75f062dddba6e98fdc6.png\";\n\n//# sourceURL=webpack://ajs_diplom/./src/img/mountain/map-tile-left.png?\n}");

/***/ },

/***/ "./src/img/mountain/map-tile-right.png"
/*!*********************************************!*\
  !*** ./src/img/mountain/map-tile-right.png ***!
  \*********************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"26fdc25019c24e87f11a.png\";\n\n//# sourceURL=webpack://ajs_diplom/./src/img/mountain/map-tile-right.png?\n}");

/***/ },

/***/ "./src/img/mountain/map-tile-top-left.png"
/*!************************************************!*\
  !*** ./src/img/mountain/map-tile-top-left.png ***!
  \************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"ef1b0ea8c4e545d9aadc.png\";\n\n//# sourceURL=webpack://ajs_diplom/./src/img/mountain/map-tile-top-left.png?\n}");

/***/ },

/***/ "./src/img/mountain/map-tile-top-right.png"
/*!*************************************************!*\
  !*** ./src/img/mountain/map-tile-top-right.png ***!
  \*************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"a1d2321024649b9d8f5f.png\";\n\n//# sourceURL=webpack://ajs_diplom/./src/img/mountain/map-tile-top-right.png?\n}");

/***/ },

/***/ "./src/img/mountain/map-tile-top.png"
/*!*******************************************!*\
  !*** ./src/img/mountain/map-tile-top.png ***!
  \*******************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"8b928c3eb136543e573a.png\";\n\n//# sourceURL=webpack://ajs_diplom/./src/img/mountain/map-tile-top.png?\n}");

/***/ },

/***/ "./src/img/prairie/map-tile-bottom-left.png"
/*!**************************************************!*\
  !*** ./src/img/prairie/map-tile-bottom-left.png ***!
  \**************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"26b5f224d8750119922d.png\";\n\n//# sourceURL=webpack://ajs_diplom/./src/img/prairie/map-tile-bottom-left.png?\n}");

/***/ },

/***/ "./src/img/prairie/map-tile-bottom-right.png"
/*!***************************************************!*\
  !*** ./src/img/prairie/map-tile-bottom-right.png ***!
  \***************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"2429af6d3a5796e3c34b.png\";\n\n//# sourceURL=webpack://ajs_diplom/./src/img/prairie/map-tile-bottom-right.png?\n}");

/***/ },

/***/ "./src/img/prairie/map-tile-bottom.png"
/*!*********************************************!*\
  !*** ./src/img/prairie/map-tile-bottom.png ***!
  \*********************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"07d5e8127645225478b6.png\";\n\n//# sourceURL=webpack://ajs_diplom/./src/img/prairie/map-tile-bottom.png?\n}");

/***/ },

/***/ "./src/img/prairie/map-tile-center.png"
/*!*********************************************!*\
  !*** ./src/img/prairie/map-tile-center.png ***!
  \*********************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"0089a610e6611f679b50.png\";\n\n//# sourceURL=webpack://ajs_diplom/./src/img/prairie/map-tile-center.png?\n}");

/***/ },

/***/ "./src/img/prairie/map-tile-left.png"
/*!*******************************************!*\
  !*** ./src/img/prairie/map-tile-left.png ***!
  \*******************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"546abb060a0837550fd1.png\";\n\n//# sourceURL=webpack://ajs_diplom/./src/img/prairie/map-tile-left.png?\n}");

/***/ },

/***/ "./src/img/prairie/map-tile-right.png"
/*!********************************************!*\
  !*** ./src/img/prairie/map-tile-right.png ***!
  \********************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"6a84ae91f5d985ddc9ee.png\";\n\n//# sourceURL=webpack://ajs_diplom/./src/img/prairie/map-tile-right.png?\n}");

/***/ },

/***/ "./src/img/prairie/map-tile-top-left.png"
/*!***********************************************!*\
  !*** ./src/img/prairie/map-tile-top-left.png ***!
  \***********************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"46d63299c3420c030b4e.png\";\n\n//# sourceURL=webpack://ajs_diplom/./src/img/prairie/map-tile-top-left.png?\n}");

/***/ },

/***/ "./src/img/prairie/map-tile-top-right.png"
/*!************************************************!*\
  !*** ./src/img/prairie/map-tile-top-right.png ***!
  \************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"0ac7f8258ec7166dc957.png\";\n\n//# sourceURL=webpack://ajs_diplom/./src/img/prairie/map-tile-top-right.png?\n}");

/***/ },

/***/ "./src/img/prairie/map-tile-top.png"
/*!******************************************!*\
  !*** ./src/img/prairie/map-tile-top.png ***!
  \******************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"946aeb948db6313f1d85.png\";\n\n//# sourceURL=webpack://ajs_diplom/./src/img/prairie/map-tile-top.png?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			const getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter/value functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			if(Array.isArray(definition)) {
/******/ 				var i = 0;
/******/ 				while(i < definition.length) {
/******/ 					var key = definition[i++];
/******/ 					var binding = definition[i++];
/******/ 					if(!__webpack_require__.o(exports, key)) {
/******/ 						if(binding === 0) {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, value: definition[i++] });
/******/ 						} else {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, get: binding });
/******/ 						}
/******/ 					} else if(binding === 0) { i++; }
/******/ 				}
/******/ 			} else {
/******/ 				for(var key in definition) {
/******/ 					if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 						Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		let scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		const document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript?.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				const scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					let i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = (typeof document !== 'undefined' && document.baseURI) || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		const installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	let __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;