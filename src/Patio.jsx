import {useEffect} from "react"

function Patio({setPage}) {
    useEffect(() => {
        document.title="Patio"
    }, [])

    return(
        <>
        <h1 className="room-name">Patio</h1>
        <div className="delta-room down" onClick={() => {setPage(2)}}>↓</div>
        <div className="delta-room right" onClick={() => {setPage(9)}}>→</div>
        <div className="delta-room left" onClick={() => {setPage(8)}}>←</div>
        </>
    )
}

export default Patio