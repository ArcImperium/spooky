import {useState, useEffect} from 'react'
import './App.css'
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
      return <Home setPage={setPage}/>
    }
  }

  return (
    <>
      {findPage(page)}
    </>
  )
}

export default App
