import { MessageCircle } from "lucide-react";

export function WhatsFab() {
  return (
    <a
      href="#contato"
      aria-label="Fale conosco"
      className="fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-brand text-white shadow-xl shadow-brand-dark/30 transition hover:scale-105 hover:bg-brand-dark"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
