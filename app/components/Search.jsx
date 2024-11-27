import React from "react";
import { IoIosSearch } from "react-icons/io";

export default function Search() {
  return (
    <div>

        <input
          icon={<IoIosSearch />}
          type="search"
          placeholder="Pesquisar"
          className="w-[600px] h-[25px] p-4 rounded-full bg-[#406E8E]"
        />
      </div>
  );
}
