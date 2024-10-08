import type { Metadata } from "next";
import "../globals.css";
import { SideBar } from "@/components/layout/SideBar";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid grid-cols-[300px_minmax(0px,1fr)]">
      <SideBar />
      {children}
    </div>
  );
}
