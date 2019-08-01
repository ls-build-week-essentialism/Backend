exports.seed = function(knex) {
  return knex('user-values').insert([
    {
      user_id: 1,
      default_value_id: 1,
      value_rank: 1,
      value_importance: 'I love outdoor activities.'
    },
    {
      user_id: 1,
      created_value_id: 1,
      value_rank: 2,
      value_importance: 'You gotta create.'
    },
  ]);
};
