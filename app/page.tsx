"use client";
import Image from "next/image";
import Header from "@/app/components/header";
import Nav from "@/app/components/nav";
import Footer from "@/app/components/footer";
import Middle from "@/app/components/middle";
import Team from "@/app/components/team";
import Dashboard from "@/app/components/dashboard/main";
import { useUser } from "@clerk/nextjs";

export default function Home() {
  const { user } = useUser();
  
  return (
    <div className="">
      {!user ? (
        <>
          <Header />
          <Middle />
          <Team />
          <Footer />
        </>
      ) : (
        <Dashboard />
      )}
    </div>
  );
}
