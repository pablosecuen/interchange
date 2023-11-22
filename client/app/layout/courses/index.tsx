import Image from "next/image";
import React from "react";
import sparkles from "@/public/assets/svg/sparkle2.svg";
import { courses } from "@/app/utils";
import Card from "@/app/components/cards/courses-card";


const Courses = () => {
  return (
    <section className="min-h-screen w-screen flex flex-col items-center relative gap-20">
      <div className="w-6 h-6 bg-custom-yellow absolute right-96 top-32 rounded-full"></div>
      <div className="w-4 h-4 bg-custom-purple absolute left-96 top-10 rounded-full"></div>
      <div className="w-6 h-6 bg-custom-green absolute left-52 top-32 rounded-full"></div>
      <h2 className="text-5xl font-bold w-[600px]  text-center relative">
        <Image
          src={sparkles}
          alt="sparkles"
          width={0}
          height={0}
          className="absolute -left-28 -top-24"
        />
        The best place to learn, explore our <span className="text-custom-purple">courses</span>
      </h2>
      <div className="max-w-7xl w-full  flex gap-10 justify-center">
        {courses.map((course) => (
          <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4" key={course.title}>
            <Card course={course} />
          </div>
        ))}
      </div>
      <div>
        <button className="yellow-btn">View all courses</button>
      </div>
    </section>
  );
};

export default Courses;
