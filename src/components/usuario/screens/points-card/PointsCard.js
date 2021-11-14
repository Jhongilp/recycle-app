import React from "react";
import styled from "styled-components";
import { Btn } from "../../../login/Login";

const PointsCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 200px;
  padding: 10px;
  background-color: #f3f3f3;
`;

const PointsDesc = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-grow: 1;

  > div {
    display: flex;
    align-items: baseline;
    > span.points-counter {
      font-size: 48px;
      margin-right: 20px;
    }
    > span.points-desc {
      /* font-size: 24px;
      margin-right: 20px; */
    }
  }
`;

const PointsCommands = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 40px;
  gap: 5px;
`;

const PointBtn = styled(Btn)`
  /* width: 60px; */
  height: 100%;
`;

const PointsCard = () => {
  return (
    <PointsCardWrapper>
      <PointsDesc>
        <div>
          <span className="points-counter">1.236</span>
          <span className="points-desc">PUNTOS ACUMULADOS</span>
        </div>
      </PointsDesc>
      <PointsCommands>
        <PointBtn>REDIMIR</PointBtn>
        <PointBtn>DONAR</PointBtn>
        <PointBtn>SORTEAR</PointBtn>
      </PointsCommands>
    </PointsCardWrapper>
  );
};

export default PointsCard;
