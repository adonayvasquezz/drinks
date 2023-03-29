import { NextPage, GetStaticProps, GetStaticPaths } from "next";
import DrinkDetails from "@/components/detail/DrinkDetails/DrinkDetails";
import DrinksLayout from "@/components/shared/layouts/DrinksLayout";

const drink: NextPage = (props: any) => {
  console.log("en clientye", props.drink);
  return (
    <>
      <DrinksLayout title="Drinks" pageDescription="Cocktail description">
        <DrinkDetails drink={props.drink} />
      </DrinksLayout>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const drinksAPI = `${process.env.API_URL}/filter.php?a=Alcoholic`;
  const res = await fetch(drinksAPI);
  const data = await res.json();
  const drinksJson = data.drinks;

  return {
    paths: [...drinksJson].map((drink) => ({
      params: { id: drink.idDrink },
    })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };
  const detailAPI = `${process.env.API_URL}/lookup.php?i=${id}`;
  const res = await fetch(detailAPI);
  const data = await res.json();

  return {
    props: {
      drink: data.drinks[0],
    },
  };
};

export default drink;
