"use client";
import { useEffect, useRef, useState } from "react";
import { MagicTabSelect } from "react-magic-motion";
import { gradesContent } from "@/app/utils";
import arrow2 from "@/public/assets/svg/arrow2.svg";
import Image from "next/image";
import highlight2 from "@/public/assets/svg/highlight2.svg";
import sparkle3 from "@/public/assets/svg/sparkle3.png";
import star1 from "@/public/assets/svg/star1.png";
import ModalCourses from "@/app/components/modal/courses-detail";
import Link from "next/link";

const Cursos = () => {
  const [activeTab, setActiveTab] = useState("Todos");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedGrade, setSelectedGrade] = useState(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const openModal = (grade: any) => {
    setSelectedGrade(grade);
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    const handleCloseModal = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        closeModal();
      }
    };

    if (modalOpen) {
      document.addEventListener("mousedown", handleCloseModal);
    } else {
      document.removeEventListener("mousedown", handleCloseModal);
    }

    return () => {
      document.removeEventListener("mousedown", handleCloseModal);
    };
  }, [modalOpen]);

  const tabs = ["Todos", "Starter", "Beginner", "Prekid", "Kids", "Teens", "F.C.E", "Adults"];

  const filteredContent = gradesContent.filter(
    (content) => content.category.toLowerCase() === activeTab.toLowerCase()
  );
  const renderTabContent = () => {
    if (activeTab === "Todos") {
      return (
        <div className=" w-full max-w-7xl flex flex-wrap gap-4 justify-center relative">
          <Image
            src={highlight2}
            alt="highlight2"
            width={200}
            height={0}
            className="absolute -top-32 -right-24"
          />
          <Image
            src={sparkle3}
            alt="sparkle3"
            width={50}
            height={0}
            className="absolute -top-32 right-48"
          />
          <Image
            src={star1}
            alt="start"
            width={50}
            height={0}
            className="absolute -bottom-32 left-20"
          />
          <div className="w-6 h-6 bg-custom-yellow absolute -right-8 -bottom-20 rounded-full"></div>
          <div className="w-4 h-4 bg-custom-green absolute right-20 -bottom-24 rounded-full"></div>
          <div className="w-6 h-6 bg-custom-purple absolute right-0 -bottom-40 rounded-full"></div>
          {modalOpen && selectedGrade && (
            <ModalCourses grade={selectedGrade} onClose={closeModal} modalOpen={modalOpen} />
          )}
          {gradesContent.map((content, index) => (
            <div
              key={index}
              className="border rounded-2xl w-56 h-80 transition duration-300 hover:-translate-y-[3px] hover:shadow-xl shadow-md hover:shadow-black/30 cursor-pointer"
              onClick={() => openModal(content)}
            >
              <div className="w-full h-3/5 p-2 rounded-2xl border bg-pink-500/20 relative">
                {" "}
                <Image
                  src={content?.img}
                  alt={content.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-2xl"
                />
              </div>
              <div className="flex flex-col justify-center h-2/5 p-2">
                {" "}
                <h3 className="text-red-700 h-1/2">{content.title}</h3>
                <p className="text-gray-400 text-sm h-1/2">
                  {content.description.length > 50
                    ? `${content.description.slice(0, 50)}...`
                    : content.description}
                </p>
                {/* Otros elementos a renderizar */}
              </div>
            </div>
          ))}
        </div>
      );
    }

    return (
      <div className=" w-full max-w-7xl flex flex-wrap gap-4 justify-center relative">
        <Image
          src={highlight2}
          alt="highlight2"
          width={200}
          height={0}
          className="absolute -top-32 -right-24"
        />
        <Image
          src={sparkle3}
          alt="sparkle3"
          width={50}
          height={0}
          className="absolute -top-32 right-48"
        />
        <Image
          src={star1}
          alt="start"
          width={50}
          height={0}
          className="absolute -bottom-32 left-20"
        />{" "}
        <div className="w-6 h-6 bg-custom-yellow absolute -right-8 -bottom-20 rounded-full"></div>
        <div className="w-4 h-4 bg-custom-green absolute right-20 -bottom-24 rounded-full"></div>
        <div className="w-6 h-6 bg-custom-purple absolute right-0 -bottom-40 rounded-full"></div>
        {modalOpen && selectedGrade && (
          <ModalCourses grade={selectedGrade} onClose={closeModal} modalOpen={modalOpen} />
        )}
        {filteredContent.map((content, index) => (
          <div
            key={index}
            className="border rounded-2xl w-56 h-80 transition duration-300 hover:-translate-y-[3px] hover:shadow-xl shadow-md hover:shadow-black/30 cursor-pointer"
            onClick={() => openModal(content)}
          >
            <div className="w-full h-3/5 p-2 rounded-2xl border bg-pink-500/20 relative">
              {" "}
              <Image
                src={content?.img}
                alt={content.title}
                layout="fill"
                objectFit="cover"
                className="rounded-2xl"
              />
            </div>
            <div className="flex flex-col justify-center h-2/5 p-2">
              {" "}
              <h3 className="text-red-700 h-1/2">{content.title}</h3>
              <p className="text-gray-400 text-sm h-1/2">
                {content.description.length > 50
                  ? `${content.description.slice(0, 50)}...`
                  : content.description}
              </p>
              {/* Otros elementos a renderizar */}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const tabsComponents = tabs.map((text) => (
    <div key={`tab-${text}`} className="w-full ">
      <button
        type="button"
        onClick={() => setActiveTab(text)}
        className={`py-1 px-2 rounded-full focus:bg-gray-100 text-sm md:text-base ${
          activeTab === text ? "font-bold" : ""
        }`}
      >
        {text}
        {activeTab === text && (
          <div style={{ position: "relative", transform: "translateY(3px)" }}>
            <MagicTabSelect id="underline" transition={{ type: "spring", bounce: 0.3 }}>
              <div
                style={{
                  width: "100%",
                  height: "0.15rem",
                  backgroundColor: "black",
                  position: "absolute",
                }}
              />
            </MagicTabSelect>
          </div>
        )}
      </button>
    </div>
  ));

  return (
    <section className="w-full md:max-w-7xl min-h-screen flex overflow-hidden md:mx-auto justify-center py-36 mb-32 ">
      <div className="h-full w-full flex flex-col  gap-10 max-w-7xl">
        <nav className="grid grid-cols-2 text-center md:flex md:max-w-4xl md:mx-auto  w-full  font-laila">
          {tabsComponents}
        </nav>
        <div className=" mx-8 ">
          <h4 className="text-custom-purple font-laila">cursos</h4>
          <span className="text-4xl relative pb-8 font-laila">
            {" "}
            {activeTab}
            <Image
              src={arrow2}
              alt="arrow2"
              width={0}
              height={0}
              className="absolute top-4 -right-16 w-16"
            />
          </span>
          <div className="mt-8">{renderTabContent()}</div>
        </div>
      </div>
    </section>
  );
};

export default Cursos;
