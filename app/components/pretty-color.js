export default Ember.Component.extend({
  init:function(){
    this._super();
    console.log("==================");
  },
  classNames: ['pretty-color'],
  attributeBindings: ['style'],
  style: function(){
    return 'color: ' + this.get('name') + ';';
  }.property('name')
});
