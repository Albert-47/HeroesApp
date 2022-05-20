import React, { useEffect, useReducer } from 'react';
import AppRouter from './routers/AppRouter';
import { AuthContext } from './auth/authContext';
import { authReducer } from './auth/authReducer';

const HeroesApp = () => {

  const init = () => {
    return JSON.parse( localStorage.getItem( 'user' ) ) || { logged: false };
  }

  const [ user, dispatch ] = useReducer( authReducer, {}, init );

  useEffect(() => {

    if( !user ) return ;
      
    localStorage.setItem( 'user', JSON.stringify( user ) );
  
  }, [ user ]);
  

  return (
    <div>
      <AuthContext.Provider value={{
        user,
        dispatch
      }}>
        <AppRouter />
      </AuthContext.Provider>
    </div>
  )
}

export default HeroesApp