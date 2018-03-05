import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import standardTable from '../../datasets/tables';

moduleForComponent('d-footer', 'Integration | Component | z footer', {
  integration: true
});

test('it renders', function (assert) {

  // Set any properties with this.set('myProperty', 'value');
  this.set('table', Object.assign({}, standardTable, {settings: {footer: true}}))
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{d-footer d-table=table}}`);

  assert.equal(this.$('tfoot tr td').map((i,item)=>item.innerHTML).toArray().join(','), 'foo,bar,baz');

  // Template block usage:
  this.render(hbs`
    {{#d-footer d-table=table}}
      template block text
    {{/d-footer}}`);

  assert.equal(this.$().text().trim(), 'template block text');
});
