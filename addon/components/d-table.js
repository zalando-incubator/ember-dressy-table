import Ember from 'ember';
import layout from '../templates/components/d-table';

export default Ember.Component.extend({
  layout,
  tagName: 'table',
  data: Ember.computed.alias('table.data'),
  columns: Ember.computed.alias('table.columns'),
  settings: Ember.computed.alias('table.settings'),
  state: Ember.computed.alias('table.state')
});
