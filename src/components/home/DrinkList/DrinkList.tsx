import { IDrinkProp } from "@/interfaces/IDrink";
import React, { FC } from "react";
import Drinkcard from "../DrinkCard/DrinkCard";

const DrinkList: FC<IDrinkProp> = ({ drinks }) => {
  return (
    <div>
      {drinks.length &&
        drinks.map((drink) => <Drinkcard key={drink.idDrink} drink={drink} />)}
    </div>
  );
};

export default DrinkList;
