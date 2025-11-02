import {useEffect} from "react"

function Dining({setPage, setUnlock7, unlock7}) {
    useEffect(() => {
        document.title="Dining Room"
    }, [])

    return(
        <>
        <h1 className="room-name">Dining Room</h1>
        <button className="home-button" onClick={() => {setPage(0)}}>HOME</button>
        {unlock7 && (<><div className="delta-room up" onClick={()  => {setPage(8)}}>↑</div>
        <div className="delta-room down" onClick={() => {setPage(4)}}>↓</div>
        <div className="delta-room right" onClick={() => {setPage(2)}}>→</div></>)}
        {!unlock7 && (<><div className="delta-room up locked">↑</div>
        <div className="delta-room down locked">↓</div>
        <div className="delta-room right locked">→</div></>)}
        </>
    )
}

export default Dining