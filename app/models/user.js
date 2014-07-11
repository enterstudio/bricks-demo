/**
 * Created by Administrator on 2014/7/11.
 */
var User = DS.Model.extend({
    firstName : DS.attr('string')

});
User.reopenClass({
    FIXTURES: [
        { id: 1, firstName:'xx' },
        { id: 2, firstName:'xxx'},
        { id: 3, firstName:'hi'}
    ]
});
export default User;
