import React, { useState } from "react";

import plasticImage from "../../../images/empty-plastic-containers.jpg";
import aluminioImage from "../../../images/empty-aluminum-containers.jpg";
import paperImage from "../../../images/folded-paper-stack.jpg";
import glassImage from "../../../images/glass-bottle-pile.jpg";
import ewasteImage from "../../../images/ewaste.png";

import RecycleTypeCounter from "./RecycleTypeCounter";

import {
  RecycleTypesWrapper,
  RecycleTypeCard,
  ImageRecycleType,
  DescRecycleType,
} from "./_styles";

const RecycleTypesMenu = ({ onSelect }) => {
  return (
    <RecycleTypesWrapper>
      <RecycleTypeCard onClick={() => onSelect("plastico")}>
        <ImageRecycleType src={plasticImage} />
        <DescRecycleType>
          <span>Botellas y contenedores plásticos</span>
        </DescRecycleType>
      </RecycleTypeCard>
      <RecycleTypeCard onClick={() => onSelect("papel")}>
        <ImageRecycleType src={paperImage} />
        <DescRecycleType>
          <span>Papel y cartón</span>
        </DescRecycleType>
      </RecycleTypeCard>
      <RecycleTypeCard onClick={() => onSelect("metalicos")}>
        <ImageRecycleType src={aluminioImage} />
        <DescRecycleType>
          <span>Contenedores metálicos de comida o bebidas</span>
        </DescRecycleType>
      </RecycleTypeCard>
      <RecycleTypeCard onClick={() => onSelect("vidrio")}>
        <ImageRecycleType src={glassImage} />
        <DescRecycleType>
          <span>Vidrio</span>
        </DescRecycleType>
      </RecycleTypeCard>
      <RecycleTypeCard onClick={() => onSelect("otros")}>
        <ImageRecycleType src={ewasteImage} />
        <DescRecycleType>
          <span>Otros</span>
        </DescRecycleType>
      </RecycleTypeCard>
    </RecycleTypesWrapper>
  );
};

const recycle_types = {
  plastico: {
    id: "plastico",
    name: "Botellas y contenedores plásticos",
    items: {
      botellas: {
        name: "botellas",
        points: 10,
      },
      tapas: {
        name: "tapas",
        points: 2,
      },
      pesados: {
        name: "plástico pesado",
        points: 30,
      },
    },
  },
  papel: {
    id: "papel",
    name: "Papel y cartón",
    items: {
      papel: {
        name: "papel",
        points: 2,
      },
      carton: {
        name: "cartón",
        points: 5,
      },
    },
  },
  metalicos: {
    id: "metalicos",
    name: "Contenedores metálicos de comidas o bebidas",
    items: {
      contenedor: {
        name: "contenedor metálico",
        points: 15,
      },
    },
  },
  vidrio: {
    id: "vidrio",
    name: "Vidrio",
    items: {
      contenedor: {
        name: "contenedor metálico",
        points: 15,
      },
    },
  },
  otros: {
    id: "otros",
    name: "Otros",
    items: {
      pilas: {
        name: "pilas",
        points: 50,
      },
      bombillos: {
        name: "bombillos",
        points: 100,
      },
      aceite: {
        name: "aceite",
        points: 200,
      },
      otros_ewaste: {
        name: "demás elementos electrónicos",
        points: 200,
      },
      otros: {
        name: "demás elementos reciclables",
        points: 200,
      },
    },
  },
};

function renderRecycleType(recycleType) {
  if (!recycleType) {
    return null;
  }

  return <RecycleTypeCounter item={recycle_types[recycleType]} />;
}

const RecycleTypesList = () => {
  const [recycleType, setRecycleType] = useState(null);



  if (!recycleType) {
    return <RecycleTypesMenu onSelect={setRecycleType} />;
  }

  return renderRecycleType(recycleType);
};

export default RecycleTypesList;
