import React, { useState, useRef, useContext } from "react";
import styled from "styled-components";
import RecycleTypesList from "./screens/recycle-types/RecycleTypesList";
import PickupPage from "./screens/pickup-page/PickupPage";
import GoogleMap from "../map/GoogleMap";
import RecicladorList from "./screens/reciclador-list/RecicladorList";
import DonarPage from './screens/points-card/DonarPage'

import PointsCard from "./screens/points-card/PointsCard";
import { Btn } from "../login/Login";
import RecyclingIcon from "../icons/RecyclingIcon";

const pages = {
  user_home: {
    name: "user_home",
    component: <UserHome />,
  },
  recycling: {
    name: "recycling",
    component: <RecycleTypesList />,
  },
  pickup: {
    name: "pickup",
    component: <PickupPage />,
  },
  containers: {
    name: "containers",
    component: <GoogleMap />,
  },
  recicladores: {
    name: "recicladores",
    component: <RecicladorList />,
  },
  donar: {
    name: "donar",
    component: <DonarPage />,
  },
};

export const UserPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  /* align-items: center; */
  width: 100%;
  height: 100%;
`;

export const UserHomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  width: 100%;
  height: 100%;
`;

export const RecycleBtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 120px;
  padding: 0 10px;
  margin: 40px 0;
`;

export const RecycleBtn = styled(Btn)`
  flex-direction: column;
  gap: 5px;
  width: 100%;
  height: 100%;

  > svg {
    width: 60px;
    height: 60px;
  }
`;

export const UserBtnsActions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 0 10px;
`;

export const UserContext = React.createContext({});

function UserHome() {
  const { setUserPage } = useContext(UserContext);
  return (
    <UserHomeWrapper>
      <PointsCard onSelect={setUserPage}/>
      <RecycleBtnContainer>
        <RecycleBtn
          type="button"
          onClick={() => setUserPage(pages.recycling.name)}
        >
          <RecyclingIcon />
          <span>RECICLAR</span>
        </RecycleBtn>
      </RecycleBtnContainer>
      <UserBtnsActions>
        <Btn type="button" onClick={() => setUserPage(pages.pickup.name)}>
          PROGRAMAR RECOGIDA
        </Btn>
        <Btn type="button" onClick={() => setUserPage(pages.containers.name)}>
          CONTENEDORES
        </Btn>
        <Btn type="button" onClick={() => setUserPage(pages.recicladores.name)}>
          RECICLADORES
        </Btn>
      </UserBtnsActions>
    </UserHomeWrapper>
  );
}

const renderPage = (page) => {
  if (!page) {
    return <UserHome />;
  }
  console.log("[render page] : ", page, pages[page]);
  return pages[page].component;
};

const Usuario = () => {
  const [userPage, setUserPage] = useState(pages.user_home.name);

  const store = useRef({});

  store.current = {
    userPage,
    setUserPage,
  };

  return (
    <UserContext.Provider value={store.current}>
      <UserPageWrapper>{renderPage(userPage)}</UserPageWrapper>
    </UserContext.Provider>
  );
};

export default Usuario;
