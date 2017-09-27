import Ember from 'ember';
import layout from '../templates/components/d-sorter';

export default Ember.Component.extend({
  layout,
  tagName: '',
  dataSorting: Ember.computed.alias('table.state.sorting'),
  sortedData: Ember.computed.sort('table.data', 'dataSorting'),
});
