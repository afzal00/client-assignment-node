'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      { tableName: 'Users', schema: 'test' },
      [
        {
          name: 'afzal',
          email: 'shekhadaafzal@gmail.com',
          password: '$2a$10$NiQa9mwawTxPWeszEPB5jeBbnj8XxjTdIdKusIpY0ieLytqwXVsja',
          createdAt: new Date(), updatedAt: new Date()
        },
      ],
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
