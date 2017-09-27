import Ember from 'ember';

export default Ember.Controller.extend({
  init() {
    this._super(...arguments);
    let changeData = () => {
      let length = Math.floor(Math.random() * 5) + 3;
      let data = this.get('table.data');
      data.clear()
      while (length--) {
        data.pushObject({
          foo: Math.floor(Math.random() * 100),
          bar: Math.floor(Math.random() * 100),
          baz: Math.floor(Math.random() * 100),
        })
      }
      if (Math.random() > 0.3) {
        let columns = this.get('table.columns');
        columns.pushObject(columns.shiftObject());
      }
      Ember.run.later(changeData, 500)
    }
    Ember.run.later(changeData, 2000);
  },
  table: {
    columns: Ember.A([{key: 'foo'}, {key: 'bar'}, {key: 'baz'}]),
    data: Ember.A([
      {foo: '5', bar: '2', baz: '3'},
      {foo: '4', bar: '5', baz: '6'},
      {foo: '7', bar: '8', baz: '9'},
    ])
  }
});
