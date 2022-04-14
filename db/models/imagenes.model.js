const {Model, DataTypes, Sequelize} = require('sequelize')

const IMAGENES_TABLE = 'imagenes';

const ImagenesSchema = {
  id:{
    type:DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
    validate:{
        isUrl:true
    }
  }
}

class Imagenes extends Model {
  static associate() {
    // asociaciones
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: IMAGENES_TABLE,
      modelName: 'Imagenes',
      timestamps: false
    }
  }
}


module.exports = { IMAGENES_TABLE, ImagenesSchema, Imagenes }
