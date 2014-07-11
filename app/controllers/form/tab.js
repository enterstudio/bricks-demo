/**
 * Created by Administrator on 2014/7/10.
 */
export default Ember.Controller.extend({
    tabsMeta: Ember.A([
       Ember.Object.create({ title: 'Foo', template: 'tab/foo-tabpane'}),
        Ember.Object.create({ title: 'Bar', template: 'tab/bar-tabpane'})
    ]),
    tabsRoute: [
        Ember.Object.create({title: 'General', linkTo: 'user.general'}),
        Ember.Object.create({title: 'Privacy', linkTo: 'user.privacy'}),
        Ember.Object.create({title: 'Activities', linkTo: 'user.activities'})
    ]


})
