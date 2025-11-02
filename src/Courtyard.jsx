import {useEffect} from "react"

function Courtyard({setPage, setUnlock1, unlock1}) {
    useEffect(() => {
        document.title="Courtyard"
    }, [])

    return(
        <>
        <h1 className="room-name" onClick={() => {setPage(0)}}>Courtyard</h1>
        {unlock1 && (<div className="delta-room up" onClick={() => {setPage(2)}}>↑</div>)}
        {!unlock1 && (<div className="delta-room up locked">↑</div>)}
        </>
    )
}

export default Courtyard