import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(blog) {
      if (confirm('Are you sure you want to delete this blog entry?')) {
        this.sendAction('destroyBlog', blog);
      }
    }
  }
});
