# Back-End-PF

### Peticiones y Rutas de la API
---

## GET:  / habitaciones
- ### Entrega un array con ojetos cuya extructura varia segun el tipo de habirtacion.
- ### Si es una habitacion individual el objeto tendra la forma:
```javascript
    {
		"id": 1, 
		"nombre": "Imperio",
		"comodidades": "Aire acondicionado, smart Tv, Frigobar",
		"cantCamas": 5,
		"privada": true,
		"bañoPrivado": false,
		"createdAt": "2022-04-12T19:48:18.730Z" 
	}
```
- ### Si es una habitacion compartida el objeto tendra la forma:
```javascript
  {
      "id": 2,
      "nombre": "galaxia",
      "comodidades": "Aire acondicionado, smart Tv, Frigobar",
      "cantCamas": 2,
      "privada": false,
      "bañoPrivado": false,
      "createdAt": "2022-04-12T19:48:21.090Z",
      "Camas": [
        {
        "id": "d2a265c5-f5df-4358-96c0-7221192792bf",
          "precio": 1500,
          "estado": "libre",
          "HabitacionId": 2,
          "HuespedId": null,
          "ReservaId": null
        },
        {
          "id": "3349dda6-40eb-4047-bf8f-b75eb20ad6a9",
          "precio": 1500,
          "estado": "libre",
          "HabitacionId": 2,
          "HuespedId": null,
          "ReservaId": null
        }
      ]
    }
```
---
## GET:  / habitaciones /:idHabitacion
- ### Entrega un objeto con los datos de la habitacion.
```javascript
{
	"id": 2,
	"nombre": "galaxia",
	"comodidades": "Aire acondicionado, smart Tv, Frigobar",
	"cantCamas": 2,
	"privada": false,
	"bañoPrivado": false,
	"createdAt": "2022-04-12T19:48:21.090Z",
	"Camas": [
		{
			"id": "d2a265c5-f5df-4358-96c0-7221192792bf",
			"precio": 1500,
			"estado": "libre",
			"HabitacionId": 2,
			"HuespedId": null,
			"ReservaId": null
		},
		{
			"id": "3349dda6-40eb-4047-bf8f-b75eb20ad6a9",
			"precio": 1500,
			"estado": "libre",
			"HabitacionId": 2,
			"HuespedId": null,
			"ReservaId": null
		}
	]
}
```
- ### En caso de una Habitacion privada omite la pripiedad camas.
---
## POST:  / habitaciones /
- ### Recibe por body todos los datos necesrios para crear una habitacion.
```javascript
{
	"nombre": "Lunar",
  "comodidades": "Aire acondicionado, smart Tv, Frigobar",
  "cantCamas": 5,
  "privada": false,
  "bañoPrivado": false,
  "preciosCamas": [1500, 1500, 1500, 1200, 1000]
}
```
- ### Devuelve la Habitación creada.
---
