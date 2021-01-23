import React, { Fragment, useContext} from 'react';
import { LoaderContext } from '../contexts/LoaderContext';
import Login from '../pages/user/auth/login';
//import {isAuthenticated, isAdmin} from './isAuthenticated';
import {UserContext} from './../contexts/UserContext';

const withAuth = (Component, role) => {
  const Auth = (props) => {
    const [user, setUser] = useContext(UserContext);
    const [loader, setLoader] = useContext(LoaderContext);
    // If user is not logged in, return login component

      if(!user){
        return (
          <Fragment>
            {loader ?
              <Fragment></Fragment>
            :
              <Login />
            }
          </Fragment>
        )
      }
      // if (!isAuthenticated) {

      // }

      if(role === 'admin' && user.role !== 'admin'){
        return (
          <Fragment>
            {loader ?
              <Fragment></Fragment>
            :
              <Login />
            }
          </Fragment>
        );
      }

      // If user is logged in, return original component
      return (
          <Fragment>
            {loader ?
              <Fragment></Fragment>
            :
              <Component {...props} />
            }
          </Fragment>
        
      );
  };

  // Copy getInitial props so it will run as well
  if (Component.getInitialProps) {
    Auth.getInitialProps = Component.getInitialProps;
  }

  return Auth;
};

export default withAuth;