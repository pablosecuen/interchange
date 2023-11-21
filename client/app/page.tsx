import Image from "next/image";
import Landing from "./layout/landing";
import Trusted from "./layout/trusted-companies";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24 overflow-x-hidden">
      <Landing />
      <Trusted />
    </main>
  );
}
