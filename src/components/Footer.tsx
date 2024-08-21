import React from "react";
import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-orange-500 text-white text-center py-1">
      <div className="flex items-baseline justify-center ">
        <p className="flex items-center">
          © 2024 made by myself with{" "}
          <Heart color="red" size={15} className="mx-1 fill-red-600 " /> All
          rights reserved.
        </p>
      </div>
    </footer>
  );
}
