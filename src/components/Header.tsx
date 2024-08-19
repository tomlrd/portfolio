import Gltf from "./Gltf";
import Darkmode from "./Darkmode";

export default function Header() {
  return (
    <header className="">
      <div className="flex justify-items-center justify-between px-4 p- mx-80 orange absolute z-10">
        <Darkmode />
        <button
          className="
        border-solid border-2 
        m-2 px-4 py-2
         text-white 
        font-semibold rounded-md 
        shadow-lg 
        transition duration-100 ease-in-out 
        transform 
        hover: hover:scale-105
        active: active:scale-95
        focus:outline-none focus:ring-2 focus:ring-white-300  focus:ring-opacity-50
      "
        >
          ENG
        </button>
      </div>
      <div className="bg-gradient-to-b from-[rgb(var(--background-start-rgb))] to-[rgb(var(--background-end-rgb))]">
        <Gltf />
      </div>
    </header>
  );
}
