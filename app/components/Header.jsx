import React from "react";
import Link from "next/link";
import Search from "./Search";
import "../styles/header.css";

export default function Header() {
  return (
    <div className="header-container">
      <Link href="/" passHref>
        <h1 className="recommend">FILMES</h1>
      </Link>
      <Search />
    </div>
  );
}

