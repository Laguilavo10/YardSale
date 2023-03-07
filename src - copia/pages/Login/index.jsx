import { useEffect, useRef, useState } from "react"
import "../../styles/Login.css"
import { exportImg } from "../../utils/exportImg"
import { USERS } from "../../utils/users"
import { useNavigate } from "react-router-dom"

export function Login() {
  
  const [error, setError] = useState(false)
  const form = useRef(null)
  let navigate = useNavigate()

  const validateUser = (e) => {
    e.preventDefault()
    let dataForm = new FormData(form.current)
    
    let data = {
      username: dataForm.get('email'),
      password: dataForm.get('password')
    }

    let isValidate = USERS.some(
      (user) => user.username === data.username && user.password === data.password
    )

    isValidate ? navigate("/") : setError(true)
  }

  setTimeout(() => {
    setError(false)
  }, 3000)
  const a = ()=>{
    
  }
  
  return (
    <>  
      {error && <h1>Usuario Invalido</h1>}
      <div className="login">
        <div className="form-container">
          <img src={exportImg("l_YS")} alt="logo" className="logo" />

          <form action="/" className="form" onSubmit={validateUser} ref={form}>
            <label htmlFor="email" className="label">
              Email address
            </label>
            <input
              type="text"
              name="email"
              placeholder="platzi@example.cm"
              className="input input-email"
            />

            <label htmlFor="password" className="label">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="*********"
              className="input input-password"
            />

            <input
              type="submit"
              value="Log in"
              className="primary-button login-button"
            />
            <a href="/">Forgot my password</a>
          </form>

          <button className="secondary-button signup-button">Sign up</button>
        </div>
      </div>
    </>
  )
}
