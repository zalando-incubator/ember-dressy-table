import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('doc-pages', function() {
    this.route('docs');
    this.route('cookbook');
  });
});

export default Router;
