import {useEffect} from "react"

function Parlor({setPage, setUnlock6, unlock6}) {
    useEffect(() => {
        document.title="Parlor"
    }, [])

    return(
        <>
        <h1 className="room-name">Parlor</h1>
        <button className="home-button" onClick={() => {setPage(0)}}>HOME</button>
        {unlock6 && (<><div className="delta-room up" onClick={() => {setPage(9)}}>↑</div>
        <div className="delta-room down" onClick={() => {setPage(5)}}>↓</div>
        <div className="delta-room left" onClick={() => {setPage(2)}}>←</div></>)}
        {!unlock6 && (<><div className="delta-room up locked">↑</div>
        <div className="delta-room down locked">↓</div>
        <div className="delta-room left locked">←</div></>)}
        </>
    )
}

export default Parlor