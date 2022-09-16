import { MagnifyingGlassPlus } from 'phosphor-react'

import './styles/main.css'

import logoImg from './assets/logo-nlw-esports.svg'
import GameBanner from './components/GameBanner'
import CreateAddBanner from './components/CreateAddBanner'

function App() {
  return (
    <div className="max-w-[1334px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="" />

      <h1 className="text-6xl text-white font-black mt-20 bg-nlw-gradient bg-clip-text">
        Seu <span className="text-transparent">duo</span> está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        <GameBanner
          bannerUrl="/game-1.png"
          title="League of Legends"
          adsCount={5}
        />
      </div>

      <CreateAddBanner />
    </div>
  )
}

export default App
