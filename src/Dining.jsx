import {useEffect} from "react"

function Dining({setPage}) {
    useEffect(() => {
        document.title="Dining Room"
    }, [])

    return(
        <>
        <h1 className="room-name" onClick={() => {setPage(0)}}>Dining Room</h1>
        <div className="delta-room up" onClick={()  => {setPage(8)}}>↑</div>
        <div className="delta-room down" onClick={() => {setPage(4)}}>↓</div>
        <div className="delta-room right" onClick={() => {setPage(2)}}>→</div>
        </>
    )
}

export default Dining