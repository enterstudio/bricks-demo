export default Ember.Route.extend({
  model:function(){
    return this.get('store').find('post',1).then(function(model){
      var catrgory=[];
      for(var i=0;i<20;i++){
        catrgory.push({key:i,value:"选项"+i});
      }
      model.category=catrgory;
      return model;
    });
  },
  setupController:function(controller,model){
    this._super(controller, model);
     controller.set('fruits',[
       {name:'apple'},
       {name:'bannana'},
       {name:'orange'}
     ]);
  }

});