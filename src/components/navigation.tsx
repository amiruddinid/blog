"use client";

import { useTheme } from "next-themes";
import { Quicksand } from 'next/font/google'

const qs = Quicksand({ subsets: ['latin'] })

export const Header = () => {
  const { theme, setTheme } = useTheme();
  const handleTheme = () => {
    console.log(theme)
    setTheme(theme === "dark" ? "light" : "dark")
  }
  return (
    <header className="container mx-auto flex items-center justify-between p-5">
      <h1 className={`${qs.className} group cursor-pointer flex items-center`}>
        A
        <span className="max-w-0 overflow-hidden transition-all ease-in-out group-hover:max-w-full group-hover:mr-1">
          miruddin
        </span>
        <b>
          I
          <span className="max-w-0 inline-block align-bottom overflow-hidden transition-all ease-in-out group-hover:max-w-full">
            rsyad
          </span>
        </b>
        .
      </h1>
      <button
        className="dark:invert-0 invert"
        type="button"
        onClick={() => handleTheme()}
      >
        💡
      </button>
    </header>
  );
};

export const Footer = () => (
  <footer className="container mx-auto">
    <h5>Follow Me!</h5>
  </footer>
);
