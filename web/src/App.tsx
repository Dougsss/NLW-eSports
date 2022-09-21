import { useState, useEffect } from 'react';
import './styles/main.css';
import logo from './assets/Logo.svg'
import { GameBanner } from './Componentes/GameBanner';
import * as Dialog from '@radix-ui/react-dialog'
import { CreateAdBanner } from './Componentes/CreateAdBanner';
import { CreateAdModal } from './Componentes/Form/CreateAdModal.';

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _cout: {
    ads: number
  }
}

function App() {
  const [games, setGames] = useState<Game[]>([])

    useEffect(() => {
    fetch('http://localhost:3333/games')
    .then(response => response.json())
    .then(data => {
      setGames(data)
    })
  }, [])

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logo}/>

      <h1 className="text-6xl text-white font-black">
        Seu <span className="bg-nlwgradient bg-clip-text text-transparent">duo</span> está aqui.
      </h1>
      <div className="grid grid-cols-6 gap-6 mt-16">
        {games.map(game => {
          return (
            <GameBanner
              key={game.id}
              title={game.title}
              bannerUrl={game.bannerUrl} 
              adsCount={1}  // valor estatico,tem que resolver o bug no backend          
              //  adsCount={game._cout.ads}
            />
          )
        })}
      </div>

      <Dialog.Root>

        <CreateAdBanner />
        <CreateAdModal />
        
      </Dialog.Root>
    </div>
  )
}

export default App
