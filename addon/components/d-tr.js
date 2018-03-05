import { alias } from '@ember/object/computed';
import Component from '@ember/component';
import layout from '../templates/components/d-tr';

export default Component.extend({
  layout,
  tagName: '',
  'd-table': alias('d-tbody.d-table'),
  settings: alias('d-tbody.settings'),
  columns: alias('d-tbody.columns')
  // data: Ember.computed.alias('d-tbody.data'),
});
