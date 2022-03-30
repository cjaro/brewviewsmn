module.exports = (sequelize, Sequelize) => {
  return sequelize.define("breweries", {
    brewery: {
      type: Sequelize.STRING
    }
  });
};
