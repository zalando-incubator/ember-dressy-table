"use strict";



define('dummy/app', ['exports', 'dummy/resolver', 'ember-load-initializers', 'dummy/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var App = void 0;

  Ember.MODEL_FACTORY_INJECTIONS = true;

  App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
define('dummy/components/code-example', ['exports', 'ember-code-example-component/components/code-example'], function (exports, _codeExample) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _codeExample.default;
    }
  });
});
define("dummy/components/code-snippet", ["exports", "dummy/snippets"], function (exports, _snippets) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  /* global require */
  var Highlight = self.require('highlight.js');

  exports.default = Ember.Component.extend({
    tagName: 'pre',
    classNameBindings: ['language'],
    unindent: true,

    _unindent: function _unindent(src) {
      if (!this.get('unindent')) {
        return src;
      }
      var match,
          min,
          lines = src.split("\n").filter(function (l) {
        return l !== '';
      });
      for (var i = 0; i < lines.length; i++) {
        match = /^[ \t]*/.exec(lines[i]);
        if (match && (typeof min === 'undefined' || min > match[0].length)) {
          min = match[0].length;
        }
      }
      if (typeof min !== 'undefined' && min > 0) {
        src = src.replace(new RegExp("^[ \t]{" + min + "}", 'gm'), "");
      }
      return src;
    },

    source: Ember.computed('name', function () {
      return this._unindent((_snippets.default[this.get('name')] || "").replace(/^(\s*\n)*/, '').replace(/\s*$/, ''));
    }),

    didInsertElement: function didInsertElement() {
      Highlight.highlightBlock(this.get('element'));
    },

    language: Ember.computed('name', function () {
      var m = /\.(\w+)$/i.exec(this.get('name'));
      if (m) {
        switch (m[1].toLowerCase()) {
          case 'js':
            return 'javascript';
          case 'coffee':
            return 'coffeescript';
          case 'hbs':
            return 'htmlbars';
          case 'css':
            return 'css';
          case 'scss':
            return 'scss';
          case 'less':
            return 'less';
          case 'emblem':
            return 'emblem';
          case 'ts':
            return 'typescript';
        }
      }
    })
  });
});
define('dummy/components/custom-render', ['exports', 'dummy/templates/components/custom-render'], function (exports, _customRender) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    layout: _customRender.default,
    tagName: 'td'
  });
});
define('dummy/components/custom-tr', ['exports', 'dummy/templates/components/custom-tr'], function (exports, _customTr) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    layout: _customTr.default,
    tagName: 'tr',
    mouseEnter: function mouseEnter() {
      // console.log(this, arguments, this.get('row'));
    }
  });
});
define('dummy/components/d-filter', ['exports', 'ember-dressy-table/components/d-filter'], function (exports, _dFilter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _dFilter.default;
    }
  });
});
define('dummy/components/d-footer', ['exports', 'ember-dressy-table/components/d-footer'], function (exports, _dFooter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _dFooter.default;
    }
  });
});
define('dummy/components/d-header', ['exports', 'ember-dressy-table/components/d-header'], function (exports, _dHeader) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _dHeader.default;
    }
  });
});
define('dummy/components/d-pagination', ['exports', 'ember-dressy-table/components/d-pagination'], function (exports, _dPagination) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _dPagination.default;
    }
  });
});
define('dummy/components/d-sorter', ['exports', 'ember-dressy-table/components/d-sorter'], function (exports, _dSorter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _dSorter.default;
    }
  });
});
define('dummy/components/d-table', ['exports', 'ember-dressy-table/components/d-table'], function (exports, _dTable) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _dTable.default;
    }
  });
});
define('dummy/components/d-tbody', ['exports', 'ember-dressy-table/components/d-tbody'], function (exports, _dTbody) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _dTbody.default;
    }
  });
});
define('dummy/components/d-tr', ['exports', 'ember-dressy-table/components/d-tr'], function (exports, _dTr) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _dTr.default;
    }
  });
});
define('dummy/components/dtab/selectable-cell', ['exports', 'ember-dressy-table/components/dtab/selectable-cell'], function (exports, _selectableCell) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _selectableCell.default;
    }
  });
});
define('dummy/components/dtab/selectable-header', ['exports', 'ember-dressy-table/components/dtab/selectable-header'], function (exports, _selectableHeader) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _selectableHeader.default;
    }
  });
});
define('dummy/components/header-with-action', ['exports', 'dummy/templates/components/header-with-action'], function (exports, _headerWithAction) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    tagName: 'td',
    layout: _headerWithAction.default,
    click: function click() {
      this.sendAction('header.someAction');
    }
  });
});
define('dummy/components/pagination-manager', ['exports', 'dummy/templates/components/pagination-manager'], function (exports, _paginationManager) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    layout: _paginationManager.default
  });
});
define('dummy/components/sorting-header', ['exports', 'dummy/templates/components/sorting-header'], function (exports, _sortingHeader) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    layout: _sortingHeader.default,
    tagName: 'td',
    changeSorting: function changeSorting(key) {
      var sorting = this.get('state.sorting') || [];
      var newSorting = [];
      var keyCheck = [sorting.indexOf(key), sorting.indexOf(key + ':asc'), sorting.indexOf(key + ':desc')];
      if (keyCheck[0] >= 0) {
        newSorting = sorting.slice(0, keyCheck[0]).concat(key + ':desc', sorting.slice(keyCheck[0] + 1));
      } else if (keyCheck[1] >= 0) {
        newSorting = sorting.slice(0, keyCheck[1]).concat(key + ':desc', sorting.slice(keyCheck[1] + 1));
      } else if (keyCheck[2] >= 0) {
        newSorting = sorting.slice(0, keyCheck[2]).concat(sorting.slice(keyCheck[2] + 1));
      } else {
        newSorting = sorting.concat(key + ':asc');
      }
      this.set('state.sorting', newSorting);
    },
    click: function click() {
      var key = this.get('col.key');
      this.changeSorting(key);
      // this.get('extra.actionChangeSort')(this.get('col'));
    }
  });
});
define("dummy/controllers/doc-pages/docs", ["exports", "dummy/templates/snippets/basic-usage.js"], function (exports, _basicUsage) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _basicUsage.default;
});
define('dummy/controllers/index', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    table: {
      settings: {},
      state: {},
      columns: [{
        key: 'foo',
        header: {
          component: 'sorting-header'
        }
      }, { key: 'bar' }, { key: 'baz', header: { component: 'header-with-action' } }],
      data: [{ foo: '5', bar: '2', baz: '3' }, { foo: '4', bar: '5', baz: '6' }, { foo: '7', bar: '8', baz: '9' }]
    },
    sorting: ["foo:asc"],
    bigData: function (length) {
      var i = length;
      var result = [];
      while (i-- > 0) {
        result.push({
          foo: String(Math.floor(Math.random() * 100)),
          bar: String(Math.floor(Math.random() * 100)),
          baz: String(Math.floor(Math.random() * 100))
        });
      }
      return result;
    }(100),
    currentPage: 1,
    pageSize: 10,
    actions: {
      headerAction: function headerAction() {
        Ember.Logger.info('its from header-with-action');
      }
    }
  });
});
define('dummy/ember-dressy-table/tests/addon.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | addon');

  QUnit.test('ember-dressy-table/components/d-filter.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-dressy-table/components/d-filter.js should pass ESLint\n\n');
  });

  QUnit.test('ember-dressy-table/components/d-footer.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-dressy-table/components/d-footer.js should pass ESLint\n\n');
  });

  QUnit.test('ember-dressy-table/components/d-header.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-dressy-table/components/d-header.js should pass ESLint\n\n');
  });

  QUnit.test('ember-dressy-table/components/d-pagination.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-dressy-table/components/d-pagination.js should pass ESLint\n\n');
  });

  QUnit.test('ember-dressy-table/components/d-sorter.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-dressy-table/components/d-sorter.js should pass ESLint\n\n');
  });

  QUnit.test('ember-dressy-table/components/d-table.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-dressy-table/components/d-table.js should pass ESLint\n\n');
  });

  QUnit.test('ember-dressy-table/components/d-tbody.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-dressy-table/components/d-tbody.js should pass ESLint\n\n');
  });

  QUnit.test('ember-dressy-table/components/d-tr.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-dressy-table/components/d-tr.js should pass ESLint\n\n');
  });

  QUnit.test('ember-dressy-table/components/dtab/selectable-cell.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-dressy-table/components/dtab/selectable-cell.js should pass ESLint\n\n');
  });

  QUnit.test('ember-dressy-table/components/dtab/selectable-header.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-dressy-table/components/dtab/selectable-header.js should pass ESLint\n\n');
  });
});
define('dummy/helpers/and', ['exports', 'ember-truth-helpers/helpers/and'], function (exports, _and) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (Ember.Helper) {
    forExport = Ember.Helper.helper(_and.andHelper);
  } else if (Ember.HTMLBars.makeBoundHelper) {
    forExport = Ember.HTMLBars.makeBoundHelper(_and.andHelper);
  }

  exports.default = forExport;
});
define('dummy/helpers/array', ['exports', 'ember-array-helper/helpers/array'], function (exports, _array) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _array.default;
    }
  });
  Object.defineProperty(exports, 'array', {
    enumerable: true,
    get: function () {
      return _array.array;
    }
  });
});
define('dummy/helpers/eq', ['exports', 'ember-truth-helpers/helpers/equal'], function (exports, _equal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (Ember.Helper) {
    forExport = Ember.Helper.helper(_equal.equalHelper);
  } else if (Ember.HTMLBars.makeBoundHelper) {
    forExport = Ember.HTMLBars.makeBoundHelper(_equal.equalHelper);
  }

  exports.default = forExport;
});
define('dummy/helpers/gt', ['exports', 'ember-truth-helpers/helpers/gt'], function (exports, _gt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (Ember.Helper) {
    forExport = Ember.Helper.helper(_gt.gtHelper);
  } else if (Ember.HTMLBars.makeBoundHelper) {
    forExport = Ember.HTMLBars.makeBoundHelper(_gt.gtHelper);
  }

  exports.default = forExport;
});
define('dummy/helpers/gte', ['exports', 'ember-truth-helpers/helpers/gte'], function (exports, _gte) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (Ember.Helper) {
    forExport = Ember.Helper.helper(_gte.gteHelper);
  } else if (Ember.HTMLBars.makeBoundHelper) {
    forExport = Ember.HTMLBars.makeBoundHelper(_gte.gteHelper);
  }

  exports.default = forExport;
});
define('dummy/helpers/is-array', ['exports', 'ember-truth-helpers/helpers/is-array'], function (exports, _isArray) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (Ember.Helper) {
    forExport = Ember.Helper.helper(_isArray.isArrayHelper);
  } else if (Ember.HTMLBars.makeBoundHelper) {
    forExport = Ember.HTMLBars.makeBoundHelper(_isArray.isArrayHelper);
  }

  exports.default = forExport;
});
define('dummy/helpers/is-equal', ['exports', 'ember-truth-helpers/helpers/is-equal'], function (exports, _isEqual) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isEqual.default;
    }
  });
  Object.defineProperty(exports, 'isEqual', {
    enumerable: true,
    get: function () {
      return _isEqual.isEqual;
    }
  });
});
define('dummy/helpers/lt', ['exports', 'ember-truth-helpers/helpers/lt'], function (exports, _lt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (Ember.Helper) {
    forExport = Ember.Helper.helper(_lt.ltHelper);
  } else if (Ember.HTMLBars.makeBoundHelper) {
    forExport = Ember.HTMLBars.makeBoundHelper(_lt.ltHelper);
  }

  exports.default = forExport;
});
define('dummy/helpers/lte', ['exports', 'ember-truth-helpers/helpers/lte'], function (exports, _lte) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (Ember.Helper) {
    forExport = Ember.Helper.helper(_lte.lteHelper);
  } else if (Ember.HTMLBars.makeBoundHelper) {
    forExport = Ember.HTMLBars.makeBoundHelper(_lte.lteHelper);
  }

  exports.default = forExport;
});
define('dummy/helpers/not-eq', ['exports', 'ember-truth-helpers/helpers/not-equal'], function (exports, _notEqual) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (Ember.Helper) {
    forExport = Ember.Helper.helper(_notEqual.notEqualHelper);
  } else if (Ember.HTMLBars.makeBoundHelper) {
    forExport = Ember.HTMLBars.makeBoundHelper(_notEqual.notEqualHelper);
  }

  exports.default = forExport;
});
define('dummy/helpers/not', ['exports', 'ember-truth-helpers/helpers/not'], function (exports, _not) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (Ember.Helper) {
    forExport = Ember.Helper.helper(_not.notHelper);
  } else if (Ember.HTMLBars.makeBoundHelper) {
    forExport = Ember.HTMLBars.makeBoundHelper(_not.notHelper);
  }

  exports.default = forExport;
});
define('dummy/helpers/or', ['exports', 'ember-truth-helpers/helpers/or'], function (exports, _or) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (Ember.Helper) {
    forExport = Ember.Helper.helper(_or.orHelper);
  } else if (Ember.HTMLBars.makeBoundHelper) {
    forExport = Ember.HTMLBars.makeBoundHelper(_or.orHelper);
  }

  exports.default = forExport;
});
define('dummy/helpers/xor', ['exports', 'ember-truth-helpers/helpers/xor'], function (exports, _xor) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (Ember.Helper) {
    forExport = Ember.Helper.helper(_xor.xorHelper);
  } else if (Ember.HTMLBars.makeBoundHelper) {
    forExport = Ember.HTMLBars.makeBoundHelper(_xor.xorHelper);
  }

  exports.default = forExport;
});
define('dummy/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('dummy/initializers/export-application-global', ['exports', 'dummy/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('dummy/initializers/truth-helpers', ['exports', 'ember-truth-helpers/utils/register-helper', 'ember-truth-helpers/helpers/and', 'ember-truth-helpers/helpers/or', 'ember-truth-helpers/helpers/equal', 'ember-truth-helpers/helpers/not', 'ember-truth-helpers/helpers/is-array', 'ember-truth-helpers/helpers/not-equal', 'ember-truth-helpers/helpers/gt', 'ember-truth-helpers/helpers/gte', 'ember-truth-helpers/helpers/lt', 'ember-truth-helpers/helpers/lte'], function (exports, _registerHelper, _and, _or, _equal, _not, _isArray, _notEqual, _gt, _gte, _lt, _lte) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() /* container, application */{

    // Do not register helpers from Ember 1.13 onwards, starting from 1.13 they
    // will be auto-discovered.
    if (Ember.Helper) {
      return;
    }

    (0, _registerHelper.registerHelper)('and', _and.andHelper);
    (0, _registerHelper.registerHelper)('or', _or.orHelper);
    (0, _registerHelper.registerHelper)('eq', _equal.equalHelper);
    (0, _registerHelper.registerHelper)('not', _not.notHelper);
    (0, _registerHelper.registerHelper)('is-array', _isArray.isArrayHelper);
    (0, _registerHelper.registerHelper)('not-eq', _notEqual.notEqualHelper);
    (0, _registerHelper.registerHelper)('gt', _gt.gtHelper);
    (0, _registerHelper.registerHelper)('gte', _gte.gteHelper);
    (0, _registerHelper.registerHelper)('lt', _lt.ltHelper);
    (0, _registerHelper.registerHelper)('lte', _lte.lteHelper);
  }

  exports.default = {
    name: 'truth-helpers',
    initialize: initialize
  };
});
define('dummy/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
define('dummy/router', ['exports', 'dummy/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    this.route('doc-pages', function () {
      this.route('docs');
      this.route('cookbook');
    });
  });

  exports.default = Router;
});
define('dummy/routes/doc-pages', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define('dummy/routes/doc-pages/cookbook', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define('dummy/routes/doc-pages/docs', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define('dummy/routes/index', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    beforeModel: function beforeModel() {
      // this.transitionTo('doc-pages.docs')
    }
  });
});
define('dummy/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
define("dummy/snippets", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    "basic-usage.hbs": "{{d-table table=table}}",
    "basic-usage.js.js": "import Ember from 'ember';\n\nexport default Ember.Controller.extend({\n  init() {\n    this._super(...arguments);\n    let changeData = () => {\n      let length = Math.floor(Math.random() * 5) + 3;\n      let data = this.get('table.data');\n      data.clear()\n      while (length--) {\n        data.pushObject({\n          foo: Math.floor(Math.random() * 100),\n          bar: Math.floor(Math.random() * 100),\n          baz: Math.floor(Math.random() * 100),\n        })\n      }\n      if (Math.random() > 0.3) {\n        let columns = this.get('table.columns');\n        columns.pushObject(columns.shiftObject());\n      }\n      Ember.run.later(changeData, 500)\n    }\n    Ember.run.later(changeData, 2000);\n  },\n  table: {\n    columns: Ember.A([{key: 'foo'}, {key: 'bar'}, {key: 'baz'}]),\n    data: Ember.A([\n      {foo: '5', bar: '2', baz: '3'},\n      {foo: '4', bar: '5', baz: '6'},\n      {foo: '7', bar: '8', baz: '9'},\n    ])\n  }\n});\n"
  };
});
define("dummy/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "WEY2DN+k", "block": "{\"statements\":[[1,[26,[\"outlet\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "dummy/templates/application.hbs" } });
});
define("dummy/templates/components/code-snippet", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "3vKDCMgv", "block": "{\"statements\":[[1,[26,[\"source\"]],false],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "dummy/templates/components/code-snippet.hbs" } });
});
define("dummy/templates/components/custom-render", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "abeY/zQu", "block": "{\"statements\":[[0,\"$\"],[1,[26,[\"value\"]],false],[0,\"$$\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "dummy/templates/components/custom-render.hbs" } });
});
define("dummy/templates/components/custom-tr", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "p+IiLdwC", "block": "{\"statements\":[[18,\"default\"],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"hasPartials\":false}", "meta": { "moduleName": "dummy/templates/components/custom-tr.hbs" } });
});
define("dummy/templates/components/header-with-action", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "2uaD9qlp", "block": "{\"statements\":[[1,[26,[\"value\"]],false],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "dummy/templates/components/header-with-action.hbs" } });
});
define("dummy/templates/components/pagination-manager", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "qMxdRj7V", "block": "{\"statements\":[[11,\"div\",[]],[15,\"class\",\"d-pagination-manage\"],[13],[0,\"\\n    \"],[11,\"a\",[]],[15,\"href\",\"#\"],[5,[\"action\"],[[28,[null]],[28,[\"pagination\",\"changePrevious\"]]]],[13],[0,\"<\"],[14],[0,\"\\n    \"],[1,[33,[\"input\"],null,[[\"class\",\"value\"],[\"current-page\",[28,[\"pagination\",\"currentPage\"]]]]],false],[0,\"\\n    \"],[1,[33,[\"input\"],null,[[\"class\",\"value\"],[\"page-size\",[28,[\"pagination\",\"pageSize\"]]]]],false],[0,\"\\n    \"],[11,\"a\",[]],[15,\"href\",\"#\"],[5,[\"action\"],[[28,[null]],[28,[\"pagination\",\"changeNext\"]]]],[13],[0,\">\"],[14],[0,\"\\n\"],[14]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "dummy/templates/components/pagination-manager.hbs" } });
});
define("dummy/templates/components/sorting-header", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "mxmMm22V", "block": "{\"statements\":[[1,[26,[\"value\"]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "dummy/templates/components/sorting-header.hbs" } });
});
define("dummy/templates/doc-pages", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "sMwjzX80", "block": "{\"statements\":[[11,\"header\",[]],[15,\"class\",\"nav-header\"],[13],[0,\"\\n    \"],[11,\"nav\",[]],[13],[0,\"\\n        \"],[11,\"div\",[]],[15,\"class\",\"logo\"],[13],[0,\"\\n            \"],[11,\"h1\",[]],[13],[0,\"Ember-dressy-table\"],[14],[0,\"\\n        \"],[14],[0,\"\\n        \"],[11,\"div\",[]],[15,\"class\",\"links\"],[13],[0,\"\\n            \"],[6,[\"link-to\"],[\"doc-pages.docs\"],[[\"class\"],[\"link\"]],{\"statements\":[[0,\"Docs\"]],\"locals\":[]},null],[0,\"\\n            \"],[6,[\"link-to\"],[\"doc-pages.cookbook\"],[[\"class\"],[\"link\"]],{\"statements\":[[0,\"Cookbook\"]],\"locals\":[]},null],[0,\"\\n            \"],[11,\"a\",[]],[15,\"href\",\"https://github.com/zalando-incubator/ember-dressy-table\"],[15,\"class\",\"link\"],[15,\"target\",\"_blank\"],[13],[0,\"Github\"],[14],[0,\"\\n        \"],[14],[0,\"\\n    \"],[14],[0,\"\\n\"],[14],[0,\"\\n\"],[11,\"main\",[]],[15,\"class\",\"content\"],[13],[0,\"\\n    \"],[11,\"nav\",[]],[15,\"class\",\"navigation\"],[13],[0,\"\\n        \"],[11,\"section\",[]],[13],[0,\"Docs\"],[14],[0,\"\\n        \"],[6,[\"link-to\"],[\"doc-pages.docs\"],[[\"class\"],[\"link\"]],{\"statements\":[[0,\"Docs\"]],\"locals\":[]},null],[0,\"\\n        \"],[11,\"section\",[]],[13],[0,\"Cookbook\"],[14],[0,\"\\n        \"],[6,[\"link-to\"],[\"doc-pages.cookbook\"],[[\"class\"],[\"link\"]],{\"statements\":[[0,\"Cookbook\"]],\"locals\":[]},null],[0,\"\\n    \"],[14],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"doc-page\"],[13],[0,\"\\n        \"],[1,[26,[\"outlet\"]],false],[0,\"\\n    \"],[14],[0,\"\\n\"],[14],[0,\"\\n\\n\"],[11,\"footer\",[]],[13],[0,\"\\n    \"],[11,\"div\",[]],[15,\"class\",\"copyright\"],[13],[0,\"\\n    \"],[14],[0,\"\\n\"],[14],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "dummy/templates/doc-pages.hbs" } });
});
define("dummy/templates/doc-pages/cookbook", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "pb8xjDgt", "block": "{\"statements\":[[11,\"h1\",[]],[13],[0,\"Under construction\"],[14]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "dummy/templates/doc-pages/cookbook.hbs" } });
});
define("dummy/templates/doc-pages/docs", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "GhAAtQ8H", "block": "{\"statements\":[[11,\"h1\",[]],[13],[0,\"Overview\"],[14],[0,\"\\nThis addon gives you a table component with the following features:\\n\"],[11,\"ul\",[]],[13],[0,\"\\n    \"],[11,\"li\",[]],[13],[0,\"valid HTML\"],[14],[0,\"\\n    \"],[11,\"li\",[]],[13],[0,\"filtering/sorting/pagination\"],[14],[0,\"\\n    \"],[11,\"li\",[]],[13],[0,\"dynamic/rearrangeable/toggable columns\"],[14],[0,\"\\n    \"],[11,\"li\",[]],[13],[0,\"custom rendering component for cells\"],[14],[0,\"\\n    \"],[11,\"li\",[]],[13],[0,\"possibility to send actions from the cell component to the upper components\"],[14],[0,\"\\n    \"],[11,\"li\",[]],[13],[0,\"easy i18n\"],[14],[0,\"\\n\"],[14],[0,\"\\n\\n\"],[11,\"h1\",[]],[13],[0,\"Installation\"],[14],[0,\"\\nYou need to run this command in order to install the addon:\\n\"],[11,\"div\",[]],[15,\"class\",\"code\"],[13],[0,\"\\n    \"],[11,\"code\",[]],[13],[0,\"$ ember install ember-dressy-table\"],[14],[0,\"\\n\"],[14],[0,\"\\n\\nThis will install the following components into your application: \"],[11,\"code\",[]],[13],[0,\"d-table\"],[14],[0,\", \"],[11,\"code\",[]],[13],[0,\"d-pagination\"],[14],[0,\",\\n\"],[11,\"code\",[]],[13],[0,\"d-header\"],[14],[0,\", \"],[11,\"code\",[]],[13],[0,\"d-tbody\"],[14],[0,\" and others.\\n\"],[11,\"h1\",[]],[13],[0,\"Basic usage\"],[14],[0,\"\\n\"],[6,[\"code-example\"],null,[[\"hbs\",\"js\"],[\"basic-usage.hbs\",\"basic-usage.js.js\"]],{\"statements\":[[0,\"    \"],[19,[28,[\"partialName\"]]],[0,\"\\n\"]],\"locals\":[\"partialName\"]},null],[11,\"p\",[]],[13],[0,\"For more examples see the \"],[6,[\"link-to\"],[\"doc-pages.cookbook\"],null,{\"statements\":[[0,\"cookbook\"]],\"locals\":[]},null],[14],[0,\"\\n\"],[11,\"h1\",[]],[13],[0,\"Styling\"],[14],[0,\"\\n\"],[11,\"p\",[]],[13],[0,\"This addon contains no CSS focusing only on producing correct HTML markup.\\n    That's why it can be used as a base for extention to other addons.\"],[14]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":true}", "meta": { "moduleName": "dummy/templates/doc-pages/docs.hbs" } });
});
define("dummy/templates/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "JE/QNYd7", "block": "{\"statements\":[[6,[\"d-table\"],null,[[\"table\",\"class\"],[[28,[\"table\"]],\"some-table\"]],{\"statements\":[[0,\"    \"],[1,[33,[\"d-header\"],null,[[\"d-table\",\"class\",\"someAction\"],[[28,[\"dtab\"]],\"some-table-header\",[33,[\"action\"],[[28,[null]],\"headerAction\"],null]]]],false],[0,\"\\n\"],[6,[\"d-tbody\"],null,[[\"d-table\",\"class\"],[[28,[\"dtab\"]],\"some-table-tbody\"]],{\"statements\":[[6,[\"each\"],[[28,[\"dtab\",\"data\"]]],null,{\"statements\":[[0,\"            \"],[1,[33,[\"component\"],[[28,[\"zBody\",\"d-tr\"]]],[[\"row\",\"rInd\"],[[28,[\"row\"]],[28,[\"rInd\"]]]]],false],[0,\"\\n\"]],\"locals\":[\"row\",\"rInd\"]},null]],\"locals\":[\"zBody\"]},null]],\"locals\":[\"dtab\"]},null]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "dummy/templates/index.hbs" } });
});
define("dummy/templates/snippets/basic-usage", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "FzuwwFGK", "block": "{\"statements\":[[1,[33,[\"d-table\"],null,[[\"table\"],[[28,[\"table\"]]]]],false]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "dummy/templates/snippets/basic-usage.hbs" } });
});
define('dummy/templates/snippets/basic-usage.js', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    init: function init() {
      var _this = this;

      this._super.apply(this, arguments);
      var changeData = function changeData() {
        var length = Math.floor(Math.random() * 5) + 3;
        var data = _this.get('table.data');
        data.clear();
        while (length--) {
          data.pushObject({
            foo: Math.floor(Math.random() * 100),
            bar: Math.floor(Math.random() * 100),
            baz: Math.floor(Math.random() * 100)
          });
        }
        if (Math.random() > 0.3) {
          var columns = _this.get('table.columns');
          columns.pushObject(columns.shiftObject());
        }
        Ember.run.later(changeData, 500);
      };
      Ember.run.later(changeData, 2000);
    },

    table: {
      columns: Ember.A([{ key: 'foo' }, { key: 'bar' }, { key: 'baz' }]),
      data: Ember.A([{ foo: '5', bar: '2', baz: '3' }, { foo: '4', bar: '5', baz: '6' }, { foo: '7', bar: '8', baz: '9' }])
    }
  });
});


define('dummy/config/environment', ['ember'], function(Ember) {
  var prefix = 'dummy';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("dummy/app")["default"].create({});
}
//# sourceMappingURL=dummy.map
