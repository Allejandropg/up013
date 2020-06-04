const bcrypt = require('bcryptjs');

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert(
      'users',
      [
        {
          name: 'Allejandro',
          email: 'alle401@gmail.com',
          provider: true,
          password_hash: bcrypt.hashSync('suporte1020', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Yuri',
          email: 'yuriiruyov@gmail.com',
          provider: false,
          password_hash: bcrypt.hashSync('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        }
      ],
    {});
  },

  down: (queryInterface) => queryInterface.bulkDelete('Users', null, {}),
};
