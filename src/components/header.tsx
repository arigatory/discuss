import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import HeaderAuth from "./header-auth";

export default function Header() {
  return (
    <Navbar className=" shadow mb-6">
      <NavbarBrand>
        <Link href={"/"} className=" font-bold">
          Discuss
        </Link>
      </NavbarBrand>
      <NavbarContent justify="center">Search</NavbarContent>
      <NavbarContent justify="end">
        <HeaderAuth />
      </NavbarContent>
    </Navbar>
  );
}