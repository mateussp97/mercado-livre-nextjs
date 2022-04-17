import styled from "@emotion/styled";
import { NextSeo } from "next-seo";
import { Fragment } from "react";
import { getItemById } from "../../services/items";

const PageContainer = styled.section`
  width: 100%;
  min-height: calc(100vh - 80px);

  padding: 64px 32px;

  background: #eeeeee;
`;

const PageWrapper = styled.main`
  max-width: 1240px;
  width: 100%;

  padding: 32px;
  margin: 0 auto;

  background: #ffffff;

  border-radius: 8px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  .product-details-content {
    width: 100%;

    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: flex-start;
    justify-content: flex-start;
    grid-gap: 32px;

    img {
      width: 100%;
      height: 100%;

      border: 1px solid #eef0f3;
      border-radius: 8px;

      object-fit: cover;
      object-position: center;
    }

    .product-details-informations {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;

      .product-details-condition-sold-quantity {
        font-size: 16px;
        font-weight: 400;
        color: rgba(0, 0, 0, 0.55);
        text-transform: capitalize;
      }

      .product-details-title {
        margin: 16px 0 32px;

        font-size: 20px;
        font-weight: 600;
        color: rgba(0, 0, 0, 0.9);
      }

      .product-details-price-wrapper {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        grid-gap: 4px;

        font-weight: 300;
        color: rgba(0, 0, 0, 0.9);

        .product-details-price {
          font-size: 32px;
        }

        .product-details-fraction {
          font-size: 16px;
        }
      }

      .product-details-btn {
        width: 100%;
        height: 48px;

        margin-top: 32px;

        background: $blue;
        border-radius: 8px;

        display: flex;
        align-items: center;
        justify-content: center;

        font-size: 16px;
        font-weight: 500;
        color: #ffffff;
      }

      .product-details-about-product {
        margin-top: 32px;

        font-size: 14px;
        color: rgba(0, 0, 0, 0.9);

        strong {
          font-weight: 500;
        }

        ul {
          margin-top: 16px;
          padding-left: 16px;

          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          grid-gap: 8px;
        }
      }
    }
  }

  .product-details-section {
    width: 100%;

    padding-top: 64px;
    margin-top: 64px;
    border-top: 1px solid #eef0f3;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    grid-gap: 32px;

    .product-details-section-title {
      font-size: 20px;
      font-weight: 600;
      color: rgba(0, 0, 0, 0.9);
    }

    .product-details-section-list {
      width: 100%;

      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      grid-gap: 32px;

      .product-details-section-item {
        font-size: 14px;
        line-height: calc(14px * 1.5);
        color: rgba(0, 0, 0, 0.9);
      }
    }
  }
`;

export default function ProductDetails({ item }) {
  return (
    <Fragment>
      <NextSeo
        title={`Mercado Livre | ${item?.title}`}
        description={
          item?.description ||
          "Compre produtos com Frete Grátis no mesmo dia no Mercado Livre Brasil. Encontre milhares de marcas e produtos a preços incríveis."
        }
        openGraph={{
          title: `Mercado Livre | ${item?.title}`,
          description:
            item?.description ||
            "Compre produtos com Frete Grátis no mesmo dia no Mercado Livre Brasil. Encontre milhares de marcas e produtos a preços incríveis.",
          images: [
            {
              url: item?.thumbnail || "/mercado-livre-logo.jpg",
              width: 1950,
              height: 1950,
              alt: item?.title || "Mercado Livre Logo",
              type: "image/jpeg",
            },
          ],
        }}
      />
      <PageContainer>
        <PageWrapper>
          <div className="product-details-content">
            <img src={item?.thumbnail} alt={item?.title} />

            <span className="product-details-informations">
              <p className="product-details-condition-sold-quantity">
                {item?.condition} | {item?.sold_quantity}{" "}
                {item?.sold_quantity > 0 && item?.sold_quantity > 1
                  ? "vendidos"
                  : "vendido"}
              </p>

              <p className="product-details-title">{item?.title}</p>

              <span className="product-details-price-wrapper">
                <p className="product-details-price">
                  {
                    item?.price
                      .toLocaleString("pt-BR", {
                        style: "currency",
                        currency: item?.currency_id,
                        minimumFractionDigits: 2,
                      })
                      .split(",")[0]
                  }
                </p>
                <p className="product-details-fraction">
                  {
                    item?.price
                      .toLocaleString("pt-BR", {
                        style: "currency",
                        currency: item?.currency_id,
                        minimumFractionDigits: 2,
                      })
                      .split(",")[1]
                  }
                </p>
              </span>

              <a
                href={item?.permalink}
                target="_blank"
                rel="noreferrer"
                className="product-details-btn"
              >
                Comprar ahora
              </a>

              <div className="product-details-about-product">
                <strong>Lo que tenés que saber de este producto</strong>

                <ul>
                  <li>
                    {item?.accepts_mercadopago
                      ? "Acepta mercadopago"
                      : "No acepta mercadopago"}
                  </li>

                  {item?.shipping.free_shipping && <li>Envío gratuito</li>}

                  {item?.warranty && <li>{item?.warranty}</li>}
                </ul>
              </div>
            </span>
          </div>

          <div className="product-details-section">
            <h4 className="product-details-section-title">
              Descripción del producto
            </h4>

            <div className="product-details-section-list">
              <p className="product-details-section-item">
                {item?.description}
              </p>
            </div>
          </div>

          <div className="product-details-section">
            <h4 className="product-details-section-title">
              Información del vendedor
            </h4>

            <div className="product-details-section-list">
              <p className="product-details-section-item">
                <strong>Ciudad:</strong> {item?.seller_address.city.name}
              </p>
              <p className="product-details-section-item">
                <strong>Estado:</strong> {item?.seller_address.state.name}
              </p>
              <p className="product-details-section-item">
                <strong>País:</strong> {item?.seller_address.country.name}
              </p>
            </div>
          </div>

          <div className="product-details-section">
            <h4 className="product-details-section-title">Características</h4>

            <div className="product-details-section-list">
              {item?.attributes?.map((attribute) => (
                <p key={attribute.id} className="product-details-section-item">
                  <strong>{attribute.name}:</strong> {attribute.value_name}
                </p>
              ))}
            </div>
          </div>
        </PageWrapper>
      </PageContainer>
    </Fragment>
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
