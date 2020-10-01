import Axios from "axios";
import React, { useState } from "react";

export const AuthContext = React.createContext();

export const AuthConsumer = AuthContext.Consumer;

const AuthProvider = (props) => {
  const [user, setUser] = useState({});

  const handleRegister = async () => {
    try {
      let res = await Axios.post("/api/auth", user);
      setUser(res.data.data);
    } catch (err) {
      alert("error registrayion");
    }
  };

  return (
    <AuthContext.Provider value={{ user, setUser, handleRegister }}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
