import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";

import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";

import { Link } from "react-router-dom";
const PortFolio = () => {
  const portfolios = [
    {
      id: 1,
      src: arrayDestruct,
      demo: "https://github.com/DicE-007/CryptoBase",
      link: "https://cryptobase1975.netlify.app",
    },
    {
      id: 2,
      src: reactParallax,
      demo: "https://github.com/DicE-007/crownClothing",
      link: "https://visionary-elf-7e3511.netlify.app",
    },
    {
      id: 3,
      src: navbar,
      demo: "https://github.com/DicE-007/todoapp",
      link: "https://todoapp71713.netlify.app",
    },
    {
      id: 4,
      src: reactSmooth,
      demo: "https://github.com/DicE-007/asignment",
      link: "https://spontaneous-maamoul-cc6077.netlify.app",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo, link }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <Link to={demo}>Demo</Link>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <Link to={link}>Link</Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortFolio;
