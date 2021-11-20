import React from "react";
import styled from "styled-components";

import {
  WrapperList,
  ProfileDesc,
  ProfilePic,
  RecicladorCard,
} from "./RecicladorList";
import { Btn } from "../../../login/Login";

import recicladoImage1 from "../../../images/reciclador1.png";
import recicladoImage2 from "../../../images/reciclador2.png";
import recicladoImage3 from "../../../images/reciclador3.png";

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 20px 0;
  /* min-height: 150px; */

  h3 {
    color: #636e69;
    margin: 0;
  }

  div {
    display: flex;
    flex-direction: column;
    label {
      color: #636e69;
      font-size: 12px;
    }
    span {
      font-size: 20px;
    }
  }

  > div.contact-info {
    margin-bottom: 20px;
  }
`;

export const RecicladorCard1 = () => {
  return (
    <WrapperList>
      <RecicladorCard>
        <ProfilePic>
          <img src={recicladoImage1} alt="perfil reciclador" />
        </ProfilePic>
        <ProfileDesc>
          <span>Odila Chamorro</span>
          <span>ASOBOSUR</span>
        </ProfileDesc>
      </RecicladorCard>
      <ProfileInfo>
        <div className="contact-info">
          <label>No celular</label>
          <span>318-5792358</span>
        </div>
        <div className="puntos">
          <label>Puntos recolectados </label>
          <span>36.750</span>
        </div>
      </ProfileInfo>
      <ProfileInfo>
        <h3>Acerca de mi</h3>
        <p>
          Soy madre soltera de tres hijos con 15 años de experiencia en el
          oficio de reciclaje.
        </p>
        <p>
          En mi tiempo libre me encanta hacer bisutería. Mi aspiración es sacar
          a mis hijos adelante.
        </p>
      </ProfileInfo>
      <ProfileInfo>
        <Btn>DONAR</Btn>
      </ProfileInfo>
    </WrapperList>
  );
};
export const RecicladorCard2 = () => {
  return (
    <WrapperList>
      <RecicladorCard>
        <ProfilePic>
          <img src={recicladoImage2} alt="perfil reciclador" />
        </ProfilePic>
        <ProfileDesc>
          <span>Jorge Humberto Gallego</span>
          <span>ASOBOSUR</span>
        </ProfileDesc>
      </RecicladorCard>
      <ProfileInfo>
        <div className="contact-info">
          <label>No celular</label>
          <span>312-9648532</span>
        </div>
        <div className="puntos">
          <label>Puntos recolectados </label>
          <span>15.968</span>
        </div>
      </ProfileInfo>
      <ProfileInfo>
        <h3>Acerca de mi</h3>
        <p>
          Trabajo en el oficio de reciclaje desde hace 11 años. Soy muy
          organizado y tengo mi propia bodeguita donde acumulo lo reciclado para
          llevarlo a la asociación cada semana.
        </p>
        <p>
          En mi tiempo libre me encanta hacer jugar futbol con mis amigos. Mi
          esposa también es recicladora y entre ambos aspiramos a tener nuestra
          propia empresa de reciclaje.
        </p>
      </ProfileInfo>
      <ProfileInfo>
        <Btn>DONAR</Btn>
      </ProfileInfo>
    </WrapperList>
  );
};
export const RecicladorCard3 = () => {
  return (
    <WrapperList>
      <RecicladorCard>
        <ProfilePic>
          <img src={recicladoImage3} alt="perfil reciclador" />
        </ProfilePic>
        <ProfileDesc>
          <span>Carlos Hernandez</span>
          <span>ASOBOSUR</span>
        </ProfileDesc>
      </RecicladorCard>
      <ProfileInfo>
        <div className="contact-info">
          <label>No celular</label>
          <span>323-5296843</span>
        </div>
        <div className="puntos">
          <label>Puntos recolectados </label>
          <span>10.865</span>
        </div>
      </ProfileInfo>
      <ProfileInfo>
        <h3>Acerca de mi</h3>
        <p>
          Tengo 8 años de experiencia como reciclador. Gracias a este oficio he
          podido salir adelante y lo ejerzo con mucho orgullo.
        </p>
        <p>
          Además de reciclar también me dedico a la construcción.
        </p>
      </ProfileInfo>
      <ProfileInfo>
        <Btn>DONAR</Btn>
      </ProfileInfo>
    </WrapperList>
  );
};
