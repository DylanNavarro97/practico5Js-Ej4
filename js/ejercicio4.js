const fecha = document.querySelector('.fecha')
const hora = document.querySelector('.hora')
const minutos = document.querySelector('.minutos')
const segundos = document.querySelector('.segundos')
const amPm = document.querySelector('.amPm')
console.log(amPm)

let fechaParaActualizar = new Date()
const numeroDeDiaJs = fechaParaActualizar.getDay()
const numeroDeMesJs = fechaParaActualizar.getMonth()
let dia = ''
let mes = ''

function obtenerDia (numeroDelDia){
    switch (numeroDeDiaJs) {
        case 0:
            dia = 'Domingo'
            break
        case 1: 
            dia = 'Lunes'
            break
        case 2: 
            dia = 'Martes'
            break
        case 3: 
            dia = 'Miércoles'
            break
        case 4: 
            dia = 'Jueves'
            break
        case 5: 
            dia = 'Viernes'
            break
        case 6:
            dia = 'Sábado'
    }
}

function obtenerMes (numeroDelMes){
    switch (numeroDelMes){
        case 0:
            mes = 'Enero'
            break
        case 1:
            mes = 'Febrero'
            break
        case 2:
            mes = 'Marzo'
            break
        case 3:
            mes = 'Abril'
            break
        case 4:
            mes = 'Mayo'
            break
        case 5:
            mes = 'Junio'
            break
        case 6:
            mes = 'Julio'
            break
        case 7:
            mes = 'Agosto'
            break
        case 8:
            mes = 'Septiembre'
            break
        case 9:
            mes = 'Octubre'
            break
        case 10:
            mes = 'Noviembre'
            break
        case 11:
            mes = 'Diciembre'
            break
    }
}

function actualizarFecha (){
    const fechaActual = new Date()

    if (fechaParaActualizar !== fechaActual){
        if (fechaActual.getHours() < 10){
            hora.innerHTML = `0${fechaActual.getHours()} :`
        } else {
            hora.innerHTML = `${fechaActual.getHours()} :`
        }

        if (fechaActual.getMinutes() < 10){
            minutos.innerHTML = `0${fechaActual.getMinutes()} :`
        } else {
            minutos.innerHTML = `${fechaActual.getMinutes()} :`
        }

        if (fechaActual.getSeconds() < 10){
            segundos.innerHTML = `0${fechaActual.getSeconds()}`
        } else {
            segundos.innerHTML = `${fechaActual.getSeconds()}`
        }


        fecha.innerHTML = `${dia} ${fechaActual.getDate()} de ${mes} del ${fechaActual.getFullYear()}`
    }

    if (fechaActual.getHours() < 12){
        amPm.innerHTML = 'AM'
    } else {
        amPm.innerHTML = 'PM'
    }

}

// Inicializo los valores iniciales al momento de cargar la página

obtenerDia(numeroDeDiaJs)
obtenerMes(numeroDeMesJs)

fecha.innerHTML = `${dia} ${fechaParaActualizar.getDate()} de ${mes} del ${fechaParaActualizar.getFullYear()}`

if (fechaParaActualizar.getHours() < 12){
    amPm.innerHTML = 'AM'
} else {
    amPm.innerHTML = 'PM'
}

if (fechaParaActualizar.getHours() < 10){
    hora.innerHTML = `0${fechaParaActualizar.getHours()} :`
} else {
    hora.innerHTML = `${fechaParaActualizar.getHours()} :`
}

if (fechaParaActualizar.getMinutes() < 10){
    minutos.innerHTML = `0${fechaParaActualizar.getMinutes()} :`
} else {
    minutos.innerHTML = `${fechaParaActualizar.getMinutes()} :`
}

if (fechaParaActualizar.getSeconds() < 10){
    segundos.innerHTML = `0${fechaParaActualizar.getSeconds()}`
} else {
    segundos.innerHTML = `${fechaParaActualizar.getSeconds()}`
}

// Mantengo la fecha actualizada con el intervalo
const intervalo = setInterval(actualizarFecha, 1000)
