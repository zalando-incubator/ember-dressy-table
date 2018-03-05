import { alias, sort } from '@ember/object/computed';
import Component from '@ember/component';
import layout from '../templates/components/d-sorter';

export default Component.extend({
  layout,
  tagName: '',
  dataSorting: alias('table.state.sorting'),
  sortedData: sort('table.data', 'dataSorting'),
});
