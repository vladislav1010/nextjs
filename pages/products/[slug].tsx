import * as React from "react";
import { useRouter } from "next/router";

const Product = ({ product }: any) => {
  const { isFallback } = useRouter();

  if (isFallback) {
    return <div>Loading...</div>;
  }

  return <div>{product.name}</div>;
};

export async function getStaticProps({ params }: any) {
  const db = await require("../../database").db();
  const product = await db
    .collection("products")
    .findOne({ slug: params.slug });

  return {
    props: { product },
    revalidate: 30,
  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export default Product;
