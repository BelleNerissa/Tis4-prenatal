import { createContext, useContext, useState, ReactNode } from "react";
import { IResponseLogin } from "../@types/login.response";

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextData {
  userDataLogin: IResponseLogin;
  setUserDataLogin: (userDataLogin: IResponseLogin) => void;
  isAuth: boolean;
  setIsAuth: (isAuth: boolean) => void;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [userDataLogin, setUserDataLogin] = useState<IResponseLogin>(
    {} as IResponseLogin
  );

  //TODO: essa function ira verificar se o usuario ta logado
  const getIsLogged = () => {
    return isAuth;
  };

  const logout = () => {
    setIsAuth(true);
  };

  const login = () => {
    setIsAuth(true);
  };

  return (
    <AuthContext.Provider
      value={{
        userDataLogin,
        setUserDataLogin,
        isAuth,
        setIsAuth,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}
