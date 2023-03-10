import { useState } from 'react'
import './App.css'
import Featured from "./assets/img/featured-img.png"
import Hotel1 from "./assets/img/hotel-1.jpeg"
import Hotel2 from "./assets/img/hotel-2.jpeg"
import Hotel3 from "./assets/img/hotel-3.jpeg"
import Hotel4 from "./assets/img/hotel-4.jpeg"
import Shadow from "./assets/img/image-shadow.png"
import IconInsta from "./assets/img/icon-instagram.png"
import IconFace from "./assets/img/icon-facebook.png"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-screen'>
      <div>
        {/*Menu*/}
        <div>
          <div className='container max-w-screen-lg mx-auto px-4 h-24 flex items-center justify-between'>
            <div>
              <h3 className='font-bold'>LOGO</h3>
            </div>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className='text-sm text-gray-600 hover:font-bold'>Como reservar</a>
              </li>
              <li>
                <a href="#" className='text-sm text-gray-600 hover:font-bold'>Sobre nós</a>
              </li>
              <li>
                <a href="#" className='text-sm text-gray-600 hover:font-bold'>Informações</a>
              </li>
              <li>
                <a href="#" className='text-sm text-gray-600 hover:font-bold'>Contato</a>
              </li>
            </ul>
          </div>
        </div>
        {/*Banner*/}
        <div className="bg-jardim-hotel w-full bg-no-repeat flex items-center justify-center">
          <div className='container mx-auto px-4 h-96 flex items-center justify-center'>
            <div>
              <div>
                <h3 className='text-3xl text-white'>Onde você quer ir?</h3>
                <p className=' text-white'>Escolha o estado e cidade para achar os melhores resorts.</p>
              </div>
              <div className='mt-7'>
                <form className='grid grid-cols-2 lg:grid-cols-3 gap-4'>
                  <select className='bg-white px-1 py-3 rounded-md text-gray-600'>
                    <option selected>Escolha um Estado</option>
                  </select>
                  <select className='bg-white px-1 py-3 rounded-md text-gray-600'>
                    <option selected>Escolha uma cidade</option>
                  </select>
                  <button className='col-span-2 lg:col-span-1 inline-flex items-center justify-center bg-amber-600 px-2 py-3 rounded-md text-black hover:bg-amber-500'>
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
                    </svg>Pesquisar Resorts</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/*featured resort*/}
        <div className='my-6'>
          <div className="container max-w-screen-lg mx-auto px-4 py-10">
            <div className="flex flex-col-reverse lg:flex-row">
              <div className='pr-10 text-left'>
                <div className='text-sm text-gray-600 font-medium'>RESORT EM DESTAQUE</div>
                <div className='text-2xl text-gray-800 '>Ecoresort Praia do Campeche Florianópolis</div>
                <div className='text-sm text-gray-600 font-medium mt-2'>Hotel qualidade 5 estrelas</div>
                <div className='text-sm text-gray-600 font-medium mt-2'>
                  <p className='mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, cum. Ex accusantium qui accusamus suscipit rerum, possimus atque id, fuga eveniet similique incidunt nobis aliquam aut esse voluptatibus modi pariatur.</p>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit quae dolore consequatur iste reprehenderit? Eum, voluptatum nulla et vel facilis saepe assumenda quibusdam quo architecto ea consequuntur nesciunt, est nihil?</p>
                </div>
                <button className='flex items-center bg-amber-600 text-gray-800 rounded border px-4 py-2 text-lg mt-2 hover:bg-amber-500'>
                  Solicitar Reserva
                  <svg className="w-4 ml-2" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
                  </svg>
                </button>

              </div>
              <div className='flex-shrink-0 lg:ml-auto mb-5 lg:mb-0 '>
                <img src={Featured} width='450' />
              </div>
            </div>
          </div>
        </div>
        {/*resorts grid*/}
        <div>
          <div className="container max-w-screen-lg mx-auto px-4">
            <div className='text-2xl text-gray-600 font-medium mb-8'>
              Conheça mais resorts
            </div>
            <div className="md:grid md:grid-cols-4 md:grid-row-2 md:gap-6 space-y-4 md:space-y-0">
              <div className="relative md:col-span-2 row-span-2 rounded-xl overflow-hidden">
                <img src={Hotel1} className="w-full h-full object-cover" />
                <div className='absolute bottom-0 pl-4 pb-2 text-white text-xl font-bold z-10'>Beach Park Resort</div>
                <img src={Shadow} className="absolute bottom-0 left-0 right-0 h-12" />
              </div>
              <div className="relative md:col-span-2 rounded-xl md:h-48 overflow-hidden">
                <img src={Hotel2} className="w-full h-full object-cover" />
                <div className='absolute bottom-0 pl-4 pb-2 text-white text-xl font-bold z-10'>Salinas Resort</div>
                <img src={Shadow} className="absolute bottom-0 left-0 right-0 h-12" />
              </div>
              <div className="relative rounded-xl overflow-hidden">
                <img src={Hotel3} className="w-full h-full object-cover" />
                <div className='absolute bottom-0 pl-4 pb-2 text-white text-xl font-bold z-10'> Grand Palladium</div>
                <img src={Shadow} className="absolute bottom-0 left-0 right-0 h-12" />
              </div>
              <div className="relative rounded-xl overflow-hidden">
                <img src={Hotel4} className="w-full h-full object-cover" />
                <div className='absolute bottom-0 pl-4 pb-2 text-white text-xl font-bold z-10'>Arraial do Cabo</div>
                <img src={Shadow} className="absolute bottom-0 left-0 right-0 h-12" />
              </div>
            </div>
          </div>
        </div>
        {/*resorts search */}
        <div className='my-12'>
          <div className='container mx-auto max-w-screen-lg px-4 flex items-center justify-center'>
            <div className='mt-7'>
              <form className='lg:space-x-6 lg:grid-cols-3 grid grid-cols-2 gap-4'>
                <select className='bg-white px-1 py-3 border border-gray-600 rounded-md text-gray-600'>
                  <option selected>Escolha um Estado</option>
                </select>
                <select className='bg-white px-3 py-3 border border-gray-600 rounded-md text-gray-600'>
                  <option selected>Escolha uma  cidade</option>
                </select>
                <button className='col-span-2 lg:col-span-1 inline-flex items-center justify-center bg-amber-600 px-2 py-3 rounded-md text-black hover:bg-amber-500'>
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>
                  </svg>Pesquisar Resorts</button>
              </form>
            </div>
          </div>
        </div>
        {/* Footer */}
        <div className='border-t border-gray-400'>
          <div className="container max-w-screen-lg mx-auto px-4 py-4">
            <div className='flex justify-between px-10'>
              <div className='font-bold'>
                LOGO
              </div>
              <div className='flex space-x-4'>
                <a><img src={IconInsta}/></a>
                <a><img src={IconFace}/></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
export default App
