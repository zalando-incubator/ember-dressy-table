import Component from '@ember/component';
import layout from '../templates/components/header-with-action';

export default Component.extend({
  tagName: 'td',
  layout,
  click(){
    this.get('d-header.someAction')();
  }
});
