import { alias } from '@ember/object/computed';
import Component from '@ember/component';
import layout from '../templates/components/d-header';

export default Component.extend({
  layout,
  tagName: '',
  settings: alias('d-table.settings'),
  columns: alias('d-table.columns'),
  state: alias('d-table.state')
});
