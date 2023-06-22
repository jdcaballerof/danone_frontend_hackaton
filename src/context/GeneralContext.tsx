import React, { createContext, useContext } from 'react';

// Definir el tipo de dato para el contexto
interface GeneralContextData {
  user: {username:string, passwd:string, cal: number};
  login: (username:string, passwd:string) => boolean;
  logout: () => void;
  deleteUsers: () => boolean;
  setCal: (cal: number) => void;
}

interface Props {
    children: JSX.Element | JSX.Element[] 
}

// Crear el contexto
const GeneralContext = createContext<GeneralContextData | undefined>(undefined);



// Crear el proveedor del contexto
export const GeneralContextProvider: React.FC<Props> = ({ children }) => {

  const [user, setUser] = React.useState({
        username: '', 
        passwd: '',
        cal: 0
    });


  const login = (username:string, passwd:string) => {
    let isLoging = false
    const users = localStorage.getItem('users')
    const users_db = !!users ? JSON.parse(users) : [];  

    if(users_db.includes(username)){
        const userData = localStorage.getItem(username)
        setUser( JSON.parse(userData!) )
        isLoging = true
    }
    else {
        //login new user
        const data = JSON.stringify({username, passwd})
        const addUser = [...users_db, username]
        localStorage.setItem('users', JSON.stringify(addUser) )
        localStorage.setItem(username, data)
        setUser( u => ({...u, username, passwd}) )
        isLoging = true
    }
    return isLoging
  }

  const logout = () => {
    setUser({username: '', passwd: '',cal: 0 })
  }

  const deleteUsers = () => {
    const users = localStorage.getItem('users')
    const users_db = !!users ? JSON.parse(users) : []; 
    users_db.forEach((username:string) => {
        console.log('removing', username)
        localStorage.removeItem(username);
    });
    localStorage.removeItem('users');
    return true
  }

  const setCal = (cal: number) => {
    localStorage.setItem(user.username, JSON.stringify({...user, cal }) )
    setUser( u => ({...u, cal }))
    console.log('Calories setted at', cal)
  }


  // Proporcionar el valor del contexto a través del componente Provider
  return (
    <GeneralContext.Provider value={{ 
            user,
            login,
            logout,
            deleteUsers,
            setCal,
        }}>
      {children}
    </GeneralContext.Provider>
  );
};


export const useGeneralContext = () => {
    const context = useContext(GeneralContext);
    if (!context) {
      throw new Error('useGeneralContext must be used within a GeneralContextProvider');
    }
    return context;
  };
