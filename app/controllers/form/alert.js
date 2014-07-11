/**
 * Created by Administrator on 2014/7/10.
**/
export default Ember.Controller.extend({
    close:function(){
        alert(" 在关闭时触发的控制器对应的方法");
    },
    closed:function(){
        alert("在关闭完成后触发的控制器对应的方法");
    }
});