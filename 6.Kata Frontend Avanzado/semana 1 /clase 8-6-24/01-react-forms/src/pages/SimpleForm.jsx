import { useState } from 'react'
import logo from '../assets/react.svg'

const SimpleForm = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();  // Prevent form from refreshing the page
    console.log("email", email)
    console.log("password", email)
  }

  return (
    <div className='login'>
      <div className='login-container'>
        <img src={logo} alt='logo' />

        <form onSubmit={handleSubmit}/* HANDLE SUBMIT */>
          <label htmlFor='email'>Email</label>
          <input
            type='text'
            name='email'
            placeholder='correo@mail.com'
            id='simple-email'
            onChange={(e) => { setEmail(e.target.value) }/* HANDLE INPUT */}
            value={email}

          />

          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            id='simple-password'
            onChange={(e) => { setPassword(e.target.value) }/* HANDLE INPUT */}
            value={password}
          />

          <button type='submit'>
            Iniciar Sesion
          </button>

        </form>
      </div>
    </div>
  )
}

export default SimpleForm