import React from "react";
import styled from "styled-components";

import recicladoImage1 from "../../../images/reciclador1.png";
import recicladoImage2 from "../../../images/reciclador2.png";
import recicladoImage3 from "../../../images/reciclador3.png";

const WrapperList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
  margin-top: 30px;
  padding: 0 10px;

  h1 {
    font-size: 16px;
  }
`;

const RecicladorCard = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 85px;
  gap: 20px;
  padding: 5px;
  box-shadow: rgb(175 181 186 / 30%) 0px 2px 6px 0px,
    rgb(175 181 186 / 30%) 0px -1px 6px 0px;
`;

const ProfilePic = styled.div`
  display: flex;
  width: 60px;
  height: 60px;

  img {
    border-radius: 50%;
  }
`;

const ProfileDesc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const RecicladorList = () => {
  return (
    <WrapperList>
      <h1>Con ellos podrás programar la recogida de tu material reciclado!</h1>
      <RecicladorCard>
        <ProfilePic>
          <img src={recicladoImage1} alt="perfil reciclador" />
        </ProfilePic>
        <ProfileDesc>
          <span>Odila Chamorro</span>
          <span>ASOBOSUR</span>
        </ProfileDesc>
      </RecicladorCard>
      <RecicladorCard>
        <ProfilePic>
          <img src={recicladoImage2} alt="perfil reciclador" />
        </ProfilePic>
        <ProfileDesc>
          <span>Jorge Humberto Gallego</span>
          <span>ASOBOSUR</span>
        </ProfileDesc>
      </RecicladorCard>
      <RecicladorCard>
        <ProfilePic>
          <img src={recicladoImage3} alt="perfil reciclador" />
        </ProfilePic>
        <ProfileDesc>
          <span>Carlos Hernandez</span>
          <span>ASOBOSUR</span>
        </ProfileDesc>
      </RecicladorCard>
    </WrapperList>
  );
};

export default RecicladorList;
