import Link from "next/link";
import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Link href="/" className="absolute top-2 left-2">
        Home
      </Link>
      {children}
    </>
  );
}
