import {useEffect} from "react"

function Courtyard({setPage}) {
    useEffect(() => {
        document.title="Courtyard"
    }, [])

    return(
        <>
        <h1 className="room-name" onClick={() => {setPage(0)}}>Courtyard</h1>
        <div className="delta-room up" onClick={() => {setPage(2)}}>↑</div>
        </>
    )
}

export default Courtyard