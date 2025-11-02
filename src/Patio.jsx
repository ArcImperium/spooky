import {useEffect} from "react"

function Patio({setPage, setUnlock3, unlock3}) {
    useEffect(() => {
        document.title="Patio"
    }, [])

    return(
        <>
        <h1 className="room-name" onClick={() => {setPage(0)}}>Patio</h1>
        {unlock3 && (<><div className="delta-room down" onClick={() => {setPage(2)}}>↓</div>
        <div className="delta-room right" onClick={() => {setPage(9)}}>→</div>
        <div className="delta-room left" onClick={() => {setPage(8)}}>←</div></>)}
        {!unlock3 && (<><div className="delta-room down locked">↓</div>
        <div className="delta-room right locked">→</div>
        <div className="delta-room left locked">←</div></>)}
        </>
    )
}

export default Patio