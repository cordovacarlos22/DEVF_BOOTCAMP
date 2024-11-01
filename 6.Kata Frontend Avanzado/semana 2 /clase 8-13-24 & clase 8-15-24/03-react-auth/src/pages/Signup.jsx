import { useForm } from 'react-hook-form'
import logo from '../assets/react.svg'
import '../styles/form.css'
import { registerUserService} from '../services/userService'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  // usamos en hook navgate para navegar hacia el login 

  // Usamos el hook navigate para navegar hacia login
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    try {
      const response = await registerUserService(data)
      if (response.status === 201) {
        console.log('User created successfully')
        navigate('/login')
      }
    } catch (error) {
      console.error('Ocurrio un error al registrar el usuario', error.message)
    }
  }


  return (
    <main className='form-signin w-100 m-auto'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <img className='mb-4' src={logo} alt='' width='72' height='57' />
        <h1 className='h3 mb-3 fw-normal'>Please sign up</h1>

        <div className='form-floating'>
          <input
            type='text'
            className='form-control'
            id='first_name'
            name='first_name'
            placeholder='John'
            {...register('first_name', { required: true })}
          />
          <label htmlFor='first_name'>First Name</label>
        </div>
        {errors.first_name && <span>This field is required</span>}

        <div className='form-floating'>
          <input
            type='text'
            className='form-control'
            id='last_name'
            name='last_name'
            placeholder='Doe'
            {...register('last_name', { required: true })}
          />
          <label htmlFor='last_name'>Last Name</label>
        </div>

        <div className='form-floating'>
          <select
            className='form-select'
            id='gender'
            name='gender'
            {...register('gender', { required: true })}
          >
            <option value=''>Choose...</option>
            <option value='M'>Male</option>
            <option value='F'>Female</option>
          </select>
          <label htmlFor='gender'>Gender</label>
        </div>

        <div className='form-floating'>
          <input
            type='email'
            className='form-control'
            id='email'
            name='email'
            placeholder='name@example.com'
            {...register('email', { required: true })}
          />
          <label htmlFor='email'>Email address</label>
        </div>
        {errors.email && <span>This field is required</span>}

        <div className='form-floating'>
          <input
            type='password'
            className='form-control'
            id='password'
            name='password'
            placeholder='Password'
            {...register('password', { required: true })}
          />
          <label htmlFor='password'>Password</label>
        </div>
        {errors.password && <span>This field is required</span>}

        <button className='w-100 btn btn-lg btn-primary' type='submit'>Sign up</button>
        <p className='mt-5 mb-3 text-muted'>© 2017–2024</p>
      </form>
    </main>
  )
}
export default Signup