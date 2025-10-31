import {useEffect} from "react"

function Bedroom({setPage}) {
    useEffect(() => {
        document.title="Bedroom"
    }, [])

    return(
        <>
        <h1 className="room-name">Bedroom</h1>
        <div className="delta-room down" onClick={() => {setPage(6)}}>↓</div>
        <div className="delta-room left" onClick={() => {setPage(3)}}>←</div>
        </>
    )
}

export default Bedroom