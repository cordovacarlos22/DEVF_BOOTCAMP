import { useForm } from "react-hook-form"
import logo from '../assets/react.svg'

const ReactHookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data);

  return (
    <div className='login'>
      <div className='login-container'>
        <img src={logo} alt='logo' />
        <form
          onSubmit={handleSubmit(onSubmit) /* HANDLE SUBMIT */}
          style={{ display: 'flex', flexDirection: 'column' }}
        >

          <label htmlFor='firstName'>Nombre</label>
          <input
            type='text'
            name='firstName'
            placeholder='Tu Nombre'
            id='firstName'
            {...register('firstName', { required: true})}
          />
          {errors.firstName && <span>This field is required</span>}
          <label htmlFor='lastName'>Apellido</label>
          <input
            type='text'
            name='lastName'
            placeholder='Tu Apellido'
            id='lastName'
            {...register('lastName', { required: true })}
          />
          {errors.lastName && <span>This field is required</span>}
          <label htmlFor='age'>Edad</label>
          <input
            type='number'
            name='age'
            placeholder='Tu Edad'
            id='age'
            {...register('age', { required: true })}
          />
          {errors.age && <span>This field is required</span>}

          <label htmlFor='gender'>Genero</label>
          <select
            name='gender'
            id='gender'
            {...register('gender', { required: true })}
          >
            <option value=''>Elige un genero</option>
            <option value='M'>Masculino</option>
            <option value='F'>Femenino</option>
            <option value='O'>Otro</option>
          </select>
          {errors.gender && <span>This field is required</span>}
          <label htmlFor='email'>Email</label>
          <input
            type='text'
            name='email'
            placeholder='correo@mail.com'
            id='email'
            {...register('email', { required: true })}
          />
          {errors.email && <span>This field is required</span>}
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            id='password'
            {...register('password', { required: true })}
          />

          {/* errors will return when field validation fails  */}
          {errors.password && <span>This field is required</span>}

          <button type='submit'>
            Iniciar Sesion
          </button>
        </form>
      </div>
    </div>
  )
}

export default ReactHookForm