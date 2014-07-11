/**
 * Created by Administrator on 2014/7/11.
 */
var PaginationController = Ember.ArrayController.extend(BricksUI.DynamicPageable, DS.FixtureAdapter,{

    perPage: 5,
    modelName:"user",
    firstName:"xx",
    selectedPageSize:5,
    pageSizes: [
        5,10,15,20
    ],
    query:function(){
        return {
            firstName:this.get('firstName'),
            limit:this.get('selectedPageSize')
        }
    }.property("firstName","city").volatile()

})
export default PaginationController;