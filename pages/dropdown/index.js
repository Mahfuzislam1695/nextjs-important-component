


import { useState } from "react";
import styles from "@/styles/Cro.module.css";

const MegaMenu = () => {
  const [isHovered, setIsHovered] = useState(0);

  return (
    <div className="px-8">

      <nav className="flex relative h-16">
        <div
          className="cursor-pointer"
          onMouseEnter={() => setIsHovered(1)}
          onMouseLeave={() => setIsHovered(0)}
        >
          ok 1
        </div>
        <div
          className="cursor-pointer"
          onMouseEnter={() => setIsHovered(2)}
          onMouseLeave={() => setIsHovered(0)}
        >
          ok 2
        </div>

        {isHovered === 1 && (
          <div
            className="absolute inset-x-0  top-8"
            onMouseEnter={() => setIsHovered(1)}
            onMouseLeave={() => setIsHovered(0)}
          >
            <div
              className={`p-4 ${isHovered === 1 ? "bg-blue-500 " : "bg-gray-300"
                }`}
            >
              <p>Ok 1 Hover me!</p>
            </div>
          </div>
        )}

        {isHovered === 2 && (
          <div
            className="absolute inset-x-0 mt-8"
            onMouseEnter={() => setIsHovered(2)}
            onMouseLeave={() => setIsHovered(0)}
          >
            <div
              className={`p-4 ${isHovered === 2 ? "bg-red-500" : "bg-black-300"
                }`}
            >
              <p>Hover me! Ok 2</p>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default MegaMenu;

