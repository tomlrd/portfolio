import React from "react";

function Main() {
  return (
    <div className="mx-80 my-8">
      <div className="grid grid-cols-2 gap-8">
        <div className="shadow-lg  rounded-lg p-6 card-light dark:card-dark ">
          <h2 className="text-xl font-semibold mb-4 text-[#d0662d]">Card 1</h2>
          <p className="text-grey-100">
            This is the content of the first card.
          </p>
        </div>
        <div className="shadow-lg rounded-lg p-6 card-light dark:card-dark">
          <h2 className="text-xl font-semibold mb-4 text-[#d0662d]">Card 2</h2>
          <p className="text-grey-100">
            This is the content of the second card.
          </p>
        </div>
        <div className="shadow-lg  rounded-lg p-6 card-light dark:card-dark">
          <h2 className="text-xl font-semibold mb-4 text-[#d0662d]">Card 3</h2>
          <p className="text-grey-100">
            This is the content of the third card.
          </p>
        </div>
        <div className="shadow-lg  rounded-lg p-6 card-light dark:card-dark">
          <h2 className="text-xl font-semibold mb-4 text-[#d0662d]">Card 4</h2>
          <p className="text-grey-100">
            This is the content of the fourth card.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;
