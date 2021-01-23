import React, {createContext, useState, useContext, useEffect} from 'react';
import { LoaderContext } from './LoaderContext';
import Axios from 'axios';

export const UserContext = createContext();

export const UserProvider = (props)=>{
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useContext(LoaderContext);
    
    useEffect(() => {

        const fetchData = async ()=>{
            try{
                setLoader(true);
                const token = localStorage.getItem("token");
                 
                if(token){
                   
                    const data = await Axios.post('/api/v1/users/authenticate', {token});
                    setUser(data.data);
                    
                    setLoader(false);
                    
                }
                
            }catch(err){
                console.log(err)
                setUser(null);
                setLoader(false);
                
            }
        }
        
        fetchData();
    }, []);



    return(
        <UserContext.Provider value={[user, setUser]}>
            {props.children}
        </UserContext.Provider>
    )
}