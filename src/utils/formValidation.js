import * as Yup from 'yup'

export const validarContacto = Yup.object().shape({
  nombreEmpresa: Yup.string().required('Campo requerido'),
  nombreContacto: Yup.string().required('Campo requerido'),
  telefonoEmpresa: Yup.string()
    .required('Campo requerido')
    .matches(/^\d+$/, 'Solo números')
    .min(8, 'Debe escribir 8 caracteres'),
  // correoEmpresa: Yup.string().required('Campo requerido'),
  // sectorEmpresa: Yup.string().required('Campo requerido'),
  // mensaje: Yup.string().required('Campo requerido'),
})
