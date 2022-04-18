import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("<Header />", () => {
  it("should render the Header component", () => {
    render(<Header />);
    expect(screen.getByTestId("header-container")).toHaveStyle({
      width: "100%",
      padding: "16px 32px",
      background: "#ffe600",
    });
  });

  it("should render the Logo element inside Header component", () => {
    render(<Header />);
    expect(screen.getByRole("img")).toHaveAttribute(
      "src",
      "https://http2.mlstatic.com/frontend-assets/ui-navigation/5.18.9/mercadolibre/logo-pt__large_plus.png"
    );
    expect(screen.getByRole("img")).toHaveAttribute(
      "alt",
      "Mercado Livre Logo"
    );
  });

  it("should render the input element inside Header component", () => {
    render(<Header />);
    expect(screen.getByRole("search")).toHaveAttribute("type", "text");
    expect(screen.getByRole("search")).toHaveAttribute(
      "placeholder",
      "Buscar productos, marcas y más..."
    );
  });

  it("should render the button element inside Header component", () => {
    render(<Header />);
    expect(screen.getByRole("search")).toBeInTheDocument();
  });
});
