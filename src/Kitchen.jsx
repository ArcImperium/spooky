import {useEffect} from "react"

function Kitchen({setPage, setUnlock8, unlock8}) {
    useEffect(() => {
        document.title="Kitchen"
    }, [])

    return(
        <>
        <h1 className="room-name">Kitchen</h1>
        <button className="home-button" onClick={() => {setPage(0)}}>HOME</button>
        {unlock8 && (<><div className="delta-room down" onClick={() => {setPage(7)}}>↓</div>
        <div className="delta-room right" onClick={() => {setPage(3)}}>→</div></>)}
        {!unlock8 && (<><div className="delta-room down locked">↓</div>
        <div className="delta-room right locked">→</div></>)}
        </>
    )
}

export default Kitchen