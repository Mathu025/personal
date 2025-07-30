import React, {useEffect, useState} from 'react'

const Home = () => {
    const [games, setGames] = useState([])
    const link = "https://json-server-1-u08x.onrender.com/games"

    useEffect(() => {
        fetch(link)
            .then(res => res.json())
            .then(data => setGames(data))
            .catch(err => console.error("Failed to fetch Games:", err))
    }, [])

  return (
    <>
    {games.map(game => (
        <div key={game.id}>
            <img src={game.image} alt={game.title}/>
            <h2>{game.title}</h2>
            <p>Genre: {game.genre}</p>
            <p>Platform: {game.platform}</p>
        </div>
  ))}
  </>
  )
}

export default Home