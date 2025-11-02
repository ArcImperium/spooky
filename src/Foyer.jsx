import {useEffect} from "react"

function Foyer({setPage, setUnlock2, unlock2}) {
    useEffect(() => {
        document.title="Foyer"
    }, [])

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
        </>
    )
}

export default Foyer