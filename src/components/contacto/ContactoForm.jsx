import { Field, Form, Formik } from 'formik'
import { validarContacto } from '../../utils/formValidation'

const ContactoForm = () => {
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
    <div className='card w-full  shadow-xl bg-gray-900 border-teal-500/20'>
      <div className='card-body'>
        <p className='text-center mb-5 text-white'>
          ¿Quieres que te ayudemos? Completa el formulario y nos pondremos en contacto
          contigo.
        </p>

        <Formik
          initialValues={{
            nombreEmpresa: '',
            nombreContacto: '',
            telefonoEmpresa: '',
            correoEmpresa: '',
            sectorEmpresa: '',
            mensaje: '',
          }}
          validateOnChange={false}
          validateOnBlur={false}
          onSubmit={onSubmitForm}
          validationSchema={validarContacto}
        >
          {({ handleSubmit, errors, isSubmitting }) => (
            <Form onSubmit={handleSubmit}>
              <fieldset className='fieldset'>
                <legend className='fieldset-legend text-white'>Nombre Empresa</legend>
                <Field
                  type='text'
                  name='nombreEmpresa'
                  className={`input focus:outline-teal-500 w-full ${
                    errors.nombreEmpresa && 'input-error'
                  }`}
                  placeholder='Nombre de tu empresa'
                />
                {errors.nombreEmpresa && (
                  <div className='fieldset-label text-red-400'>
                    {'*' + errors.nombreEmpresa}
                  </div>
                )}
              </fieldset>

              <fieldset className='fieldset'>
                <legend className='fieldset-legend text-white'>Nombre Contacto</legend>
                <Field
                  type='text'
                  name='nombreContacto'
                  className={`input w-full focus:outline-teal-500 ${
                    errors.nombreContacto && 'input-error'
                  }`}
                  placeholder='Nombre'
                />
                {errors.nombreContacto && (
                  <div className='fieldset-label text-red-400'>
                    {'*' + errors.nombreContacto}
                  </div>
                )}
              </fieldset>

              <div className='fieldset'>
                <legend className='fieldset-legend text-white'>Teléfono Empresa</legend>
                <Field
                  type='tel'
                  name='telefonoEmpresa'
                  className={`input w-full focus:outline-teal-500 ${
                    errors.telefonoEmpresa && 'input-error'
                  }`}
                  placeholder='Teléfono de tu empresa'
                  inputMode='numeric'
                  maxLength={8}
                />
                {errors.telefonoEmpresa && (
                  <div className='text-red-400'>{'*' + errors.telefonoEmpresa}</div>
                )}
              </div>

              <div className='fieldset'>
                <legend className='fieldset-legend text-white'>Correo Empresa</legend>
                <Field
                  type='text'
                  name='correoEmpresa'
                  className={`input w-full focus:outline-teal-500 ${
                    errors.correoEmpresa && 'input-error'
                  }`}
                  placeholder='Correo de tu empresa'
                />
                {errors.correoEmpresa && (
                  <div className='text-red-400'>{'*' + errors.correoEmpresa}</div>
                )}
              </div>

              <div className='fieldset'>
                <legend className='fieldset-legend text-white'>Sector Empresa</legend>
                <Field
                  type='text'
                  name='sectorEmpresa'
                  className={`input w-full focus:outline-teal-500 ${
                    errors.sectorEmpresa && 'input-error'
                  }`}
                  placeholder='Sector de tu empresa'
                />
                {errors.sectorEmpresa && (
                  <div className='text-red-400'>{'*' + errors.sectorEmpresa}</div>
                )}
              </div>

              <div className='fieldset mb-4'>
                <legend className='fieldset-legend text-white'>Comentarios</legend>
                <Field
                  as='textarea'
                  className={`textarea w-full focus:outline-teal-500 ${
                    errors.mensaje && 'input-error'
                  }`}
                  name='mensaje'
                  placeholder='Cuéntanos lo que buscas'
                />
                {errors.mensaje && (
                  <div className='text-red-400'>{'*' + errors.mensaje}</div>
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
