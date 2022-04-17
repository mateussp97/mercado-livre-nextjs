import styled from "@emotion/styled";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";
import ProductCard from "../components/global/ProductCard/ProductCard";
import { getItems } from "../services/items";

const PageContainer = styled.section`
  width: 100%;
  min-height: calc(100vh - 80px);

  padding: 64px 32px;

  background: #eeeeee;
`;

const PageWrapper = styled.main`
  max-width: 1240px;
  width: 100%;

  margin: 0 auto;

  background: #ffffff;

  border-radius: 8px;
`;

export default function Home() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const items = await getItems(router.query.search);
      setItems(items);
    };

    try {
      fetchData();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [router.query.search]);

  if (isLoading) return <h1>Carregando...</h1>;

  return (
    <Fragment>
      <NextSeo
        title="Mercado Livre | Home"
        description="Compre produtos com Frete Grátis no mesmo dia no Mercado Livre Brasil. Encontre milhares de marcas e produtos a preços incríveis."
        openGraph={{
          title: "Mercado Livre | Home",
          description:
            "Compre produtos com Frete Grátis no mesmo dia no Mercado Livre Brasil. Encontre milhares de marcas e produtos a preços incríveis.",
          images: [
            {
              url: "/mercado-livre-logo.jpg",
              width: 1950,
              height: 1950,
              alt: "Mercado Livre Logo",
              type: "image/jpeg",
            },
          ],
        }}
      />
      <PageContainer>
        <PageWrapper>
          {items.map((item) => (
            <ProductCard
              key={item.id}
              id={item.id}
              title={item.title}
              price={
                item?.price
                  .toLocaleString("pt-BR", {
                    style: "currency",
                    currency: item?.currency_id,
                    minimumFractionDigits: 2,
                  })
                  .split(",")[0]
              }
              fraction={
                item?.price
                  .toLocaleString("pt-BR", {
                    style: "currency",
                    currency: item?.currency_id,
                    minimumFractionDigits: 2,
                  })
                  .split(",")[1]
              }
              picture={item.thumbnail}
              condition={item.condition}
              free_shipping={item.shipping.free_shipping}
              sold_quantity={item.sold_quantity}
            />
          ))}
        </PageWrapper>
      </PageContainer>
    </Fragment>
  );
}
