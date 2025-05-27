"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Atualize o import para "next/navigation"
import { IoIosSearch } from "react-icons/io";

export default function Search() {
  const [search, setSearch] = useState("");
  const router = useRouter(); // Usando a versão do "next/navigation"

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    router.push(`/search/${search}`); 
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2 ml-[50px]">
      <input
        type="search"
        placeholder="Pesquisar"
        className="w-[600px] h-[40px] p-4 rounded-full bg-[#292929] text-[#ffffff] focus:outline-none"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      <button
        type="submit"
        disabled={!search}
        className="p-2 bg-[#3a7bd5] text-white rounded-full hover:opacity-85 disabled:opacity-60 flex items-center justify-center"
      >
        <IoIosSearch size={20} />
      </button>
    </form>
  );
}
