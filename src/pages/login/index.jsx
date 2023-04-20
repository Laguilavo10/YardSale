/* eslint-disable camelcase */
import { useRef } from 'react'
import { exportImg } from '../../utils/exportImg'
import endPoints from '../../services/API'
import Image from 'next/image'
import Link from 'next/link'
import { useAuthUser } from '@context/authUser'
import axios from 'axios'
import { useRouter } from 'next/router'
import cookie from 'js-cookie'
import { toast } from 'react-hot-toast'

export default function Login() {
  const router = useRouter()
  const form = useRef(null)
  const { setIsAuth } = useAuthUser()
  const validateUser = async (evt) => {
    evt.preventDefault()
    try {
      const dataForm = new FormData(form.current)

      const credentials = {
        email: dataForm.get('email'),
        password: dataForm.get('password')
      }
      if (!credentials.email || !credentials.password) {
        return
      }
      const { data } = await axios.post(endPoints.auth.login, credentials)
      const { access_token } = data
      if (access_token) {
        const options = {
          expires: 1
        }
        cookie.set('CookieAccess', access_token, options)
        axios.defaults.headers.Authorization = `Bearer ${access_token}`
        const { data: user } = await axios.get(
          'https://api.escuelajs.co/api/v1/auth/profile'
        )
        setIsAuth(user)
        router.push('/')
      }
    } catch (error) {
      const opts = {
        position: 'bottom-right',
        style: {
          border: '1px solid #ff4b4b'
        }
      }
      toast.error('Email y/o contraseña incorrectas', opts)
    }
  }

  return (
    <>
      <div className='login'>
        <div className='form-container'>
          <Image src={exportImg('lYS')} alt='logo' className='logo' />

          <form className='form' onSubmit={validateUser} ref={form}>
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
