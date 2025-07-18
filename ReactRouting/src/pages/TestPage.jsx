import numWords from "num-words";
import { useEffect } from "react";
import { useState } from "react";

const TestPage = () => {
  const [count, setCount] = useState(0);
  const [word, setWord] = useState("");
  useEffect(() => {
    setWord(numWords(count));
  }, [count]);
  useEffect(() => {
    const savedCount = localStorage.getItem("count");
    setCount(Number(savedCount));
  }, []);
  const save = (data) => {
    localStorage.setItem("count", data);
  };
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-3">
      <div>Testing one two three</div>
      <div>TestPage</div>
      <div className="border flex flex-col items-center gap-3 p-5 rounded">
        {/* I want words here */}
        {/* Counter */}
        <h1 className="text-4xl">Counter</h1>
        <h1 className="text-3xl capitalize">{word}</h1>
        <span className="text-2xl">{count}</span>
        <button
          className="border px-3 rounded hover:border-blue-500"
          onClick={() => {
            setCount(count + 1);
            save(count + 1);
          }}
        >
          +
        </button>
        <button
          className="border px-3 rounded hover:border-blue-500"
          onClick={() => {
            setCount((pre) => Math.max(0, pre - 1));
            save(count - 1);
          }}
        >
          -
        </button>
        <button
          className="border px-3 rounded hover:border-blue-500"
          onClick={() => {
            setCount(0);
            save();
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default TestPage;
