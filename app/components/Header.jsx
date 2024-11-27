import React from 'react';
import Search from './Search';
import '../styles/header.css';
import { CgProfile } from "react-icons/cg";

export default function Header() {
  return (
    <div className="header-container">
      <h1 className="recommend">RECOMMEND</h1>
      <Search />
      <div className="profile">
        <span>Perfil</span>
        <div className="profile-icon">
          <CgProfile size={30} color="#406E8E" />
        </div> 
      </div>
    </div>
  );
}
