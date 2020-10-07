import React from "react"

export default function Home() {
  const Howdy = () => (
    <button onClick={() => console.log("It's Working")}>Display Console</button>
  )
  return (
    <>
      <h1>Hello world!</h1>
      <Howdy />
    </>
  )
}
