var Router = Ember.Router.extend(); // ensure we don't share routes between all Router instances

Router.map(function() {
  this.route('component-test');
  this.route('helper-test');
  this.resource("form",function(){
    this.route('datepicker');
    this.route('complex');
    this.route('tree');
    this.route('daterange');
    this.route('rich-text');
  });
});

export default Router;
