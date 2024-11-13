"use client";
import { useState, useEffect } from "react";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import Middle from "@/app/components/middle";
import Team from "@/app/components/team";
import Dashboard from "@/app/components/dashboard/main";
import { useUser } from "@clerk/nextjs";
import Loading from "./components/loading";

export default function Home() {
  const { user, isLoaded } = useUser();

  // Show loading spinner until Clerk and all required data are fully loaded
  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
        <Loading />
      </div>
    );
  }

  return (
    <div>
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
