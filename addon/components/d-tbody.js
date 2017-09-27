import Ember from 'ember';
import layout from '../templates/components/d-tbody';

export default Ember.Component.extend({
  layout,
  tagName:'tbody',
  settings: Ember.computed.alias('d-table.settings'),
  columns: Ember.computed.alias('d-table.columns'),
  state: Ember.computed.alias('d-table.state'),
  data: Ember.computed.alias('d-table.data')
});
