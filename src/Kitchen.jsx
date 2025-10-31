import {useEffect} from "react"

function Kitchen({setPage}) {
    useEffect(() => {
        document.title="Kitchen"
    }, [])

    return(
        <>
        <h1 className="room-name">Kitchen</h1>
        <div className="delta-room down" onClick={() => {setPage(7)}}>↓</div>
        <div className="delta-room right" onClick={() => {setPage(3)}}>→</div>
        </>
    )
}

export default Kitchen