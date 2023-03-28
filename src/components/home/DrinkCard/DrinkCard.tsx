import { IDrink } from "@/interfaces/IDrink";
import Image from "next/image";
import React, { FC } from "react";
import css from "./DrinkCard.module.css";

interface Props {
  drink: IDrink;
}

const Drinkcard: FC<Props> = ({ drink }) => {
  const { strDrink, strDrinkThumb } = drink;
  return (
    <div className={css.cardContainer}>
      <div className={css.imageContainer}>
        <Image src={strDrinkThumb} fill className={css.image} alt={strDrink} />
      </div>
      <div className={css.title}>{strDrink}</div>
    </div>
  );
};

export default Drinkcard;
