import React, { useState } from "react";

function UselessButton() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button
        onClick={() => setCount((count) => count + 1)}
        className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 
          focus:outline-none focus:ring focus:ring-violet-300 text-white text-xl font-bold py-4 px-8 rounded m-10"
      >
        count is {count}
      </button>
    </>
  );
}
export default UselessButton;
