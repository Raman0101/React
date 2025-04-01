import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className=" w-screen h-screen duration-200"
    style={{backgroundColor: color}}
    > <h1 className="fixed flex justify-center left-150 top-50 text-white">Bg-Changer</h1>
      <div className="fixed flex flex-wrap justify-center bottom-12 left-0 right-0 px-2 ">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white
          px-3 py-2 rounded-3xl">
            <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-1 rounded-full 
            text-white shadow-lg"
            style={{backgroundColor: "red"}}
            >Red</button>

            <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-full 
            text-white shadow-lg"
            style={{backgroundColor: "green"}}
            >Green</button>

            <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 rounded-full 
            text-white shadow-lg"
            style={{backgroundColor: "blue"}}
            >Blue</button>

            <button
            onClick={() => setColor("yellow")}
            className="outline-none px-4 py-1 rounded-full 
            text-black shadow-lg"
            style={{backgroundColor: "yellow"}}
            >Yellow</button>

            <button
            onClick={() => setColor("grey")}
            className="outline-none px-4 py-1 rounded-full 
            text-white shadow-lg"
            style={{backgroundColor: "grey"}}
            >Grey</button>
          </div>
      </div>

    </div>
  )
}

export default App
