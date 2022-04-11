const boom = require('@hapi/boom');

const { Cama } = require('../db/models/cama.model');
const { Habitacion } = require('../db/models/habitacion.model');

class habitacionesService {

  async crear(data) {
    console.log('Creando Habitacion');

    const habitacion = await Habitacion.create({
      nombre: data.nombre,
      comodidades: data.comodidades,
      tipoHabitacion: data.tipoHabitacion,
      cantCamas: data.cantCamas,
      precio: data.precio
    })
      for (let i = 0; i < data.cantCamas; i++) {
        Cama.create()
        .then((cama)=>{
          habitacion.setCamas(cama)
        })
      }
      return habitacion
  }

  async buscar() {
    const habitacion = await Habitacion.findAll();
    return habitacion;
  }

  async buscaruno(id) {
    const habitacion = Habitacion.findByPk(id);
    if (!habitacion) {
      throw boom.notFound('no se encontro la habitacion')
    }
    return habitacion;
  }

  async actualizar(id, cambios) {
    const {nombre, cantCamas, comodidades, tipoHabitacion} = cambios;
    const habitacionUpdate = await Habitacion.update({ 
      nombre: nombre,
      cantCamas: cantCamas,
      comodidades: comodidades,
      tipoHabitacion: tipoHabitacion
     }, 
      { where : { id : id }} 
    )

    if(!habitacionUpdate) {
      throw boom.notFound('habitacion no encontrada');
    }
    return habitacionUpdate;

  }

  async borrar(id) {
    const habitacionDelete = Habitacion.destroy({where: { id: id}})

    if(!habitacionDelete) {
      throw boom.notFound('habitacion no encontrada');
    }
    return `Habitacion con id: ${id} fue borrada con exito`;
  }

}

module.exports = habitacionesService
