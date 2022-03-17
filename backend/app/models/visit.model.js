module.exports = (sequelize, Sequelize) => {
  return sequelize.define("visits", {
    name: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    published: {
      type: Sequelize.BOOLEAN
    }
  });
};
