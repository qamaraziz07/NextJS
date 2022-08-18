import React from "react";
import Nav from "../Components/Nav/Nav";

export default function DefaultLayout({ children }: any) {
  return (
    <>
      <Nav />
      <main>{children}</main>
    </>
  );
}
