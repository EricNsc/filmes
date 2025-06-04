"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { IoIosSearch } from "react-icons/io";

export default function Search() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    router.push(`/search/${search}`);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2 ml-[15px] relative">
      <div className="relative">
        <input
          type="search"
          placeholder="Pesquisar"
          className="w-[400px] h-[40px] pl-6 pr-16 rounded-xl bg-[#2a2a2a] text-white focus:outline-none border-2 border-transparent focus:border-[#5A4FCF] placeholder-[#949494] transition-all"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <button
          type="submit"
          disabled={!search}
          className="absolute right-3 top-1/2 -translate-y-1/2 p-2  text-white rounded-full  disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center"
        >
          <IoIosSearch size={22} className="shrink-0" />
        </button>
      </div>
    </form>
  );
}