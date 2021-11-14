import React, { useContext, useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Login from "./components/login/Login";
import UserPage from "./components/usuario/Usuario";
import RecicladorPage from "./components/reciclador/RecicladorPage";
import GoogleMap from "./components/map/GoogleMap";

const AppWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  /* background-color: red; */
`;

const roles = {
  reciclador: "reciclador",
  usuario: "usuario",
};

export const AppContext = React.createContext();

function App() {
  const [state, setState] = useState({
    role: null,
  });

  const { role } = state;

  const store = useRef({});

  store.current = {
    role,
    setState,
  };

  const renderPage = () => {
    if (!role) {
      return <Login />;
    }
    return role === roles.reciclador ? <RecicladorPage /> : <UserPage />;
  };

  return (
    <AppContext.Provider value={store.current}>
      <AppWrapper>{renderPage()}</AppWrapper>
    </AppContext.Provider>
  );
}

export default App;
