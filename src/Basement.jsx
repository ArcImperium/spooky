import {useEffect} from "react"

function Basement({setPage, setUnlock4, unlock4}) {
    useEffect(() => {
        document.title="Basement"
    }, [])

    return(
        <>
        <h1 className="room-name">Basement</h1>
        <button className="home-button" onClick={() => {setPage(0)}}>HOME</button>
        {unlock4 && (<div className="delta-room up" onClick={() => {setPage(7)}}>↑</div>)}
        {!unlock4 && (<div className="delta-room up locked">↑</div>)}
        </>
    )
}

export default Basement