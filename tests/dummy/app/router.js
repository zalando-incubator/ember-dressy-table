import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
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
