"use client"
///allows us to use hooks on client side, otherwise its serverside

import { FormEvent, useState } from "react";
import {useRouter} from 'next/navigation';
///Next hooks allows routing

export default function Home() {
const [inputVal, setInputVal] = useState("")
const {push} = useRouter();
/// allows us to use push to redirect to other pages

const handleSubmit = (event: FormEvent) => {
  ///event for TS
  event.preventDefault();
    /// to prevent refresh
  push(`/prediction/${inputVal}`)
  /// now we gona go any route the input value was
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
