import { run } from '@ember/runloop';
import EmberObject from '@ember/object';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import wait from 'ember-test-helpers/wait';
import {
  standardTable,
  customRender,
  nestedDataTable
} from '../../datasets/tables';

moduleForComponent('d-table', 'Integration | Component | z table', {
  integration: true
});

test('it renders', function (assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{d-table}}`);

  assert.equal(this.$().text().trim(), '');


});

test('it renders basic data by default', function (assert) {
  this.set('table', standardTable);
  this.render(hbs`{{d-table table=table}}`);

  // header
  assert.equal(this.$('table thead tr td').map((i, item)=>item.innerHTML.trim()).toArray().join(','), 'foo,bar,baz');

  //body
  assert.equal(this.$('table tbody tr').length, 3);
  assert.equal(this.$('table tbody td').length, 9);
  assert.equal(this.$('table tbody td').map((i, item)=>item.innerHTML).toArray().join(','), '1,2,3,4,5,6,7,8,9');
})

test('it doesnt renders headers if settings have header = false', function (assert) {
  this.set('table', Object.assign({}, standardTable, {settings: {header: false}}));
  this.render(hbs`{{d-table table=table}}`);

  assert.equal(this.$('table thead').length, 0);
  assert.equal(this.$('table tbody tr').length, 3);
})

test('it renders cells with custom component', function (assert) {
  this.set('table', customRender);
  this.render(hbs`{{d-table table=table}}`);
  assert.equal(this.$('table tbody tr').length, 3);
  assert.equal(this.$('table tbody td').map((i, item)=>item.innerHTML).toArray().join(','), '1,$2$$,3,4,$5$$,6,7,$8$$,9');
})


test('it handles changing data', function (assert) {
  let changedStandardData = standardTable.data.map(i=>new EmberObject(i));
  changedStandardData[0].set('foo', "2");
  this.set('table', standardTable);
  this.render(hbs`{{d-table table=table}}`);
  assert.equal(this.$('table tbody td').map((i, item)=>item.innerHTML).toArray().join(','), '1,2,3,4,5,6,7,8,9');
  this.set('table', Object.assign({}, standardTable, {
    data: changedStandardData
  }));
  assert.equal(this.$('table tbody td').map((i, item)=>item.innerHTML).toArray().join(','), '2,2,3,4,5,6,7,8,9');
  run(function () {
    changedStandardData[0].set('foo', "3");
  })
  return wait().then(() => {
    assert.equal(this.$('table tbody td').map((i, item)=>item.innerHTML).toArray().join(','), '3,2,3,4,5,6,7,8,9');
  });

})


test('it handles changing column order', function (assert) {
  this.set('table', new EmberObject(standardTable));
  this.render(hbs`{{d-table table=table}}`);
  assert.equal(this.$('table tbody td').map((i, item)=>item.innerHTML).toArray().join(','), '1,2,3,4,5,6,7,8,9');

  this.set('table.columns', [
    {key: 'bar'}, {key: 'foo'}, {key: 'baz'}
  ])
  return wait().then(() => {
    assert.equal(this.$('table tbody td').map((i, item)=>item.innerHTML).toArray().join(','), '2,1,3,5,4,6,8,7,9');
  });
})

test('it renders nested data using nested key', function (assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  this.set('table', Object.assign({}, nestedDataTable));

  // Template block usage:
  this.render(hbs`
            {{d-table table=table}}
  `);
  assert.equal(this.$('table tbody td').map((i, item)=>item.innerHTML).toArray().join(','), 'a,b,1,4,c,d,2,5,e,f,3,6');
});