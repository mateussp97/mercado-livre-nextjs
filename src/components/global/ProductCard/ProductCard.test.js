import { render, screen } from "@testing-library/react";
import ProductCard from "./ProductCard";

describe("<ProductCard />", () => {
  it("should render the ProductCard component", () => {
    render(<ProductCard />);
    expect(screen.getByTestId("product-card-container")).toHaveStyle({
      padding: "24px",
      "border-bottom": "1px solid #eef0f3",
      display: "flex",
      "align-items": "flex-start",
      "justify-content": "flex-start",
      // "grid-gap": "16px",
      cursor: "pointer",
    });
  });

  it("should render the img element inside ProductCard component", () => {
    render(
      <ProductCard
        id={"MLA914258038"}
        title={"Apple iPhone 11 (128 Gb) - Blanco"}
        price={1750}
        fraction={50}
        picture={
          "http://http2.mlstatic.com/D_796892-MLA46114829828_052021-I.jpg"
        }
        condition={"new"}
        free_shipping
        sold_quantity={5}
      />
    );
    expect(screen.getByRole("img")).toHaveAttribute(
      "src",
      "http://http2.mlstatic.com/D_796892-MLA46114829828_052021-I.jpg"
    );
    expect(screen.getByRole("img")).toHaveAttribute(
      "alt",
      "Apple iPhone 11 (128 Gb) - Blanco"
    );
  });
});
