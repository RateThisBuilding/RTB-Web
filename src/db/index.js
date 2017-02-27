import Sequelize from 'sequelize'

const sequelize = new Sequelize('ratethisbuilding', 'rtb', 'r@t3disBu1nd1ng', {
	host: 'localhost',
	dialect: 'mysql',
	pool: {
	    max: 5,
	    min: 0,
	    idle: 10000
	},
})

export default sequelize;