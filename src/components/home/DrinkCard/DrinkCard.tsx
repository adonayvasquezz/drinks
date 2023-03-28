import { IDrink } from "@/interfaces/IDrink";
import React, { FC } from "react";

interface Props {
  drink: IDrink;
}

const Drinkcard: FC<Props> = ({ drink }) => {
  const { idDrink, strDrink, strDrinkThumb } = drink;
  return <div>{strDrink}</div>;
};

export default Drinkcard;
