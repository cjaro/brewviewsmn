module.exports = (sequelize, Sequelize) => {
  return sequelize.define("visits", {
    name: {
      type: Sequelize.STRING
    },
    date: {
      type: Sequelize.DATE
    }
  });
};
