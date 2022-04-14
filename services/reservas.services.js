const { sequelize } = require('../libs/sequelize')
const { ReservaCama } = require('../db/models/reservaCama.model')
const { Usuario } = require('../db/models/usuario.model')
const { Cama } = require('../db/models/cama.model')
const { Habitacion } = require('../db/models/habitacion.model')

class ReservaService {

    async mostrarReservasByFecha(ingreso, egreso){
        
        const reservas =  await ReservaCama.findAll(
            {
                include: [
                    {
                        model: Habitacion,
                    },
                    {
                        model: Cama
                    }
                ]
            })
        const reservasFiltradas = reservas.filter(r => 
            (r.fecha_ingreso >= ingreso && r.fecha_ingreso <= egreso)
            ||
            (
                (r.fecha_ingreso < ingreso && r.fecha_egreso >= ingreso && r.fecha_egreso <= egreso)
                || 
                (r.fecha_egreso > egreso && r.fecha_ingreso > ingreso && r.fecha_ingreso <= egreso))
            )
        return reservasFiltradas
    }

    async mostrar(){
        const reservas = await ReservaCama.findAll({
            include: 
            [{
                model: Habitacion
            },
            {
                model: Cama
            }
            ]
        })
        return reservas
    }   

    

    async crearReserva(idUser, data){
        const newReserva = await ReservaCama.create({
            fecha_ingreso: data.fecha_ingreso,
            fecha_egreso: data.fecha_egreso,
            saldo: data.saldo
        })
        if(data.camas){
            for (let i = 0; i < data.camas.length; i++) {
                Cama.findByPk(data.camas[i])
                .then(cama => {
                    newReserva.addCama(cama)
                })
            }
        }
        if(data.habitaciones){
            for (let i = 0; i < data.habitaciones.length; i++) {
                Habitacion.findByPk(data.habitaciones[i])
                .then(habitacion =>{
                    newReserva.addHabitacion(habitacion)
                })
            }
        }
        Usuario.findByPk(idUser)
        .then(user =>{
            newReserva.setUsuario(user)
        })
        return newReserva
    }

    // async cargarHuespedes(data, id_reserva){
    //     const reserva = await ReservaCama.findOne({
    //         where: {
    //             id: id_reserva
    //         },
    //         include: Cama
    //     })
    //     for (let i = 0; i < reserva.Camas.length; i++) {
    //         Cama.findByPk(reserva.Camas[i].id)
    //         .then( async (cama) =>{
    //             const findUser = await Usuario.findOne({where: { id: data[i].dni}})
    //             if(!findUser){
    //                 const userCreated = await Usuario.create({
    //                     ...data,
    //                     tipoUsuario: 'huesped'
    //                 })
    //                 cama.setUsuario(userCreated)
    //             }
    //             cama.setUsuario(findUser)
    //         })
    //     }
    //     return 'Huespedes Cargados'
    // }

    async eliminarReserva(){

    }
    async actualizarReserva(){

    }
}

module.exports = ReservaService;