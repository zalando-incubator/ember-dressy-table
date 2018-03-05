import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { standardTable } from '../../datasets/tables';

moduleForComponent('d-tr', 'Integration | Component | z tr', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{d-tr}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#d-tr}}
      template block text
    {{/d-tr}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});


test('it renders custom tr component', function (assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  this.set('table', Object.assign({}, standardTable, {
    settings: {
      rowComponent: 'custom-tr'
    }
  }));

  // Template block usage:
  this.render(hbs`
        {{d-table table=table}}
  `);
  assert.equal(this.$('table tbody').text().replace(/[^\w|;|:]/g, ''), '0;123:1;456:2;789:');
});
