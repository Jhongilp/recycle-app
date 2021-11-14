import React from "react";
import styled from "styled-components";
import RecycleTypesList from "./screens/recycle-types/RecycleTypesList";
import PointsCard from "./screens/points-card/PointsCard";

const UserPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  /* align-items: center; */
  width: 100%;
  height: 100%;
  `;

const UserHomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  width: 100%;
  height: 100%;
`

export const UserContext = React.createContext();

const UserHome = () => {
  return (
    <UserHomeWrapper>
      <PointsCard />
    </UserHomeWrapper>
  )
}

const Usuario = () => {
  return (
    <UserPageWrapper>
      <UserHome />

      {/* <RecycleTypesList /> */}
    </UserPageWrapper>
  );
};

export default Usuario;
