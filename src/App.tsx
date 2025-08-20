import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-800 p-6">
      {/* Logos */}
      <div className="flex items-center gap-6 mb-6">
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img
            src={viteLogo}
            alt="Vite logo"
            className="w-20 h-20 hover:scale-110 transition-transform"
          />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img
            src={reactLogo}
            alt="React logo"
            className="w-20 h-20 hover:scale-110 transition-transform"
          />
        </a>
      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold mb-6">Vite + React + Tailwind</h1>

      {/* Counter Card */}
      <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center gap-4 mb-6">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          count is {count}
        </button>
        <p className="text-gray-600 text-center">
          Edit <code className="bg-gray-100 px-1 rounded">src/App.tsx</code> and
          save to test HMR
        </p>
      </div>

      {/* Docs link */}
      <p className="text-gray-500 text-center">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
