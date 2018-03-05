import { alias } from '@ember/object/computed';
import Component from '@ember/component';
import layout from '../templates/components/d-tbody';

export default Component.extend({
  layout,
  tagName:'tbody',
  settings: alias('d-table.settings'),
  columns: alias('d-table.columns'),
  state: alias('d-table.state'),
  data: alias('d-table.data')
});
