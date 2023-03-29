import Head from "next/head";
import React, { FC } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

interface Props {
  children: React.ReactNode;
  title: string;
  pageDescription: string;
  imageUrl?: string;
}

const DrinksLayout: FC<Props> = ({
  children,
  title,
  pageDescription,
  imageUrl,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={pageDescription} />
        <meta name="og:title" content={title} />
        <meta name="og:description" content={pageDescription} />
        {imageUrl && <meta name="og:image" content={imageUrl} />}
      </Head>

      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default DrinksLayout;
