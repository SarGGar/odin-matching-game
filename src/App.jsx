import './App.css'
import { useEffect, useState } from 'react'
import { fetchPokemonList, fetchPokemonImgUrl, fetchPokemonImgUrlFromUrl } from './pokemonAPI'
import { genRandomIntArray, shuffle } from './listManage'
import CardDisplay from './components/CardDisplay'
import ScoreBox from './components/ScoreBox'

function App() {
  const [newGame, updateGameStatus] = useState(true)
  const [pokeIndList, updatePokeIndList] = useState([])
  const [imgUrls, setImgUrls] = useState([])
  const [selectedList, updateSelectedList] = useState([])
  const [msg, setMsg] = useState("")
  const [maxScore, setMaxScore] = useState(0)

  const currentScore = selectedList.length

  useEffect(() => {
    const fetchData = async () => {
      const list = genRandomIntArray(10, 2, 1000)
      updatePokeIndList(list);

      const urls = await getImgURLs(list);
      setImgUrls(urls);
    };
    if (newGame) {
      fetchData();
      updateGameStatus(false);
    }
    
  }, [newGame]);

  useEffect(() => {
    const shuffleData = async () => {
      let list = pokeIndList
      list = shuffle(list)
      updatePokeIndList(list);
      const urls = await getImgURLs(list);
      setImgUrls(urls);
    };
    if (selectedList.length > 0) {
      console.log('here')
      shuffleData(); 
    }  
  }, [selectedList, pokeIndList]);

  const getImgURLs = async (list) => {
    const urls = await Promise.all(
        list.map(async (ele) => {
            const url = await fetchPokemonImgUrl(ele)
            return url
    }))
    return urls
  }

  const resetGame = () => {
    updateSelectedList([])
    updateGameStatus(true)
  }

  const cardSelected = (ind) => {
    console.log(ind)
    if (selectedList.includes(ind)) {
      setMsg("Game over")
      resetGame()
    } else {
      updateSelectedList([...selectedList, ind]);
    }
  }

  useEffect(() => {
    setMaxScore(Math.max(currentScore, maxScore));
}, [currentScore]);

  console.log(pokeIndList)
  console.log(selectedList)
  console.log(currentScore)
  return (
    <>
    <section className="title">
      <h1>Memory Match Game</h1>
      <div className="score-box">
        <ScoreBox resetGameFcn={resetGame} currentScore={currentScore} maxScore={maxScore}/>
      </div>
    </section>
    
    <section className="board">
      <CardDisplay imgUrls={imgUrls} cardIndices={pokeIndList} selectionFunction={cardSelected}/>
    </section>
    
    </>
  )
}

export default App
