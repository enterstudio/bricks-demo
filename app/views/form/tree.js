export default Ember.View.extend({

  init: function () {
    this._super.apply(this, arguments);
    var treeView=this;

    this.set('treeOptions', {
      check: {
        enable: true
      },
      data: {
        simpleData: {
          enable: true
        }
      },
      callback: {
        onClick: function (component, event, treeId, treeNode, clickFlag) {
          var counter=$('#logHolder').data('count'),
              msg="当前操作的树的ID是<em> %@ </em> ,当前节点名称是<em> %@ </em>，当前节点ID是 <em>%@</em> ,父节点id是 <em>%@</em>".fmt(treeId, treeNode.name, treeNode.id, treeNode.pId)
            ;
          if(counter>4){
            $('#logHolder').empty();
            counter=0;
          }
          $('#logHolder').data('count',(isNaN(counter) ? 0 : ++counter)).append('<p>'+msg+'</p>');
        }
      }
    });
    this.set('zNodes', [
      { id:1, pId:0, name:"根 Root", open:true},
      { id:11, pId:1, name:"父节点 1-1", open:true},
      { id:111, pId:11, name:"叶子节点 1-1-1"},
      { id:112, pId:11, name:"叶子节点 1-1-2"},
      { id:113, pId:11, name:"叶子节点 1-1-3"},
      { id:114, pId:11, name:"叶子节点 1-1-4"},
      { id:12, pId:1, name:"父节点 1-2", open:true},
      { id:121, pId:12, name:"叶子节点 1-2-1"},
      { id:122, pId:12, name:"叶子节点 1-2-2"},
      { id:123, pId:12, name:"叶子节点 1-2-3"},
      { id:124, pId:12, name:"叶子节点 1-2-4"},
      { id:13, pId:1, name:"父节点 1-3", open:true},
      { id:131, pId:13, name:"叶子节点 1-3-1"},
      { id:132, pId:13, name:"叶子节点 1-3-2"},
      { id:133, pId:13, name:"叶子节点 1-3-3"},
      { id:134, pId:13, name:"叶子节点 1-3-4"}
    ]);
  }


});