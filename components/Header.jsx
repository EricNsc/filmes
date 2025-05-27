"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Search from "./Search";
import "../styles/header.css";
import { CgProfile } from "react-icons/cg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "./ui/dropdown-menu";

import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";

export default function Header({ genre }) {
  const router = useRouter();

  const handleGenreChange = (value) => {
    if (value) {
      router.push(`/?genre=${value}`);
    }
  };

  return (
    <div className="header-container">
      <Link href="/" passHref>
        <h1 className="recommend">FILMES</h1>
      </Link>
      <Search />

      <div className="ml-auto flex items-center gap-6">
        {/* Seletor de Gêneros com ToggleGroup */}
        <ToggleGroup
          type="single"
          value={genre}
          onValueChange={handleGenreChange}
          className="flex items-center border border-[#3a7bd557] rounded-full px-2 py-1"
        >
          <ToggleGroupItem
            value="fetchTrending"
            className="text-sm text-white data-[state=on]:bg-[#3a7bd5] data-[state=on]:text-white px-4 py-1 rounded-2xl h-8 hover:bg-[#3a7bd557] hover:text-white"
          >
            Populares
          </ToggleGroupItem>
          <ToggleGroupItem
            value="fetchTopRated"
            className="text-sm text-white data-[state=on]:bg-[#3a7bd5] data-[state=on]:text-white px-4 py-1 rounded-2xl h-8 hover:bg-[#3a7bd557] hover:text-white"
          >
            Melhores Avaliados
          </ToggleGroupItem>
        </ToggleGroup>

        {/* Dropdown do perfil */}
        <div className="relative">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="w-10 h-10">
                <AvatarImage
                  src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGhqdGs3M3FkZXhrNGdzemZ3eWthc2h5ZHFvbW1xZ2NvNmEzc3FjNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Qt3UEncdFPDevHxbSY/giphy.gif"
                  alt="Raccoon"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-48 bg-[#000] border border-[#3a3a3a00] shadow-lg rounded-lg p-2"
              sideOffset={5}
            >
              <Link href="/settings" passHref>
                <DropdownMenuItem className="cursor-pointer focus:bg-white focus:text-black rounded-sm">
                  Configurações
                </DropdownMenuItem>
              </Link>
              <DropdownMenuItem className="cursor-pointer focus:bg-white focus:text-black rounded-sm">
                Sair
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}
