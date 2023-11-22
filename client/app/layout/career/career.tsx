import React from "react";

const Career = () => {
  return (
    <div className="max-w-7xl w-full min-h-screen flex flex-col">
      <div className="w-full md:w-1/2 order-1  flex flex-col  items-start p-10 gap-8">
        <h3 className="text-4xl">We are to create possibility & success in your career!</h3>
        <p className="text-md text-gray-400">
          Many schools use the term “excellence” to highligth the school´s ambitions to help
          everyone achive their best
        </p>
        <ul className="list-disc">
          <li className="pb-2">We are to create possibility & success in your career</li>
          <li className="pb-2">Education is about creating leaders for tomorrow</li>
          <li className="pb-2">Educaction in continuing a proud tradition</li>
        </ul>
        <button className="yellow-btn">Read More</button>
      </div>
      <div className="w-full md:w-1/2 order-2   relative"></div>
    </div>
  );
};

export default Career;
