import { run } from '@ember/runloop';
import { moduleForComponent, test } from 'ember-qunit';
import wait from 'ember-test-helpers/wait';
import hbs from 'htmlbars-inline-precompile';
import { standardTable, customHeaderRender } from '../../datasets/tables';

moduleForComponent('d-header', 'Integration | Component | z header', {
  integration: true
});

test('it renders', function (assert) {

  // Set any properties with this.set('myProperty', 'value');
  this.set('table', Object.assign({}, standardTable));
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{d-header d-table=table}}`);

  assert.equal(this.$('thead tr td').map((i, item) => item.innerHTML).toArray().join(',').trim(), 'foo,bar,baz');

  // Template block usage:
  this.render(hbs`
    {{#d-header d-table=table}}
      template block text
    {{/d-header}}`);

  assert.equal(this.$().text().trim(), 'template block text');
});

test('it doesnt renders if settings header=false', function (assert) {
  this.set('table', Object.assign({}, standardTable, {settings: {header: false}}));
  this.render(hbs`{{d-header d-table=table}}`);
  assert.equal(this.$().text().trim(), '');
});

test('it renders custom header component', function (assert) {
  this.set('table', customHeaderRender);
  this.render(hbs`{{d-header d-table=table}}`);
  assert.equal(this.$('thead tr td').map((i, item) => item.innerHTML).toArray().join(','), 'foo,$bar$$,baz');
});

test('it renders header value from column.header.value', function (assert) {
  this.set('table', Object.assign({}, standardTable, {
    columns: [
      {key: 'foo'}, {key: 'bar', header: {value: 'BAR'}}, {key: 'baz'}
    ]
  }));
  this.render(hbs`{{d-header d-table=table}}`);
  assert.equal(this.$('thead tr td').map((i, item) => item.innerHTML).toArray().join(','), 'foo,BAR,baz');
});

test('it sends action from header component to header', function (assert) {
  let counter = 0;

  // Set any properties with this.set('myProperty', 'value');
  this.set('table', Object.assign(standardTable, {
    columns: [
      {key: 'foo'}, {key: 'bar'}, {key: 'baz', header: {component: 'header-with-action'}}
    ]
  }));

  this.set('headerAction', () => {
    counter++;
  });

  this.render(hbs`{{d-header d-table=table someAction=(action headerAction)}}`);
  run(() => this.$('td:contains("baz")').click());

  return wait().then(() => {
    assert.equal(counter, 1);
  });
});
