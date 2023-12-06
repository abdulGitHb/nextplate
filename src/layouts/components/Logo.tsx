"use client";

import config from "@/config/config.json";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Logo = ({ src }: { src?: string }) => {
  // destructuring items from config object
  const {
    logo,
    logo_text,
    title,
  }: {
    logo: string;
    logo_text: string;
    title: string;
  } = config.site;

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const resolvedLogo =
    mounted && logo;
  const logoPath = src ? src : resolvedLogo;

  return (
    <Link href="/" className="navbar-brand inline-block ">
      {logoPath ? (
        <Image
          width={220}
          height={70}
          src={logo}
          alt={title}
          priority
        />
      ) : logo_text ? (
        logo_text
      ) : (
        title
      )}
    </Link>
  );
};

export default Logo;
