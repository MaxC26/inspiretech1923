// function noValidation() {
//   return
// }

function required(value) {
  let error
  if (!value) {
    error = 'Campo requerido'
  }
  return error
}

function onlyNumbers(value) {
  let error
  const regex = /^[0-9]+$/
  if (value && !regex.test(value)) {
    error = 'Ingrese solo números'
  }
  return error
}

function validmail(value) {
  let error
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (value && !regex.test(value)) {
    error = 'Ingrese un correo válido'
  }
  return error
}

function campoLength(value, length) {
  let error
  value = value.toString()
  if (value && value.length !== length) {
    error = `Debe tener ${length} caracteres`
  }
  return error
}

export const validarContacto = () => {
  return {
    nombreEmpresa: (value) => {
      return required(value)
    },
    nombreContacto: (value) => {
      return required(value)
    },
    tipoContacto: (value) => {
      return required(value)
    },
    telefonoEmpresa: (value) => {
      return required(value) || onlyNumbers(value) || campoLength(value, 8)
    },
    correoEmpresa: (value) => {
      return required(value) || validmail(value)
    },
  }
}
