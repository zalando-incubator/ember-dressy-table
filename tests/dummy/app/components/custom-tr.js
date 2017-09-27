import Ember from 'ember';
import layout from '../templates/components/custom-tr';

export default Ember.Component.extend({
  layout,
  tagName: 'tr',
  mouseEnter() {
    // console.log(this, arguments, this.get('row'));
  }
});
