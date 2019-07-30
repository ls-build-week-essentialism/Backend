const bcrypt = require('bcryptjs');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, email: 'jay@email.com', password: bcrypt.hashSync("password", 10), firstName: "Jay", lastName: "Wood"},
        {id: 2, email: 'justin@email.com', password: bcrypt.hashSync("password", 10), firstName: "Justin", lastName: "Renniger"},
        {id: 3, email: 'yurika@email.com', password: bcrypt.hashSync("password", 10), firstName: "Yurika", lastName: "Sakae"},
      ]);
    });
};
