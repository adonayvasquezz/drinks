import { IDrinkProp } from "@/interfaces/IDrink";
import React, { FC } from "react";
import Drinkcard from "../DrinkCard/DrinkCard";
import css from "./DrinkList.module.css";

const DrinkList: FC<IDrinkProp> = ({ drinks }) => {
  // const drinksRender =
  //   drinks.length && drinks.length > 20 ? drinks.splice(1, 21) : drinks;

  return (
    <div className={css.container}>
      <div className={css.grid}>
        {drinks.length &&
          drinks.map((drink) => (
            <Drinkcard key={drink.idDrink} drink={drink} />
          ))}
      </div>
    </div>
  );
};

export default DrinkList;
