'use client';

import { useRef, useState } from "react";

const PROMPT_START = "Solve and explain the following integral: "

export default function HomePage() {
  const [currentPromptResult, setCurrentPromptResult] = useState<string>("");
  const promptRef = useRef<HTMLInputElement>(null);

  async function getCompletion() {
    let response = await fetch("http://localhost:3000/api/completion", {
      method: "POST", headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }, body: JSON.stringify({ prompt: PROMPT_START + promptRef.current?.value })
    });

    const responseData = await response.json();
    const choices = responseData.choices;

    console.log(choices);

    // let promptResult: string = "";
    // for(let choice of choices) {
    //   promptResult += choice.text + "\n----\n";
    // }

    setCurrentPromptResult(choices[0].text);
  }

  // className="text-center text-3xl font-bold underline"
  return (
    <div className="flex justify-center w-screen h-screen bg-slate-400">
      <div className="flex flex-col items-center justify-center text-center w-5/6">
        <div className="basis-5/6">{currentPromptResult}</div>
        <div className="flex flex-col basis-1/6 w-full items-center">
          <input className="w-1/2" type="text" ref={promptRef} defaultValue="1 + 1 = " ></input>
          <button onClick={getCompletion}>Get Completion</button>
        </div>
      </div>
    </div>
  )
}
