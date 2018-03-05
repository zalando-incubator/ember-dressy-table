import { alias } from '@ember/object/computed';
import Component from '@ember/component';
import layout from '../templates/components/d-table';

export default Component.extend({
  layout,
  tagName: 'table',
  data: alias('table.data'),
  columns: alias('table.columns'),
  settings: alias('table.settings'),
  state: alias('table.state')
});
