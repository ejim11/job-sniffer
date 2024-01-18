"use client";
import Register from "@/components/Register";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-color-white flex w-full h-[100vh]">
      <div className="bg-color-black-1 w-1/2"></div>
      <div className="w-1/2 px-[7rem] flex flex-col items-center justify-center">
        <h1 className="mb-[5rem] font-medium text-[3rem]">Job Sniffer</h1>
        <Register />
        <div className="mt-[2rem]">
          <p>
            Already registered?{" "}
            <span className="text-[#5c7cfa] cursor-pointer">Login</span>
          </p>
        </div>
      </div>
    </main>
  );
}
