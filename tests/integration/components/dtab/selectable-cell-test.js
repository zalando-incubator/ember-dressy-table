import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('dtab/selectable-cell', 'Integration | Component | dtab/selectable cell', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{dtab/selectable-cell}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#dtab/selectable-cell}}
      template block text
    {{/dtab/selectable-cell}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
