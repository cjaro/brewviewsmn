module.exports = (sequelize, Sequelize) => {
  let Visit = sequelize.define("visits", {
    brewery: {
      type: Sequelize.STRING
    },
    date: {
      type: Sequelize.DATE
    },
    notes: {
      type: Sequelize.STRING
    }
  });
  return Visit;
};
