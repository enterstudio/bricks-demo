export default DS.FixtureAdapter.extend({
    fixturesForType:function(type){
        if (type.FIXTURES[type.typeKey+"s"]) {
            var fixtures = Ember.A(type.FIXTURES[type.typeKey]);
            fixtures.map(function(fixture){
                var fixtureIdType = typeof fixture.id;
                if(fixtureIdType !== "number" && fixtureIdType !== "string"){
                    throw new Error(fmt('the id property must be defined as a number or string for fixture %@', [fixture]));
                }
                fixture.id = fixture.id + '';
                return fixture;
            });
            return type.FIXTURES;
        }
        return null;
    },
    queryFixtures: function(fixtures, query, type) {
        return fixtures;
    },
    serializer:{
        extract:function(store, type, payload){
            this.extractMeta(store, type, payload);
            return payload[type.typeKey+"s"];
        },
        extractMeta:function(store, type, payload){
            if (payload && payload.meta) {
                store.metaForType(type, payload.meta);
                delete payload.meta;
            }
        }
    }

});
