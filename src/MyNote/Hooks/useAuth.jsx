import React from 'react'
import { getUserLogged, putAccessToken} from '../Utils/network-data';

function useAuth() {
    const [authedUser, setAuthedUser] = React.useState(null);
    const [initializing, setInitializing] = React.useState(true);
  
    const onLoginSuccess = async ({ accessToken }) => {
      putAccessToken(accessToken);
      const { data } = await getUserLogged();
      setAuthedUser(data);
    };
  
    const onLogout = () => {
      setAuthedUser(null);
      putAccessToken("");
    };
  
    React.useEffect(() => {
      const fetchLoggedUser = async () => {
        const { data } = await getUserLogged();
        setAuthedUser(data);
        setInitializing(false);
      };
  
      fetchLoggedUser();
    }, []);
  
    return {
      authedUser,
      initializing,
      onLoginSuccess,
      onLogout,
    };
  }

  export default useAuth;