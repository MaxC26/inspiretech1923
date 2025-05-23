import { Field, Form, Formik } from 'formik'
import { validarContacto } from '../../utils/formValidation'
import { useState } from 'react'

const ContactoForm = () => {
  const validation = validarContacto()
  const [tipoContacto, setTipoContacto] = useState('1')
  //NOTE - 1 = Telefono, 2 = Correo

  const onSubmitForm = async (values) => {
    try {
      const response = await new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            status: 200,
            data: values,
          })
        }, 1000)
      })
      console.log('🚀 ~ response ~ response:', response)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className='card card-lg w-full  shadow-xl bg-gray-900 border-teal-500/20'>
      <div className='card-body'>
        <p className='text-center mb-5 text-white font-semibold'>
          ¿Quieres que te ayudemos? Completa el formulario y nos pondremos en contacto
          contigo.
        </p>

        <Formik
          initialValues={{
            nombreEmpresa: '',
            nombreContacto: '',
            telefonoEmpresa: '',
            correoEmpresa: '',
          }}
          validateOnChange={false}
          validateOnBlur={false}
          onSubmit={onSubmitForm}
        >
          {({ handleSubmit, errors, isSubmitting, setFieldValue }) => (
            <Form onSubmit={handleSubmit}>
              <fieldset className='fieldset'>
                <legend className='fieldset-legend text-white text-sm'>
                  Nombre Empresa
                </legend>
                <Field
                  type='text'
                  name='nombreEmpresa'
                  className={`input focus:outline-teal-500 w-full ${
                    errors.nombreEmpresa && 'input-error'
                  }`}
                  placeholder='Nombre de tu empresa'
                  validate={validation.nombreEmpresa}
                />
                {errors.nombreEmpresa && (
                  <div className='fieldset-label text-red-400'>
                    {'*' + errors.nombreEmpresa}
                  </div>
                )}
              </fieldset>

              <fieldset className='fieldset'>
                <legend className='fieldset-legend text-white text-sm'>
                  Nombre Contacto
                </legend>
                <Field
                  type='text'
                  name='nombreContacto'
                  className={`input w-full focus:outline-teal-500 ${
                    errors.nombreContacto && 'input-error'
                  }`}
                  placeholder='Nombre'
                  validate={validation.nombreContacto}
                />
                {errors.nombreContacto && (
                  <div className='fieldset-label text-red-400'>
                    {'*' + errors.nombreContacto}
                  </div>
                )}
              </fieldset>

              <div className='fieldset mb-4'>
                <legend className='fieldset-legend text-white text-sm'>
                  Contacto Empresa
                </legend>
                <label className='label'>
                  <Field
                    as='select'
                    defaultValue='1'
                    name='tipoContacto'
                    onChange={(e) => {
                      setTipoContacto(e.target.value)
                      setFieldValue('telefonoEmpresa', '')
                      setFieldValue('correoEmpresa', '')
                      setFieldValue('tipoContacto', e.target.value)
                    }}
                    className={`select w-40 focus:outline-teal-500`}
                    validate={validation.tipoContacto}
                  >
                    <option value={'1'}>Teléfono</option>
                    <option value={'2'}>Correo</option>
                  </Field>
                  {tipoContacto === '1' ? (
                    <Field
                      type='tel'
                      name='telefonoEmpresa'
                      className={`input w-full focus:outline-teal-500 ${
                        errors.telefonoEmpresa && 'input-error'
                      }`}
                      placeholder='Teléfono de tu empresa'
                      inputMode='numeric'
                      maxLength={8}
                      validate={validation.telefonoEmpresa}
                    />
                  ) : (
                    <Field
                      type='text'
                      name='correoEmpresa'
                      className={`input w-full focus:outline-teal-500 ${
                        errors.correoEmpresa && 'input-error'
                      }`}
                      placeholder='Correo de tu empresa'
                      validate={validation.correoEmpresa}
                    />
                  )}
                </label>
                {errors.telefonoEmpresa && (
                  <div className='text-red-400'>{'*' + errors.telefonoEmpresa}</div>
                )}
                {errors.correoEmpresa && (
                  <div className='text-red-400'>{'*' + errors.correoEmpresa}</div>
                )}
              </div>

              <button
                type='submit'
                className='btn bg-teal-600 hover:bg-teal-700 text-white border-teal-600 w-full shadow-none'
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className='loading loading-spinner loading-sm'></span>
                ) : (
                  'Enviar información'
                )}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default ContactoForm
