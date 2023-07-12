import './register.scss'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <div className='register'>
      <div className="card">
        <div className="left">
          <h1>Social Sharing</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dicta neque explicabo labore exercitationem nam dolorum maxime pariatur incidunt quasi?</p>
          <span>Do you have an account?</span>
          <Link to="/login" ><button>Login</button></Link>
          
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder='Username' />
            <input type="text" placeholder='Name' />
            <input type="email" placeholder='email' />
            <input type="password" placeholder='password' />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register