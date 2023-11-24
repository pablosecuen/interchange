"use client";
import { useState } from "react";
import { MagicTabSelect } from "react-magic-motion";
import { gradesContent } from "@/app/utils";
import arrow2 from "@/public/assets/svg/arrow2.svg";
import Image from "next/image";

const Grados = () => {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = ["All", "Starter", "Beginner", "Prekid", "Kids", "Teens", "F.C.E", "Adults"];

  const filteredContent = gradesContent.filter(
    (content) => content.category.toLowerCase() === activeTab.toLowerCase()
  );
  const renderTabContent = () => {
    if (activeTab === "All") {
      return (
        <div className=" w-full max-w-7xl flex flex-wrap gap-4 justify-center ">
          {gradesContent.map((content, index) => (
            <div key={index} className="border rounded-2xl w-56 h-72">
              <div className="w-full h-3/5 p-2 rounded-2xl border bg-pink-500"> </div>
              <div className="flex flex-col justify-center h-2/5 p-2">
                {" "}
                <h3 className="text-red-700 h-1/2">{content.title}</h3>
                <p className="text-gray-400 text-sm h-1/2">{content.description}</p>
                {/* Otros elementos a renderizar */}
              </div>
            </div>
          ))}
        </div>
      );
    }

    return (
      <div className=" w-full max-w-7xl flex flex-wrap gap-4 justify-center ">
        {filteredContent.map((content, index) => (
          <div key={index} className="border rounded-2xl w-56 h-72">
            <div className="w-full h-3/5 p-2 rounded-2xl border bg-pink-500"></div>
            <div className="flex flex-col justify-center h-2/5 p-2">
              {" "}
              <h3 className="text-red-700 h-1/2">{content.title}</h3>
              <p className="text-gray-400 text-sm h-1/2">{content.description}</p>
              {/* Otros elementos a renderizar */}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const tabsComponents = tabs.map((text) => (
    <nav key={`tab-${text}`} className="w-full ">
      <button
        type="button"
        onClick={() => setActiveTab(text)}
        className={`py-1 px-2 rounded-full focus:bg-gray-100 ${
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
    </nav>
  ));

  return (
    <section className="w-full max-w-7xl min-h-screen flex mx-auto justify-center py-36 mb-32 ">
      <div className="h-full w-full flex flex-col  gap-10 max-w-7xl">
        <div className="flex px-20 ">{tabsComponents}</div>
        <div className=" mx-8 ">
          <h4 className="text-custom-purple ">courses</h4>
          <span className="text-4xl relative pb-8">
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

export default Grados;
