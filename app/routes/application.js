export default Ember.Route.extend({
  model:function(){
    BricksUI.I18n.initialLanguage(function(lang){
      return BricksUI.I18n.lang[lang];
    });
  }
});