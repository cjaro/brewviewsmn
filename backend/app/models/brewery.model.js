module.exports = (sequelize, Sequelize) => {
  return sequelize.define("brewery", {
    name: {
      type: Sequelize.STRING
    }
  });
};
