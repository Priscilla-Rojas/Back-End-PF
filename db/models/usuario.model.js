const {Model, DataTypes, Sequelize} = require('sequelize')

const USUARIO_TABLE = 'usuarios';

const UsuarioSchema = {
  dni: {
    type: DataTypes.STRING,
    /*defaultValue: Sequelize.UUIDV4,*/
    allowNull: false,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  apellido: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  telefono:{
    type: DataTypes.INTEGER,
  },
  direccion:{
    type: DataTypes.STRING,
  },
  nombreUser:{
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    validate: {
      isEmail: true,
    }
  },
  tipo
  password: {
    allowNull: false,
    type: DataTypes.STRING
  },
  numeroDocumento:{
    type:DataTypes.INTEGER,
    allowNull:false
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  }
}

class Usuario extends Model {
  static associate() {
    // asociaciones
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: USUARIO_TABLE,
      modelName: 'Usuario',
      timestamps: false
    }
  }
}


module.exports = { USUARIO_TABLE, UsuarioSchema, Usuario }
