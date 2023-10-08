import { useState } from "react";
import styles from "@/styles/Cro.module.css";

const MegaMenu = () => {
  const [isHovered, setIsHovered] = useState(0);

  return (
    <div>
      <nav className="flex relative h-16">
        <div
          onMouseEnter={() => setIsHovered(1)}
          onMouseLeave={() => setIsHovered(0)}
        >
          ok 1
        </div>
        <div
          onMouseEnter={() => setIsHovered(2)}
          onMouseLeave={() => setIsHovered(0)}
        >
          ok 2
        </div>


        <div className="absolute inset-x-0 
         mt-40 ">
          <div
            className={`p-4 ${
              isHovered === 1 ? "bg-blue-500 " : "bg-gray-300"
            }`}
          >
            <p>Hover me!</p>
          </div>

          <div
            className={`p-4 ${isHovered === 2 ? "bg-red-500" : "bg-black-300"}`}
          >
            <p>Hover me!</p>
          </div>
        </div>
       
      </nav>
    </div>

  );
};

export default MegaMenu;
