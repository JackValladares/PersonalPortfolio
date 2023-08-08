import React, {useState, createContext} from "react";

export const UserContext = createContext("");

export const UserProvider = ({ children }) => {
    const [userToken, setUserToken] = useState("");

    return (
        <UserContext.Provider value={{ userToken, setUserToken }}>
            {children}
        </UserContext.Provider>
    );
};