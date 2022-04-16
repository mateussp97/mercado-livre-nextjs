import { getItemById } from "../../services/items";

export default function ProductDetails({ item }) {
  console.log(item);

  return (
    <div>
      <h1>Mercado Livre - Product Details</h1>
    </div>
  );
}

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params }) => {
  const item = await getItemById(params?.slug);

  return {
    props: {
      item,
    },
  };
};
