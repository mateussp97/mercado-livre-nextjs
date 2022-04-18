import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import * as SC from "./styled";

export default function Header() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  return (
    <SC.HeaderContainer data-testid="header-container">
      <SC.HeaderWrapper>
        <Link href="/">
          <img
            src="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.18.9/mercadolibre/logo-pt__large_plus.png"
            alt="Mercado Livre Logo"
            className="logo"
          />
        </Link>
        <span className="input-wrapper">
          <input
            role="search"
            type="text"
            placeholder="Buscar productos, marcas y más..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            role="button"
            onClick={() => router.push(`/?search=${search}`)}
          >
            <FiSearch />
          </button>
        </span>
      </SC.HeaderWrapper>
    </SC.HeaderContainer>
  );
}
