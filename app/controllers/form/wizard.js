/**
 * Created by Administrator on 2014/7/11.
 */
export default Ember.Controller.extend({
    init: function() {
        this._super();
        this.set('steps', Ember.A([
            Ember.Object.create({title: 'Foo', template: 'tab/foo-tabpane'}),
            Ember.Object.create({title: 'Bar', template: 'tab/bar-tabpane'}),
            Ember.Object.create({title: 'Baz', template: 'tab/baz-tabpane'})
        ]));

    }
});