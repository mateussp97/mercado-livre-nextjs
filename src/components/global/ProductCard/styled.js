import styled from "@emotion/styled";

export const ProductCardContainer = styled.div`
  padding: 24px;

  border-bottom: 1px solid #eef0f3;

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  grid-gap: 16px;

  cursor: pointer;

  .product-picture {
    width: 180px;
    height: 180px;

    border: 1px solid #eef0f3;
    border-radius: 8px;

    object-fit: contain;
    object-position: center;
  }

  .product-informations {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    .product-status-wrapper {
      margin-bottom: 16px;

      display: flex;
      align-items: center;
      justify-content: flex-start;
      grid-gap: 16px;

      .product-price-wrapper {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        grid-gap: 2px;

        font-weight: 300;
        color: rgba(0, 0, 0, 0.9);

        .product-price {
          font-size: 24px;
        }

        .product-fraction {
          font-size: 12px;
        }
      }

      .product-icon-wrapper {
        width: 24px;
        height: 24px;

        display: flex;
        align-items: center;
        justify-content: center;

        background: #1ed760;

        border-radius: 50%;
      }
    }

    .product-title {
      font-size: 20px;
      font-weight: 600;
      color: rgba(0, 0, 0, 0.9);
    }

    .product-condition-sold-quantity {
      margin-top: 8px;

      font-size: 16px;
      font-weight: 400;
      color: rgba(0, 0, 0, 0.55);
      text-transform: capitalize;
    }
  }
`;
