import styled from 'styled-components'

export const RecycleTypesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 8px;
`;

export const RecycleTypeCard = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  height: 85px;
  padding: 5px;
  box-shadow: rgb(175 181 186 / 30%) 0px 2px 6px 0px,
    rgb(175 181 186 / 30%) 0px -1px 6px 0px;
`;

export const ImageRecycleType = styled.img`
  width: 84px;
  height: 84px;
`;

export const DescRecycleType = styled.div`
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