import Sequelize from 'sequelize'
import sequelizeInstance from './'

var User = sequelizeInstance.define('user', {
  firstName: {
    type: Sequelize.STRING,
    field: 'first_name' // Will result in an attribute that is firstName when user facing but first_name in the database
  },
  lastName: {
    type: Sequelize.STRING
  },
  id: {
    type: Sequelize.STRING,
    primaryKey: true
  },
  displayName: {
    type: Sequelize.STRING
  }
}, {
  freezeTableName: true // Model tableName will be the same as the model name
});

User.sync({force: true}).then(function () {
  // Table created
});

export default User