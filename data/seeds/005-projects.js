exports.seed = function(knex) {
  return knex('projects').insert([
    {
      user_id: 1,
      project_name: 'Take Ableton online course',
      project_active: false,
      proj_val_align: 3
    },
    {
      user_id: 1,
      project_name: 'practice beatmaking',
      project_active: true,
      proj_val_align: 0
    },
    {
      user_id: 1,
      project_name: 'Clean the yard',
      project_active: true,
      proj_val_align: 0
    },
    {
      user_id: 1,
      project_name: 'Clean the house',
      project_active: true,
      proj_val_align: 4
    },
    {
      user_id: 2,
      project_name: 'Play Soccer',
      project_active: true,
      proj_val_align: 8
    },
    {
      user_id: 2,
      project_name: 'Read Eloquent JS',
      project_active: true,
      proj_val_align: 7
    },
    {
      user_id: 2,
      project_name: 'Go for a walk in the woods',
      project_active: false,
      proj_val_align: 7
    },
    {
      user_id: 3,
      project_name: 'Quality time with family',
      project_active: true,
      proj_val_align: 0
    },
    {
      user_id: 3,
      project_name: 'learn to grill ribeye',
      project_active: true,
      proj_val_align: 0
    },
    {
      user_id: 3,
      project_name: 'Get a job',
      project_active: true,
      proj_val_align: 0
    }
  ]);
};