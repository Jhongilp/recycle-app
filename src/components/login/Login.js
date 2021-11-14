import React, { useContext } from "react";
import { AppContext } from "../../App";
import styled from "styled-components";

const LoginWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  width: 100%;
  height: 100%;
  padding: 20px;
`;

export const Btn = styled.button`
  display: flex;
  width: 100%;
  height: 45px;
  cursor: pointer;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #089b8a;
  color: white;
  font-size: 16px;
`;

const Login = () => {
  const { setState } = useContext(AppContext);
  // console.log("[login] ctx: ", )

  return (
    <LoginWrapper>
      <ButtonsWrapper>
        <Btn
          type="button"
          onClick={() =>
            setState((state) => ({ ...state, role: "reciclador" }))
          }
        >
          RECICLADOR
        </Btn>
        <Btn
          type="button"
          onClick={() => setState((state) => ({ ...state, role: "usuario" }))}
        >
          USUARIO
        </Btn>
      </ButtonsWrapper>
    </LoginWrapper>
  );
};

export default Login;
