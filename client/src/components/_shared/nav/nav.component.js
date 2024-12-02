import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";

// I18N
import { useTranslation } from "next-i18next";

export default function NavbarComponent() {
  const { t } = useTranslation("common");
  const router = useRouter();

  return (
    <nav className="absolute top-0 left-0 right-0 flex justify-between px-12 py-6">
      <img
        src="/img/logo.png"
        draggable={false}
        alt="logo"
        className="max-h-[30px]"
      />

      <ul className="flex items-center gap-12 text-creamy">
        <li>Link 1</li>

        <li>Link 2</li>

        <li>Link 3</li>

        <li>Link 4</li>
        
        <button className="bg-orange text-darkGreen rounded-2xl px-4 py-2">
          Button
        </button>
      </ul>
    </nav>
  );
}
