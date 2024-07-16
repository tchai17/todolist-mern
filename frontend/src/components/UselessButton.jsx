import React, { useState } from "react";

function UselessButton() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button
        onClick={() => setCount((count) => count + 1)}
        className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 
          focus:outline-none focus:ring focus:ring-violet-300 text-white font-bold py-2 px-4 rounded"
      >
        count is {count}
      </button>
    </>
  );
}
export default UselessButton;
