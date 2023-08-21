import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
          laboriosam reiciendis corrupti id ipsa minus obcaecati quo amet quasi
          itaque.
        </p>
        <br />
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
          molestias. Sapiente explicabo velit totam provident officia vel
          similique odio voluptas maiores at. Excepturi voluptatibus tempora
          repudiandae fuga facilis velit nostrum nemo nisi cumque debitis aut
          mollitia delectus ducimus, omnis temporibus odit quis quibusdam quae
          perspiciatis sit, nihil ut quo maiores?
        </p>
      </div>
    </div>
  );
};

export default About;
