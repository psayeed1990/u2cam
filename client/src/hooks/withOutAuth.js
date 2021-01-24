import React, { Fragment, useContext} from 'react';
import { LoaderContext } from '../contexts/LoaderContext';
import Home from '../pages';

import {UserContext} from './../contexts/UserContext';

const withOutAuth = (Component) => {
  const Auth = (props) => {
    const [user, setUser] = useContext(UserContext);
    const [loader, setLoader] = useContext(LoaderContext);
    // If user is not logged in, return login component

      if(user){
        return (
          <Fragment>
            {loader ?
              <Fragment></Fragment>
            :
              <Home message="Already logged in" />
            }
          </Fragment>
        )
      }else{
      return (
            <Fragment>
              {loader ?
                <Fragment></Fragment>
              :
                <Component {...props} />
              }
            </Fragment>

        );
      }

  };

  // Copy getInitial props so it will run as well
  if (Component.getInitialProps) {
    Auth.getInitialProps = Component.getInitialProps;
  }

  return Auth;
};

export default withOutAuth;