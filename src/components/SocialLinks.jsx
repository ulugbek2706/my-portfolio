import React from "react";
import { socialLinks } from "../constans/const";

const SocialLinks = () => {
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {socialLinks.map((item) => (
          <li
          key={item.id}
            className={`flex justify-between items-center
         w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300`}
          >
            <a
              href={item.href}
              className="flex justify-between items-center w-full text-white"
              download={item.download}
              target="_blan"
            >
              {item.child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
