
import { Link } from 'react-router-dom';
const Login = () => {

  return (

    <div>
        <div className="input-group">
          <button className='submit-button' type='submit'>
            Login
          </button>
        </div>
        <div className="links">
          <p>Yet to join our circle? Begin here:
              <Link to="/signup"> Sign Up</Link>
          </p>
        </div>
      
    </div>
    
  );
}
export default Login;