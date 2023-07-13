"use client"

import { FormEvent, useState } from "react";
export default function Home() {
const [inputVal, setInputVal] = useState("")

const handleSubmit = (event: FormEvent) => {
  ///event for TS
  event.preventDefault();
  /// to prevent refresh
}

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div>
      <div>
        <h1>Enter your name</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" 
        placeholder='Your Name' 
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}/>
        <button type='submit'>Predict Data</button>
      </form>

    </div>
    </main>
  )
}
