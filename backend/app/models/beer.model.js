module.exports = (sequelize, Sequelize) => {
  return sequelize.define("beer", {
    name: {
      type: Sequelize.STRING
    },
    rating: {
      type: Sequelize.INTEGER
    },
    notes: {
      type: Sequelize.STRING
    },
    visit_id: {
      type: Sequelize.INTEGER
    },
    abv: {
      type: Sequelize.INTEGER
    }
  });
};
