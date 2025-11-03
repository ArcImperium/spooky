import {useState, useEffect} from 'react'
import './App.css'
import Story from './Story.jsx'
import Home from './Home.jsx'
import Attic from './Attic.jsx'
import Basement from './Basement.jsx'
import Bedroom from './Bedroom.jsx'
import Courtyard from './Courtyard.jsx'
import Dining from './Dining.jsx'
import Foyer from './Foyer.jsx'
import Kitchen from './Kitchen.jsx'
import Parlor from './Parlor.jsx'
import Patio from './Patio.jsx'

function App() {
  const [page, setPage] = useState(0)
  const [showStory, setShowStory] = useState(true)
  const [win, setWin] = useState(false)
  
  const [discovered1, setDiscovered1] = useState(true)
  const [discovered2, setDiscovered2] = useState(false)
  const [discovered3, setDiscovered3] = useState(false)
  const [discovered4, setDiscovered4] = useState(false)
  const [discovered5, setDiscovered5] = useState(false)
  const [discovered6, setDiscovered6] = useState(false)
  const [discovered7, setDiscovered7] = useState(false)
  const [discovered8, setDiscovered8] = useState(false)
  const [discovered9, setDiscovered9] = useState(false)

  const [unlock1, setUnlock1] = useState(false)
  const [unlock2, setUnlock2] = useState(false)
  const [unlock3, setUnlock3] = useState(false)
  const [unlock4, setUnlock4] = useState(true)
  const [unlock5, setUnlock5] = useState(true)
  const [unlock6, setUnlock6] = useState(false)
  const [unlock7, setUnlock7] = useState(false)
  const [unlock8, setUnlock8] = useState(false)
  const [unlock9, setUnlock9] = useState(false)

  const [name, setName] = useState("")
  const [showNameInput, setShowNameInput] = useState(true)
  const [stoneOrder, setStoneOrder] = useState([])
  const [stoneInput, setStoneInput] = useState([])

  useEffect(() =>{
    const stones = [0, 1, 2, 3, 4, 5, 6, 7]
    const shuffledStones = [...stones].sort(() => Math.random() - 0.5)
    setStoneOrder(shuffledStones)
  }, [])

  useEffect(() => {
    if (page === 1) {
      setDiscovered1(true)
    }
    else if (page === 2) {
      setDiscovered2(true)
    }
    else if (page === 3) {
      setDiscovered3(true)
    }
    else if (page === 4) {
      setDiscovered4(true)
    }
    else if (page === 5) {
      setDiscovered5(true)
    }
    else if (page === 6) {
      setDiscovered6(true)
    }
    else if (page === 7) {
      setDiscovered7(true)
    }
    else if (page === 8) {
      setDiscovered8(true)
    }
    else if (page === 9) {
      setDiscovered9(true)
    }
  }, [page])

  function findPage() {
    if (page === 1) {
      return <Courtyard setPage={setPage} setUnlock1={setUnlock1} unlock1={unlock1} name={name} setName={setName} setShowNameInput={setShowNameInput} showNameInput={showNameInput}/>
    }
    else if (page === 2) {
      return <Foyer setPage={setPage} setUnlock2={setUnlock2} unlock2={unlock2}/>
    }
    else if (page === 3) {
      return <Patio setPage={setPage} setUnlock3={setUnlock3} unlock3={unlock3} stoneOrder={stoneOrder} stoneInput={stoneInput} setStoneInput={setStoneInput}/>
    }
    else if (page === 4) {
      return <Basement setPage={setPage} setUnlock4={setUnlock4} unlock4={unlock4}/>
    }
    else if (page === 5) {
      return <Attic setPage={setPage} setUnlock5={setUnlock5} unlock5={unlock5}/>
    }
    else if (page === 6) {
      return <Parlor setPage={setPage} setUnlock6={setUnlock6} unlock6={unlock6} name={name}/>
    }
    else if (page === 7) {
      return <Dining setPage={setPage} setUnlock7={setUnlock7} unlock7={unlock7}/>
    }
    else if (page === 8) {
      return <Kitchen setPage={setPage} setUnlock8={setUnlock8} unlock8={unlock8}/>
    }
    else if (page === 9) {
      return <Bedroom setPage={setPage} setUnlock9={setUnlock9} unlock9={unlock9}/>
    }
    else {
      return <Home setPage={setPage} discovered1={discovered1} discovered2={discovered2} discovered3={discovered3} discovered4={discovered4} discovered5={discovered5} discovered6={discovered6} discovered7={discovered7} discovered8={discovered8} discovered9={discovered9}/>
    }
  }

  return (
    <>
    {showStory && (<Story setShowStory={setShowStory}/>)}
    {!showStory && (<>{findPage(page)}</>)}
    </>
  )
}

export default App
