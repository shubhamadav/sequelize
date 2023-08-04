const Sequelize = require ('sequelize');
const dbName = "coustmer";
const dbUser = "root";
const dbPassword = "root12";

const sequelize = new Sequelize(dbName , dbUser , dbPassword ,{
    host : "localhost",
    Port : 3306 ,
    dialect : "mysql" 
})

const db = {}

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.coutomers = require('./customer.model')(sequelize,Sequelize);

module.exports = db;