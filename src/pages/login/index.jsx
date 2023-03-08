import { useRef, useState } from 'react'
import { exportImg } from '../../utils/exportImg'
// import { USERS } from '../../utils/users'
// import { useNavigate } from 'react-router-dom'
import Image from 'next/image'
import Link from 'next/link'

export default function Login () {
  const [error, setError] = useState(false)
  const form = useRef(null)
  // const navigate = useNavigate()

  const validateUser = (e) => {
    // e.preventDefault()
    console.log('hola')

    // const dataForm = new FormData(form.current)

    // const data = {
    //   username: dataForm.get('email'),
    //   password: dataForm.get('password')
    // }

    // const isValidate = USERS.some(
    //   (user) =>
    //     user.username === data.username && user.password === data.password
    // )

    // isValidate ? navigate('/') : setError(true)
  }

  setTimeout(() => {
    setError(false)
  }, 3000)

  return (
    <>
      {error && <h1>Usuario Invalido</h1>}
      <div className='login'>
        <div className='form-container'>
          <Image src={exportImg('lYS')} alt='logo' className='logo' />

          <form action='/' className='form' onSubmit={validateUser} ref={form}>
            <label htmlFor='email' className='label'>
              Email address
            </label>
            <input
              type='text'
              name='email'
              placeholder='platzi@example.cm'
              className='input input-email'
            />

            <label htmlFor='password' className='label'>
              Password
            </label>
            <input
              type='password'
              name='password'
              placeholder='*********'
              className='input input-password'
            />

            <input
              type='submit'
              value='Log in'
              className='primary-button login-button'
            />
            <Link href='/'>Forgot my password</Link>
          </form>

          <button className='secondary-button signup-button'>Sign up</button>
        </div>
      </div>
    </>
  )
}
