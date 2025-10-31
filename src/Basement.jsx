import {useEffect} from "react"

function Basement({setPage}) {
    useEffect(() => {
        document.title="Basement"
    }, [])

    return(
        <>
        <h1 className="room-name" onClick={() => {setPage(0)}}>Basement</h1>
        <div className="delta-room up" onClick={() => {setPage(7)}}>↑</div>
        </>
    )
}

export default Basement