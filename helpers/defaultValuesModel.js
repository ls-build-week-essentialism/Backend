const db = require('../data/dbConfig');

const getDefaultValues = async () => {
  return await db('default-values');
};

module.exports = { getDefaultValues };