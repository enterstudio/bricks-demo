/**
 * Created by Administrator on 2014/7/11.
 */
var User = DS.Model.extend({
    firstName: DS.attr('string'),
    lastName:DS.attr('string')


});
User.reopenClass({
    FIXTURES: {
        users: [
            { id: 1, firstName: 'xx',lastName:'d' },
            { id: 2, firstName: 'xxdfasx',lastName:'dd'},
            { id: 3, firstName: 'hi',lastName:'ddd'},
            { id: 4, firstName: 'xx',lastName:'dddd' },
            { id: 5, firstName: 'xxdfax',lastName:'ddddd'}
        ],
        meta: {
            total: 100
        }
    }
});
export default User;
