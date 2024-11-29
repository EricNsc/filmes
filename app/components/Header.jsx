import React from "react";
import Link from "next/link";
import Search from "./Search";
import "../styles/header.css";
import { CgProfile } from "react-icons/cg";

export default function Header() {
  return (
    <div className="header-container">
      <Link href="/" passHref>
        <h1 className="recommend">FILMES</h1>
      </Link>
      <Search />
      <div className="profile">
        <span>Perfil</span>
        <div className="profile-icon">
          <CgProfile size={40} color="#406E8E" />
        </div>
      </div>
    </div>
  );
}
