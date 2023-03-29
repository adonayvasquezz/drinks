import React, { FC } from "react";

interface Props {
  drink: any;
}
const DrinkDetails: FC<Props> = ({ drink }) => {
  return <div>{drink.strDrink}</div>;
};

export default DrinkDetails;
