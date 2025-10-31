import {useEffect} from "react"

function Attic({setPage}) {
    useEffect(() => {
        document.title="Attic"
    }, [])
    
    return(
        <>
        <h1 className="room-name">Attic</h1>
        <div className="delta-room up" onClick={() => {setPage(6)}}>↑</div>
        </>
    )
}

export default Attic