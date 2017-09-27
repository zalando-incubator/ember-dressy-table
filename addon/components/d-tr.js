import Ember from 'ember';
import layout from '../templates/components/d-tr';

export default Ember.Component.extend({
  layout,
  tagName: '',
  'd-table': Ember.computed.alias('d-tbody.d-table'),
  settings: Ember.computed.alias('d-tbody.settings'),
  columns: Ember.computed.alias('d-tbody.columns')
  // data: Ember.computed.alias('d-tbody.data'),
});
