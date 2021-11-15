import React, { useState } from "react";
import styled from "styled-components";
import {
  RecycleTypesWrapper,
  RecycleTypeCard,
  ImageRecycleType,
  DescRecycleType,
} from "./_styles";

import plasticImage from "../../../images/empty-plastic-containers.jpg";
import aluminioImage from "../../../images/empty-aluminum-containers.jpg";
import paperImage from "../../../images/folded-paper-stack.jpg";
import glassImage from "../../../images/glass-bottle-pile.jpg";
import ewasteImage from "../../../images/ewaste.png";

import { Btn } from "../../../login/Login";
import AddIcon from "../../../icons/AddIcon";
import RemoveIcon from "../../../icons/RemoveIcon";

const Wrapper = styled(RecycleTypesWrapper)`
  justify-content: flex-start;
  padding: 30px 10px 0;
`;

const TypeTitle = styled(RecycleTypeCard)`
  width: 100%;
  box-shadow: unset;
`;

const CounterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* align-items: center; */
  width: 100%;
  height: 80px;
  margin-top: 20px;

  span {
    color: #636e69;
    font-size: 12px;
  }
  > span.item-count {
    font-weight: bold;
  }
`;

const ItemBarWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 35px;
  gap: 20px;
`;

const ItemBarCounter = styled.div`
  display: flex;
  width: 100%;
  height: 35px;
  gap: 3px;
  flex-grow: 1;
  text-overflow: ellipsis;
  overflow: hidden;

  > div {
    width: 10px;
    height: 100%;
    background-color: #089b8a;
  }
`;

const CounterBtnWrapper = styled.div`
  display: flex;
  gap: 5px;
`;
const CounterBtn = styled(Btn)`
  width: 35px;
  height: 35px;
  background-color: #fff;
  border: 1px solid #eee;
  > svg {
    width: 35px;
    height: 35px;
  }

  &.add-btn {
    background-color: #eee;
  }
`;

const CounterItemCard = ({ name, points }) => {
  const [counter, setCounter] = useState(parseInt(Math.random() * 10 + 1));
  return (
    <CounterWrapper className="counter-wrapper">
      <span className="item-title">{`${name} (${points} puntos c/u)`}</span>
      <ItemBarWrapper className="item-bar-wrapper">
        <ItemBarCounter className="item-bar-counter">
          {Array(counter)
            .fill(true)
            .map((k, i) => {
              return <div key={i}></div>;
            })}
        </ItemBarCounter>
        <CounterBtnWrapper>
          <CounterBtn
            type="button"
            onClick={() => setCounter((state) => state - 1)}
          >
            <RemoveIcon></RemoveIcon>
          </CounterBtn>
          <CounterBtn
            className="add-btn"
            type="button"
            onClick={() => setCounter((state) => state + 1)}
          >
            <AddIcon></AddIcon>
          </CounterBtn>
        </CounterBtnWrapper>
      </ItemBarWrapper>
      <span className="item-count">{`${counter} ${name} x ${points} = ${
        counter * points
      } puntos`}</span>
    </CounterWrapper>
  );
};

const getImage = {
  plastico: plasticImage,
  papel: paperImage,
  metalicos: aluminioImage,
  vidrio: glassImage,
  otros: ewasteImage,
};

const RecycleTypeCounter = ({ item }) => {
  const { id, name, items } = item;

  console.log("[render recycle type]: ", name, items);
  return (
    <Wrapper className="recycle-type-counter--wrapper">
      <TypeTitle>
        <ImageRecycleType src={getImage[id]} />
        <DescRecycleType>
          <span>{name}</span>
        </DescRecycleType>
      </TypeTitle>
      {Object.keys(items).map((itemName) => {
        return (
          <CounterItemCard
            key={items[itemName].name}
            name={items[itemName].name}
            points={items[itemName].points}
          />
        );
      })}
    </Wrapper>
  );
};

export default RecycleTypeCounter;
