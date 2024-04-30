import { createContext, useContext } from "react";

const ContextProvider = createContext({
          signInData : [
                    {         
                      username : "Subash",
                      password : "Subbu@3123"        
                    }   
          ],
          addLogin : (username, password) => {},
          signUpData : [
                    {
                              name: "",
                              username: "",
                              email: "",
                              password:"",
                    }
          ],
})

export const useFormData = () =>{
          return useContext(ContextProvider);
}

export const FormDataProvider = ContextProvider.Provider;