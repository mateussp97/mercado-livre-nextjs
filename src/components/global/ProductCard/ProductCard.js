import Link from "next/link";
import React from "react";
import { MdOutlineLocalShipping } from "react-icons/md";
import * as SC from "./styled";

export default function ProductCard({
  id,
  title,
  price,
  fraction,
  picture,
  condition,
  free_shipping,
  sold_quantity,
}) {
  return (
    <Link href={`/items/${id}`}>
      <SC.ProductCardContainer>
        <img className="product-picture" src={picture} alt={title} />
        <div className="product-informations">
          <span className="product-status-wrapper">
            <span className="product-price-wrapper">
              <p className="product-price">{price}</p>
              <p className="product-fraction">{fraction}</p>
            </span>
            {free_shipping && (
              <span className="product-icon-wrapper">
                <MdOutlineLocalShipping />
              </span>
            )}
          </span>
          <p className="product-title">{title}</p>
          <p className="product-condition-sold-quantity">
            {condition} | {sold_quantity}{" "}
            {sold_quantity > 0 && sold_quantity > 1 ? "vendidos" : "vendido"}
          </p>
        </div>
      </SC.ProductCardContainer>
    </Link>
  );
}
