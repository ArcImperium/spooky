import {useEffect} from "react"

function Bedroom({setPage, setUnlock9, unlock9}) {
    useEffect(() => {
        document.title="Bedroom"
    }, [])

    return(
        <>
        <h1 className="room-name">Bedroom</h1>
        <button className="home-button" onClick={() => {setPage(0)}}>HOME</button>
        {unlock9 && (<><div className="delta-room down" onClick={() => {setPage(6)}}>↓</div>
        <div className="delta-room left" onClick={() => {setPage(3)}}>←</div></>)}
        {!unlock9 && (<><div className="delta-room down locked">↓</div>
        <div className="delta-room left locked">←</div></>)}
        </>
    )
}

export default Bedroom