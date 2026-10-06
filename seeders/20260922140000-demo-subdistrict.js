'use strict';
const ongkirData = require('../config/ongkir.json');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const now = new Date();
    const results = ongkirData.rajaongkir.results.map(item => ({
      subdistrict_id: item.subdistrict_id,
      province_id: item.province_id,
      province: item.province,
      city_id: item.city_id,
      city: item.city,
      type: item.type,
      subdistrict_name: item.subdistrict_name,
      createdAt: now,
      updatedAt: now
    }));

    await queryInterface.bulkInsert('subdistricts', results, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('subdistricts', null, {});
  }
};
