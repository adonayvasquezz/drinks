import React, { FC, useEffect, useState } from "react";
import Image from "next/image";
import css from "./DrinkDetails.module.css";

interface Props {
  drink: any;
}

const DrinkDetails: FC<Props> = ({ drink }) => {
  const [ingredients, setIngredients] = useState<any[]>([]);

  useEffect(() => {
    const objectToArray = Object.entries(drink);
    const ingredArr = objectToArray.filter((ingred: any) => {
      const currentIngred = ingred[0].slice(0, -1);
      const ingredientField = "strIngredient";
      return currentIngred === ingredientField;
    });
    setIngredients(ingredArr);
  }, [drink]);

  return (
    <div className={css.container}>
      <div className={css.imageContainer}>
        <Image
          src={drink.strDrinkThumb}
          fill
          priority
          className={css.image}
          alt={drink.strDrink}
          sizes="(max-width: 768px) 80vw,
            (max-width: 1200px) 45vw,
            25vw"
        />
      </div>
      <div>
        <h1>{drink.strDrink}</h1>
        <p>{drink.strInstructions}</p>
        <p>{drink.strGlass}</p>

        <h3>Ingredients:</h3>
        <ul>
          {ingredients &&
            ingredients.map((el: any) => <li key={el[0]}>{el[1]}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default DrinkDetails;
