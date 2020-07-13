const bcrypt = require('bcryptjs');

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert(
      'users',
      [
        {
          name: 'Master',
          email: 'master@up13.com',
          master: true,
          provider: true,
          password_hash: bcrypt.hashSync('123456', 8),
          is_active: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Allejandro',
          email: 'alle401@gmail.com',
          master: false,
          provider: true,
          password_hash: bcrypt.hashSync('123456', 8),
          is_active: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Yuri',
          email: 'yuriiruyov@gmail.com',
          master: false,
          provider: false,
          password_hash: bcrypt.hashSync('123456', 8),
          is_active: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: queryInterface => queryInterface.bulkDelete('users', null, {}),
};
