import React, { useState } from "react";
import styled from "styled-components";
import { Btn } from "../../../login/Login";
import RecicladorList from '../reciclador-list/RecicladorList' 

const PickupWrapperPage = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 10px;
`;

const ViewOptions = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  margin-bottom: 50px;

  > button {
    background-color: inherit;
    color: #607d8b;
  }

  button.selected {
    font-weight: bold;
    border-bottom: 2px solid #607d8b;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const HorariosWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 40px;

  > input {
    margin-right: 20px;
  }

  > span.horario-date {
    margin-left: auto;
  }
`;

const Horarios = () => {
  return (
    <HorariosWrapper>
      <input type="checkbox"></input>
      <span>Sábado </span>
      <span className="horario-date">08:00 - 09:00 am </span>
    </HorariosWrapper>
  );
};

const PickupPage = () => {
  const [view, setView] = useState("horarios");

  return (
    <PickupWrapperPage className="pickup-page-wrapper">
      <ViewOptions>
        <Btn
          className={`${view === "horarios" ? "selected" : ""}`}
          type="button"
          onClick={() => setView("horarios")}
        >
          HORARIOS
        </Btn>
        <Btn
          className={`${view === "recicladores" ? "selected" : ""}`}
          type="button"
          onClick={() => setView("recicladores")}
        >
          RECICLADORES
        </Btn>
      </ViewOptions>

      <Content>{view === "horarios" ? <Horarios /> : <RecicladorList />}</Content>
    </PickupWrapperPage>
  );
};

export default PickupPage;
