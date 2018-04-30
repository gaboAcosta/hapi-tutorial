
module.exports = (sequelize, DataTypes) => {
  const name = 'sample'

  const schema = {
    name: DataTypes.STRING,
  }

  const options = {
    timestamps: true,
    paranoid: true,
  }

  const model = sequelize.define(name, schema, options)

  model.associate = (models) => {
    //If there was an association, you would set it here
    //http://docs.sequelizejs.com/manual/tutorial/associations.html
  }

  return model
}
