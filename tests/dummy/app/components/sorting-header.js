import Component from '@ember/component';
import layout from '../templates/components/sorting-header';

export default Component.extend({
  layout,
  tagName: 'td',
  changeSorting(key){
    let sorting = this.get('state.sorting') || [];
    let newSorting = [];
    const keyCheck = [sorting.indexOf(key), sorting.indexOf(key + ':asc'), sorting.indexOf(key + ':desc')];
    if (keyCheck[0] >= 0) {
      newSorting = sorting.slice(0, keyCheck[0]).concat(key + ':desc', sorting.slice(keyCheck[0] + 1));
    } else if (keyCheck[1] >= 0) {
      newSorting = sorting.slice(0, keyCheck[1]).concat(key + ':desc', sorting.slice(keyCheck[1] + 1));
    } else if (keyCheck[2] >= 0) {
      newSorting = sorting.slice(0, keyCheck[2]).concat(sorting.slice(keyCheck[2] + 1));
    } else {
      newSorting = sorting.concat(key + ':asc');
    }
    this.set('state.sorting', newSorting);
  },
  click(){
    const key = this.get('col.key');
    this.changeSorting(key);
    // this.get('extra.actionChangeSort')(this.get('col'));

  }
});
