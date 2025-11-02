import {useEffect} from "react"

function Courtyard({setPage, setUnlock1, unlock1}) {
    useEffect(() => {
        document.title="Courtyard"
    }, [])

    return(
        <>
        <h1 className="room-name">Courtyard</h1>
        <button className="home-button" onClick={() => {if (unlock1) {setPage(0)}}}>HOME</button>
        {unlock1 && (<div className="delta-room up" onClick={() => {setPage(2)}}>↑</div>)}
        {!unlock1 && (<div className="delta-room up locked">↑</div>)}
        </>
    )
}

export default Courtyard