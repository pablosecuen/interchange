import Landing from "./layout/landing";
import Trusted from "./layout/trusted-companies";
import Courses from "./layout/courses";
import Career from "./layout/career/career";
import { Banner } from "./components/footer/banner";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24 overflow-x-hidden">
      <Landing />
      <Trusted />
      <Courses />
      <Career />
      <Banner />
    </main>
  );
}
