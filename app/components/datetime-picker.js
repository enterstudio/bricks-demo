export default Ember.TextField.extend({
  _updateDom:function(){
    Ember.run.scheduleOnce('afterRender',this,function(){
      this.$().datetimepicker({
        language:'zh-cn'
      });
    });
  }.on('didInsertElement')
});