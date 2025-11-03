import {useEffect, useState} from "react"
import Bed from './assets/bed.webp'

function Bedroom({setPage, setUnlock9, unlock9}) {
    const [sleepPercent, setSleepPercent] = useState(0)

    useEffect(() => {
        document.title="Bedroom"
    }, [])

    function sleepInBed() {
        let sleepInterval = setInterval(() => {
            setSleepPercent(prev => {
                if ((prev + 1) >= 100) {
                    clearInterval(sleepInterval)
                    setTimeout(() => {setUnlock9(true)}, 2000)
                    return 100
                }
                return prev + 1
            })
        }, 300)
    }

    return(
        <>
        <h1 className="room-name">Bedroom</h1>
        <button className="home-button" onClick={() => {setPage(0)}}>HOME</button>
        {unlock9 && (<><div className="delta-room down" onClick={() => {setPage(6)}}>↓</div>
        <div className="delta-room left" onClick={() => {setPage(3)}}>←</div></>)}
        {!unlock9 && (<><div className="delta-room down locked">↓</div>
        <div className="delta-room left locked">←</div></>)}
        {unlock9 && (<div className="bed-wrap">
            <img src={Bed} className="bed" onClick={() => {sleepInBed()}}/>
        </div>)}
        {!unlock9 && (<><div className="bed-wrap">
            <h1 className="bedroom-text">Click the bed to sleep and<br/>set your respawn point</h1>
            <img src={Bed} className="bed" onClick={() => {sleepInBed()}}/>
        </div>
        <div className="sleep-load">
            <div className="sleep-load-bar" style={{'--sleep-percent': `${sleepPercent}%`}}></div>
        </div></>)}
        </>
    )
}

export default Bedroom