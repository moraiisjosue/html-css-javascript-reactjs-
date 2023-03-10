import { useState } from 'react'
import reactLogo from './assets/react.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container mx-auto px-4 py-8 bg-slate-600 space-y-8">

      <div className="relative ">
        <h6 className="font-bold text-white">Componente Dropdown</h6>
        <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown"  aria-expanded="false" className="dropdown-toggle flex items-center  bg-gray-50 border-2 border-emerald-900 rounded px-2 text-md text-black-300 focus:outline-none shadow" type="button">
          Botão
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
          </svg>
        </button>
        <div
          id="dropdown"
          className=" dropdown-menu absolute hidden w-40 bg-white border border-blue-300 py-1 shadow-md rounded-md"
        >
          <ul aria-labelledby="dropdownDefaultButton">
            <li>
              <a
                href=""
                className="block text-sm text-gray-600 px-3  bg-white hover:bg-gray-100"
              >
                Link1
              </a>
            </li>

            <li>
              <a
                href=""
                className="block text-sm text-gray-600 px-3  bg-white hover:bg-gray-100"
              >
                Link2
              </a>
            </li>

            <li>
              <a
                href=""
                className="block text-sm text-gray-600 px-3  bg-white hover:bg-gray-100"
              >
                Link3
              </a>
            </li>

            <li>
              <a
                href=""
                className="block text-sm text-gray-600 px-3  bg-white hover:bg-gray-100"
              >
                Link4
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h6 className="font-bold text-white">Componente Input</h6>
        <input
          type="text"
          placeholder="Digita uma palavra"
          className="w-full bg-gray-50 border-2 border-emerald-900 focus:border-blue-300 rounded px-2 text-sm text-black-300 focus:outline-none">
        </input>
      </div>


      <div className="space-x-2">
        <h6 className="font-bold text-white">Componente Badge</h6>
        <div className="inline-flex item-center text-sm bg-green-100 px-1.5 py-0.5 rounded-md text-green-800 font-medium">
          Ativo
        </div>

        <div className="inline-flex item-center text-sm bg-green-100 px-1.5 py-0.5 rounded-full text-green-800 font-medium">
          Ativo
        </div>

      </div>

      <div>
        <h6 className="font-bold text-white">Componente Card</h6>

        <div className="bg-slate-200 my-4 py-4 border rounded-lg shadow-md overflow-hidden">
          <div className="mx-3 pt-1 pb-3">
            <h6>Título</h6>
          </div>

          <div className="mx-1 py-1">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam commodi laboriosam quasi ad sit facilis nobis accusamus velit omnis esse recusandae animi dolorum necessitatibus eos, soluta ea quod, at voluptatibus.
          </div>

          <div className="w-full mx-3 pt-3 pb-1 border-t border-gray-100">
            <button className="rounded-md bg-slate-600 hover:bg-slate-500 py-1 px-3 text-white">Click Aqui</button>
          </div>

        </div>
      </div>

    </div>
  )
}

export default App
