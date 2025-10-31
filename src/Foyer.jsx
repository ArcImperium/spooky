import {useEffect} from "react"

function Foyer({setPage}) {
    useEffect(() => {
        document.title="Foyer"
    }, [])

    return(
        <>
        <h1 className="room-name">Foyer</h1>
        <div className="delta-room up" onClick={() => {setPage(3)}}>↑</div>
        <div className="delta-room down" onClick={() => {setPage(1)}}>↓</div>
        <div className="delta-room left" onClick={() => {setPage(7)}}>←</div>
        <div className="delta-room right" onClick={() => {setPage(6)}}>→</div>
        </>
    )
}

export default Foyer