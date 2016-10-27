import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  date-posted: DS.attr(),
  content: DS.attr(),

});
