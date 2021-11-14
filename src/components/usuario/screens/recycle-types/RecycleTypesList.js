import React from 'react'
import styled from 'styled-components'

import plasticImage from "../../../images/empty-plastic-containers.jpg";
import aluminioImage from "../../../images/empty-aluminum-containers.jpg";
import paperImage from "../../../images/folded-paper-stack.jpg";
import glassImage from "../../../images/glass-bottle-pile.jpg";
import ewasteImage from "../../../images/ewaste.png";

const RecycleTypesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 8px;
`;

const RecycleTypeCard = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  height: 85px;
  padding: 5px;
  box-shadow: rgb(175 181 186 / 30%) 0px 2px 6px 0px,
    rgb(175 181 186 / 30%) 0px -1px 6px 0px;
`;

const ImageRecycleType = styled.img`
  width: 84px;
  height: 84px;
`;

const DescRecycleType = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 10px;
  color: #636e69;

  > span {
    font-weight: bold;
  }
`;


const RecycleTypesList = () => {
  return (
    <RecycleTypesWrapper>
    <RecycleTypeCard>
      <ImageRecycleType src={plasticImage} />
      <DescRecycleType>
        <span>Botellas y contenedores plásticos</span>
      </DescRecycleType>
    </RecycleTypeCard>
    <RecycleTypeCard>
      <ImageRecycleType src={paperImage} />
      <DescRecycleType>
        <span>Papel y cartón</span>
      </DescRecycleType>
    </RecycleTypeCard>
    <RecycleTypeCard>
      <ImageRecycleType src={aluminioImage} />
      <DescRecycleType>
        <span>Contenedores metálicos de comida o bebidas</span>
      </DescRecycleType>
    </RecycleTypeCard>
    <RecycleTypeCard>
      <ImageRecycleType src={glassImage} />
      <DescRecycleType>
        <span>Vidrio</span>
      </DescRecycleType>
    </RecycleTypeCard>
    <RecycleTypeCard>
      <ImageRecycleType src={ewasteImage} />
      <DescRecycleType>
        <span>Otros</span>
      </DescRecycleType>
    </RecycleTypeCard>
  </RecycleTypesWrapper>
  )
}

export default RecycleTypesList
