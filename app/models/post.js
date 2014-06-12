var str = DS.attr('string'),
  date = DS.attr('date'),
  boolean = DS.attr('boolean')
  ;

var Post = DS.Model.extend(Ember.Validations.Mixin, {
  title: str,
  content: str,
  isPublic: boolean,
  createDate: date,
  modifyDate: date,
  something:[],
  author: str,
  tags: [],
  validations: {
    tags: {
      length: {
        tokenizer: function(value) {
          return value.slice();
        },
        minimum: 2,
        maximum:4
      }
    },
    author: {
      presence: true
    },
    title: {
      presence: true,
      length: { minimum: 10 }
    },
    content: {
      Presence: true
    }
  }
});

Post.reopenClass({
  FIXTURES: [
    { id: 1, title: 'Trek', content: 'Glowacki' },
    { id: 2, title: 'Tom', content: 'Dale'     }
  ]
});
export default Post;