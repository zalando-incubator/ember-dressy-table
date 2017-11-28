import Ember from 'ember';
import layout from '../templates/components/header-with-action';

export default Ember.Component.extend({
  tagName: 'td',
  layout,
  click(){
    this.sendAction('d-header.someAction');
  }
});
