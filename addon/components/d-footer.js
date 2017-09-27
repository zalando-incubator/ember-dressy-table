import Ember from 'ember';
import layout from '../templates/components/d-footer';

export default Ember.Component.extend({
  layout,
  tagName: '',
  settings: Ember.computed.alias('d-table.settings'),
  columns: Ember.computed.alias('d-table.columns'),
  state: Ember.computed.alias('d-table.state')
});
