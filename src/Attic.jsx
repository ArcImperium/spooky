import {useEffect} from "react"

function Attic({setPage, setUnlock5, unlock5}) {
    useEffect(() => {
        document.title="Attic"
    }, [])
    
    return(
        <>
        <h1 className="room-name">Attic</h1>
        <button className="home-button" onClick={() => {setPage(0)}}>HOME</button>
        {unlock5 && (<div className="delta-room up" onClick={() => {setPage(6)}}>↑</div>)}
        {!unlock5 && (<div className="delta-room up locked">↑</div>)}
        <div className="extremities-wrap">
            <h1 className="extremities-text">There's nothing in the Attic,<br/>but beware of danger...</h1>
        </div>
        </>
    )
}

export default Attic