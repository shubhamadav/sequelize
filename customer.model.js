const {sequelize , Sequelize} = require("./db.config")

module.exports = (sequelize , Sequelize )=>{
    const coustmers = sequelize.define('customer',{
          name:{
              type:Sequelize.STRING
          },
          email:{
            type:Sequelize.STRING,
            primaryKey: true
          },
          Password:{
            type:Sequelize.INTEGER
          }
    });

    return coustmers ;
}