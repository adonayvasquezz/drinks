import { IDrink } from "@/interfaces/IDrink";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { FC } from "react";
import css from "./DrinkCard.module.css";

interface Props {
  drink: IDrink;
}

const Drinkcard: FC<Props> = ({ drink }) => {
  const { strDrink, strDrinkThumb, idDrink } = drink;
  const router = useRouter();
  const handleDetail = (idDrink: string) => {
    router.push(`/${idDrink}`);
  };

  return (
    <a onClick={() => handleDetail(idDrink)}>
      <div className={css.cardContainer}>
        <div className={css.imageContainer}>
          <Image
            src={`${strDrinkThumb}/preview`}
            fill
            className={css.image}
            alt={strDrink}
            sizes="(max-width: 768px) 80vw,
            (max-width: 1200px) 45vw,
            25vw"
          />
        </div>
        <div className={css.title}>{strDrink}</div>
      </div>
    </a>
  );
};

export default Drinkcard;
