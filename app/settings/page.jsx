"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Header from "../../components/Header";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const languages = [
  {
    value: "pt-BR",
    label: "Português",
    flag: "/flags/br.svg",
  },
  {
    value: "en-US",
    label: "English",
    flag: "/flags/us.svg",
  },
  {
    value: "es-ES",
    label: "Español",
    flag: "/flags/es.svg",
  },
];

export default function SettingsPage() {
  const [theme, setTheme] = useState("system");
  const [language, setLanguage] = useState("");

  // Ao montar o componente, tenta recuperar o idioma salvo no localStorage
  useEffect(() => {
    const savedLang = localStorage.getItem("selectedLanguage");
    if (savedLang && languages.some((lang) => lang.value === savedLang)) {
      setLanguage(savedLang);
    } else {
      setLanguage("pt-BR"); // idioma padrão
    }
  }, []);

  // Sempre que o idioma mudar, salva no localStorage
  useEffect(() => {
    if (language) {
      localStorage.setItem("selectedLanguage", language);
    }
  }, [language]);

  // Encontra o idioma selecionado para mostrar na UI
  const selectedLanguage = languages.find((lang) => lang.value === language);

  return (
    <>
      <main className="min-h-screen dark:bg-gray-900 text-white dark:text-white">
        <Header />
        <div className="container mx-auto mt-[80px] px-4 py-6 flex justify-center">
          {/* Content */}
          <section className="w-full lg:w-3/4 bg-[#292929] dark:bg-gray-800 p-6 rounded-lg shadow-md space-y-12">
            {/* Tema */}
            <div id="tema">
              <h2 className="text-2xl font-bold mb-4">Tema</h2>
              <p className="mb-4">Escolha o tema da interface.</p>
              <div className="flex gap-6">
                {["light", "dark"].map((option) => (
                  <label
                    key={option}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="theme"
                      value={option}
                      checked={theme === option}
                      onChange={() => setTheme(option)}
                      className="form-radio text-blue-600"
                    />
                    {option === "light" ? "Claro" : "Escuro"}
                  </label>
                ))}
              </div>
            </div>

            {/* Linguagem */}
            <div id="linguagem">
              <h2 className="text-2xl font-bold mb-4">Linguagem</h2>
              <p className="mb-4">Selecione seu idioma preferido.</p>
              <Select value={language} onValueChange={setLanguage}>
                <SelectTrigger className="w-[220px] bg-[#1c1c1f] border-gray-700">
                  <div className="flex items-center gap-2">
                    {selectedLanguage && (
                      <>
                        <Image
                          src={selectedLanguage.flag}
                          alt={selectedLanguage.label}
                          width={20}
                          height={20}
                          className="rounded-sm"
                        />
                        <span>{selectedLanguage.label}</span>
                      </>
                    )}
                  </div>
                </SelectTrigger>
                <SelectContent className="bg-[#1c1c1f] border-gray-700 text-white">
                  {languages.map(({ value, label, flag }) => (
                    <SelectItem
                      key={value}
                      value={value}
                      className="flex items-center gap-2 [&_span]:flex [&_span]:items-center [&_span]:gap-2"
                    >
                      <Image
                        src={flag}
                        alt={label}
                        width={20}
                        height={20}
                        className="rounded-sm"
                      />
                      <span className="inline-block">{label}</span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
