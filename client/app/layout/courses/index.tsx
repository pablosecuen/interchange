import Image from "next/image";
import React from "react";
import sparkles from "@/public/assets/svg/sparkle2.svg";
import { courses } from "@/app/utils";
import Card from "@/app/components/cards/courses-card";
import Link from "next/link";

const Courses = () => {
  return (
    <section className="min-h-[80vh] w-screen max-w-screen overflow-x-hidden flex flex-col items-center relative gap-20 ">
      <div className="w-6 h-6 bg-custom-yellow absolute right-96 top-32 rounded-full"></div>
      <div className="w-4 h-4 bg-custom-purple absolute left-96 top-10 rounded-full"></div>
      <div className="w-6 h-6 bg-custom-green absolute left-52 top-32 rounded-full"></div>
      <h2 className="md:text-5xl font-bold md:w-[650px] text-2xl border- text-center relative font-laila">
        <Image
          src={sparkles}
          alt="sparkles"
          width={0}
          height={0}
          className="absolute -left-28 -top-24"
        />
        El mejor lugar para aprender, explore nuestros
        <span className="text-custom-purple"> cursos</span>
      </h2>
      <div className="max-w-7xl w-full  flex flex-col md:flex-row  gap-10 justify-center -mb-8 ">
        {courses.map((course) => (
          <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 " key={course.title}>
            <Card course={course} />
          </div>
        ))}
      </div>
      <div>
        <Link href="/cursos">
          <button className="yellow-btn mx-auto">Ver todos los cursos</button>
        </Link>
      </div>
    </section>
  );
};

export default Courses;
