import React from "react";
import styled from "styled-components";

import { UserHomeWrapper } from "../../Usuario";
import { PointsCardWrapper, PointsDesc } from "../points-card/PointsCard";
import { Btn } from "../../../login/Login";

import tigerProject from "../../../images/cat.jpg";
import patita from "../../../images/patita.png";
import sanar from "../../../images/sanar.png";

const DonatePointsWrapper = styled(PointsCardWrapper)`
  height: 100px;
`;

export const DonationOrgWrapperList = styled.div`
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

export const OrgCard = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 120px;
  gap: 20px;
  padding: 5px;
  box-shadow: rgb(175 181 186 / 30%) 0px 2px 6px 0px,
    rgb(175 181 186 / 30%) 0px -1px 6px 0px;
`;

export const ProfilePic = styled.div`
  display: flex;
  width: 100px;
  height: 100%;
  
  img {
    height: 100%;
    width: 100px;
    /* border-radius: 50%; */
  }
`;

export const ProfileDesc = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 10px;
`;

export const DonarInput = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 35px;

  input {
    width: 110px;
    height: 30px;
    padding-left: 5px;
    margin-right: 5px;
  }

  button {
    height: 30px;
    /* width: 50%; */
  }
`;

const DonarPage = () => {
  return (
    <UserHomeWrapper>
      <DonatePointsWrapper>
        <PointsDesc>
          <div>
            <span className="points-counter">1.236</span>
            <span className="points-desc">PUNTOS ACUMULADOS</span>
          </div>
        </PointsDesc>
      </DonatePointsWrapper>
      <DonationOrgWrapperList>

        <OrgCard>
          <ProfilePic>
            <img src={tigerProject} alt="perfil reciclador" />
          </ProfilePic>
          <ProfileDesc>
            <span>Proyecto Tiger</span>
            <a
              href="https://www.facebook.com/proyectotiger/about/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver más
            </a>
            <DonarInput>
              <input type="number" placeholder="puntos a donar"></input>
              <Btn>DONAR</Btn>
            </DonarInput>
          </ProfileDesc>
        </OrgCard>

        <OrgCard>
          <ProfilePic>
            <img src={patita} alt="perfil reciclador" />
          </ProfilePic>
          <ProfileDesc>
            <span>Tapitas por patitas</span>
            <a
              href="https://www.facebook.com/tapitasxpatitas.col/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver más
            </a>
            <DonarInput>
              <input type="number" placeholder="puntos a donar"></input>
              <Btn>DONAR</Btn>
            </DonarInput>
          </ProfileDesc>
        </OrgCard>
        <OrgCard>
          <ProfilePic>
            <img src={sanar} alt="perfil reciclador" />
          </ProfilePic>
          <ProfileDesc>
            <span>Fundación Dar Esperanza</span>
            <a
              href="https://es-la.facebook.com/Fundaci%C3%B3n-Dar-Esperanza-119806858062788/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver más
            </a>
            <DonarInput>
              <input type="number" placeholder="puntos a donar"></input>
              <Btn>DONAR</Btn>
            </DonarInput>
          </ProfileDesc>
        </OrgCard>

      </DonationOrgWrapperList>
    </UserHomeWrapper>
  );
};

export default DonarPage;
