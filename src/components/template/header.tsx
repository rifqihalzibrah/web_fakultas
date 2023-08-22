import React from "react";

import Link from "next/link";
import Image from "next/image";

import { BsWhatsapp, BsYoutube, BsInstagram, BsFacebook } from "react-icons/bs";

export default function Header() {
  return (
    <div className="container mx-auto px-20">
      <div className="inline-flex items-center p-2">
        <a href="#" className="mr-2">
          <BsYoutube size={16} />
        </a>
        <a href="#" className="mr-2 ml-4">
          <BsInstagram size={16} />
        </a>
        <a href="#" className="mr-2 ml-4">
          <BsFacebook size={16} />
        </a>
        <a href="#" className="mr-2 ml-4">
          <BsWhatsapp size={16} />
        </a>
      </div>
    </div>
  );
}
