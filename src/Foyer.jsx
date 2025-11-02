import {useEffect, useState} from "react"
import Freddy from './assets/freddy.webp'
import FreddySound from './assets/freddy_sound.mp3'

function Foyer({setPage, setUnlock2, unlock2}) {
    const [showFreddy, setShowFreddy] = useState(false)

    useEffect(() => {
        document.title="Foyer"
    }, [])

    function babyJumpscare() {
        setShowFreddy(true)

        const audio = new Audio(FreddySound)
        audio.play()
        setTimeout(() => {setShowFreddy(false)}, 5000)
    }

    return(
        <>
        <h1 className="room-name">Foyer</h1>
        <button className="home-button" onClick={() => {setPage(0)}}>HOME</button>
        {unlock2 && (<><div className="delta-room up" onClick={() => {setPage(3)}}>↑</div>
        <div className="delta-room down" onClick={() => {setPage(1)}}>↓</div>
        <div className="delta-room left" onClick={() => {setPage(7)}}>←</div>
        <div className="delta-room right" onClick={() => {setPage(6)}}>→</div></>)}
        {!unlock2 && (<><div className="delta-room up locked">↑</div>
        <div className="delta-room down locked">↓</div>
        <div className="delta-room left locked">←</div>
        <div className="delta-room right locked">→</div></>)}
        {!unlock2 && (<div className="foyer-info">
        <h1 className="foyer-text">The Foyer doors are all unlocked,<br/>just press this button to open them:</h1>
        <button className="name-submit" onClick={() => {babyJumpscare(); setUnlock2(true)}}>OPEN</button>
        </div>)}
        {showFreddy && (<img src={Freddy} className="freddy"/>)}
        </>
    )
}

export default Foyer