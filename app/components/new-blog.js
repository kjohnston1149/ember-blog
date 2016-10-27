import Ember from 'ember';

export default Ember.Component.extend({
  addNewBlog: false,
    actions: {
      blogFormShow() {
        this.set('addNewBlog', true);
      },

      saveBlog() {
        var params = {
          title: this.get('title'),
          image: this.get('image'),
          author: this.get('author'),
          date: this.get('date'),
          body: this.get('body'),
        };
        this.set('addNewBlog', false);
        this.sendAction('saveBlog', params);
      }
    }
});
