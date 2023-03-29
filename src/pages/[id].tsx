import DrinkDetails from "@/components/detail/DrinkDetails/DrinkDetails";
import DrinksLayout from "@/components/shared/layouts/DrinksLayout";
import { NextPage } from "next";

const drink: NextPage = () => {
  return (
    <>
      <DrinksLayout title="Drinks" pageDescription="Cocktail description">
        <DrinkDetails />
      </DrinksLayout>
    </>
  );
};

export default drink;
