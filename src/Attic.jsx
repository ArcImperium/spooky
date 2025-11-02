import {useEffect} from "react"

function Attic({setPage, setUnlock5, unlock5}) {
    useEffect(() => {
        document.title="Attic"
    }, [])
    
    return(
        <>
        <h1 className="room-name" onClick={() => {setPage(0)}}>Attic</h1>
        {unlock5 && (<div className="delta-room up" onClick={() => {setPage(6)}}>↑</div>)}
        {!unlock5 && (<div className="delta-room up locked">↑</div>)}
        </>
    )
}

export default Attic