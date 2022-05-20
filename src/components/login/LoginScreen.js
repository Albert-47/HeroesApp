import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';
import { useForm } from '../../Hooks/useForm';
import { types } from '../../types/types';

const LoginScreen = () => {

  const [ values, setValues ] = useForm({
    name: ''
  });

  const { name } = values;

  const { dispatch } = useContext( AuthContext );

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const action = {
      type: types.login,
      payload: {
        name: name
      }
    }

    dispatch( action );


    navigate( localStorage.getItem( 'lastPath' ), { replace: true });
  }

  return (
    <div className='container mt-5'>
        <h1>LoginScreen</h1>
        <hr />

          <form onSubmit={handleLogin} className='form' >
            <label className='form-label'>Name:</label>
            <input 
              type="text"
              name='name'
               className='form-control mb-1'
               value={ name }
               onChange={ setValues } />
            <button className='btn btn-primary'>
              Login
            </button>
          </form>


    </div>
  )
}

export default LoginScreen