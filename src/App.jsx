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
      return <Courtyard setPage={setPage}/>
    }
    else if (page === 2) {
      return <Foyer setPage={setPage}/>
    }
    else if (page === 3) {
      return <Patio setPage={setPage}/>
    }
    else if (page === 4) {
      return <Basement setPage={setPage}/>
    }
    else if (page === 5) {
      return <Attic setPage={setPage}/>
    }
    else if (page === 6) {
      return <Parlor setPage={setPage}/>
    }
    else if (page === 7) {
      return <Dining setPage={setPage}/>
    }
    else if (page === 8) {
      return <Kitchen setPage={setPage}/>
    }
    else if (page === 9) {
      return <Bedroom setPage={setPage}/>
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
