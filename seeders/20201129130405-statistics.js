'use strict';

const data = new Date();
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert({ tableName: 'Statistics', schema: 'test' }, [
      { name: '2020', label: 'January', value: 28, createdAt: data, updatedAt: data },
      { name: '2020', label: 'February', value: 32, createdAt: data, updatedAt: data },
      { name: '2020', label: 'March', value: 14, createdAt: data, updatedAt: data },
      { name: '2020', label: 'April', value: 34, createdAt: data, updatedAt: data },
      { name: '2020', label: 'May', value: 47, createdAt: data, updatedAt: data },
      { name: '2020', label: 'Jun', value: 54, createdAt: data, updatedAt: data },
      { name: '2020', label: 'July', value: 53, createdAt: data, updatedAt: data },
      { name: '2020', label: 'August', value: 29, createdAt: data, updatedAt: data },
      { name: '2020', label: 'September', value: 19, createdAt: data, updatedAt: data },
      { name: '2020', label: 'October', value: 60, createdAt: data, updatedAt: data },
      { name: '2020', label: 'November', value: 87, createdAt: data, updatedAt: data },
      { name: '2020', label: 'December', value: 82, createdAt: data, updatedAt: data },
      { name: '2021', label: 'January', value: 45, createdAt: data, updatedAt: data },
      { name: '2021', label: 'February', value: 67, createdAt: data, updatedAt: data },
      { name: '2021', label: 'March', value: 45, createdAt: data, updatedAt: data },
      { name: '2021', label: 'April', value: 65, createdAt: data, updatedAt: data },
      { name: '2021', label: 'May', value: 35, createdAt: data, updatedAt: data },
      { name: '2021', label: 'Jun', value: 35, createdAt: data, updatedAt: data },
      { name: '2021', label: 'July', value: 56, createdAt: data, updatedAt: data },
      { name: '2021', label: 'August', value: 66, createdAt: data, updatedAt: data },
      { name: '2021', label: 'Sepetmber', value: 79, createdAt: data, updatedAt: data },
      { name: '2021', label: 'October', value: 30, createdAt: data, updatedAt: data },
      { name: '2021', label: 'November', value: 50, createdAt: data, updatedAt: data },
      { name: '2021', label: 'December', value: 35, createdAt: data, updatedAt: data },
    ]);
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
