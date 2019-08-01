exports.seed = function(knex) {
  return knex('created-values').insert([
    {
      user_id: 1,
      created_value_name: 'communication'
    },
    {
      user_id: 1,
      created_value_name: 'helping nature'
    },
    {
      user_id: 2,
      created_value_name: 'perseverence'
    },
    {
      user_id: 2,
      created_value_name: 'exercise'
    },
    {
      user_id: 2,
      created_value_name: 'entertaining friends'
    },
    {
      user_id: 3,
      created_value_name: 'poetry'
    },
    {
      user_id: 3,
      created_value_name: 'gaming'
    },
    {
      user_id: 3,
      created_value_name: 'hosting family'
    }
  ]);
};
