var str = DS.attr('string'),
  date = DS.attr('date'),
  boolean = DS.attr('boolean')
  ;

var Post = DS.Model.extend(BricksUI.I18n.I18nableValidationMixin, {
  title: str,
  contents: str,
  isPublic: boolean,
  createDate: date,
  password:str,
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
    passwordConfirmation:{
      confirmation: {
        message:"用户名和密码必须一致"
      }
    },

    password:{
      presence: true,
      length: { minimum: 10 }
    },
    author: {
      presence: true
    },
    title: {
      presence: true,
      length: { minimum: 10 }
    },
    contents: {
      Presence: true,
      length: { minimum: 20 }
    }
  }
});

Post.reopenClass({
  FIXTURES: [
    { id: 1, title: 'Trek', contents: 'Glowacki' },
    { id: 2, title: 'Tom', contents: 'Dale'     }
  ]
});
export default Post;